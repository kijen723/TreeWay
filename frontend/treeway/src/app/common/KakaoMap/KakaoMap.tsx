"use client";

import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styles from "./KakaoMap.module.scss";
import { LatLng, Store } from "@/types/MapType";
import { useDispatch, useSelector } from "react-redux";
import { changeDumData } from "@/redux/slice/dumdataSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useQuery } from "@tanstack/react-query";

export default function KakaoMap() {
  const dispatch: AppDispatch = useDispatch();
  // const data = useSelector((state: RootState) => state.dumdata.value);
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [nowPosition, setNowPosition] = useState<LatLng>({
    lat: 36.628297,
    lng: 127.492533,
  });
  const shopIdx: number = useSelector(
    (state: RootState) => state.shopIndex.value
  );
  const { isLoading, error, data} : {isLoading:boolean, error: any, data : Store[] | undefined} = useQuery({
    queryKey: ["dumdata"],
    queryFn: async () => {
      return await fetch("https://j11b107.p.ssafy.io/api/temp").then((res) => res.json());
    },
  });

  // 더미 데이터 로드
  useEffect(() => {
    if(data){
      const dumdata = data;
      console.log(data);
      dispatch(changeDumData(dumdata));
    }
  }, [data]);

  useEffect(() => {
    if (data && shopIdx !== 0) {
      setNowPosition({
        lat: data.find((a :Store) => a.id == shopIdx)!.latitude,
        lng: data.find((a :Store) => a.id == shopIdx)!.longitude,
      });
    }
  }, [shopIdx]);

  // 카카오 맵 로드 및 현재 접속 위치 확인
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
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
          level={4}
          isPanto={true}
        >
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
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
}
