"use client";

import { useEffect, useRef, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import styles from "./KakaoMap.module.scss";
import { LatLng, Store } from "@/types/MapType";
import { useDispatch, useSelector } from "react-redux";
import { changeDumData } from "@/redux/slice/dumdataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useQuery } from "@tanstack/react-query";
import SearchBtn from "@/app/main/components/SearchBtn";

export default function KakaoMap() {
  const dispatch: AppDispatch = useDispatch();
  // const data = useSelector((state: RootState) => state.dumdata.value);
  const [load, setLoad] = useState<boolean>(false);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const [level, setLevel] = useState<number>(4);
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [nowPosition, setNowPosition] = useState<LatLng>({
    lat: 36.628297,
    lng: 127.492533,
  });
  const shopIdx: number = useSelector((state: RootState) => state.shopIndex.value);
  // 리액트 쿼리 사용하여 대전 데이터 가져오기
  const { isLoading, error, data }: { isLoading: boolean; error: any; data: Store[] | undefined } = useQuery({
    queryKey: ["dumdata"],
    queryFn: async () => {
      return await fetch("https://j11b107.p.ssafy.io/api/temp").then((res) => res.json());
    },
  });

  const getInfo = () => {
    const map = mapRef.current;
    if (!map) return;

    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();

    const data = {
      sw: { lat: swLatLng.getLat(), lng: swLatLng.getLng() },
      ne: { lat: neLatLng.getLat(), lng: neLatLng.getLng() },
    };

    console.log(data);
  };

  // 대전 데이터만 로드
  useEffect(() => {
    if (data) {
      const dumdata = data;
      dispatch(changeDumData(dumdata));
    }
  }, [data]);

  useEffect(() => {
    if (data && shopIdx !== 0) {
      setNowPosition({
        lat: data.find((a: Store) => a.id == shopIdx)!.latitude,
        lng: data.find((a: Store) => a.id == shopIdx)!.longitude,
      });
    }
  }, [shopIdx]);

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
          level={level}
          isPanto={true}
          ref={mapRef}
        >
          <SearchBtn getInfo={getInfo} />
          <MarkerClusterer averageCenter={true} minLevel={3}>
            {data &&
              data.map((value, index) => {
                return (
                  <MapMarker
                    key={value.id}
                    position={{
                      lat: value.latitude,
                      lng: value.longitude,
                    }}
                    image={
                      value.id === shopIdx
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
                      dispatch(changeShopIndex(value.id));
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
