"use client";

import { useEffect, useRef, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import styles from "./KakaoMap.module.scss";
import { LatLng, locationData, Store } from "@/types/MapType";
import { useDispatch, useSelector } from "react-redux";
import { changeDumData } from "@/redux/slice/dumdataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useMutation, useQuery } from "@tanstack/react-query";
import SearchBtn from "@/app/main/components/SearchBtn";
import { usePathname } from "next/navigation";
import { changeSideControl } from "@/redux/slice/sidecontrolSlice";

export default function KakaoMap() {
  const dispatch: AppDispatch = useDispatch();
  const pathName = usePathname();
  // const data = useSelector((state: RootState) => state.dumdata.value);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const data = useSelector((state: RootState) => state.dumdata.value);
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(4);
  const [nowPosition, setNowPosition] = useState<LatLng>({
    lat: 36.628297,
    lng: 127.492533,
  });
  const [isCentered, setIsCentered] = useState<boolean>(false);
  const shopIdx: number = useSelector((state: RootState) => state.shopIndex.value);
  const mutation = useMutation<Store[], Error, locationData>(async (locationData) => {
    const response = await fetch("https://j11b107.p.ssafy.io/api/sales/map", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    });
    if (!response.ok) {
      throw new Error("Failed to send location data");
    }

    return response.json();
  });

  const getInfo = () => {
    const map = mapRef.current;
    if (!map) return;

    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();

    const locationData = {
      swLatitude: swLatLng.getLat(),
      swLongitude: swLatLng.getLng(),
      neLatitude: neLatLng.getLat(),
      neLongitude: neLatLng.getLng(),
    };
    mutation.mutate(locationData);
  };

  useEffect(() => {
    if (mutation.data && Array.isArray(mutation.data) && mutation.data.length !== 0) {
      dispatch(changeDumData(mutation.data));
    }
  }, [mutation.data]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0 && shopIdx !== 0) {
      setNowPosition({
        lat: data.find((a: Store) => a.salesId === shopIdx)!.latitude,
        lng: data.find((a: Store) => a.salesId === shopIdx)!.longitude,
      });
    }
  }, [shopIdx]);

  useEffect(() => {
    if (scriptLoad) {
      setTimeout(() => {
        getInfo();
      }, 100);
      setTimeout(() => {
        getInfo();
      }, 200);
    }
  }, [scriptLoad]);

  useEffect(() => {
    dispatch(changeShopIndex(0));
  }, []);

  // 카카오 맵 로드 및 현재 접속 위치 확인
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services,clusterer,drawing`;
    document.head.appendChild(script);
    script.addEventListener("load", () => {
      setScriptLoad(true);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setNowPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  return (
    <div className={styles.map}>
      {scriptLoad ? (
        <Map
          center={{ lat: nowPosition.lat, lng: nowPosition.lng }}
          style={{ width: "100%", height: "100%" }}
          level={zoomLevel}
          isPanto={true}
          ref={mapRef}
          onZoomChanged={(map) => {
            const newZoomLevel = map.getLevel();
            setZoomLevel(newZoomLevel);
          }}
          onCenterChanged={()=>{
            setIsCentered(false)
          }}
        >
          {pathName === "/main" && <SearchBtn zoomLevel={zoomLevel} getInfo={getInfo} isCentered={isCentered} setIsCentered={setIsCentered} />}
          <MarkerClusterer averageCenter={true} minLevel={3}>
            {Array.isArray(data) &&
              data.map((value, index) => {
                return (
                  <MapMarker
                    key={index}
                    position={{
                      lat: value.latitude,
                      lng: value.longitude,
                    }}
                    image={
                      value.salesId === shopIdx
                        ? {
                            src: "/image/greenMarker.png",
                            size: {
                              width: 50,
                              height: 50,
                            },
                          }
                        : {
                            src: "/image/blueMarker.png",
                            size: {
                              width: 40,
                              height: 40,
                            },
                          }
                    }
                    onClick={() => {
                      dispatch(changeShopIndex(value.salesId));
                      dispatch(changeSideControl(true));
                      setZoomLevel(2);
                    }}
                  />
                );
              })}
          </MarkerClusterer>
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
}
