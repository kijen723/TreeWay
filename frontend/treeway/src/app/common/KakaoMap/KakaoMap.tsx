"use client";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import styles from './KakaoMap.module.scss';
import { LatLng, Store } from '@/types/MapType';
=======
import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import styles from './KakaoMap.module.scss';
import { LatLng, locationData, Store } from '@/types/MapType';
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
import { useDispatch, useSelector } from 'react-redux';
import { changeDumData } from '@/redux/slice/dumdataSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { changeShopIndex } from '@/redux/slice/shopIndexSlice';
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import SearchBtn from '@/app/main/components/SearchBtn';
>>>>>>> 579c2e4 (feat:분석이력조회 컴포넌트 개발)
=======
import { useMutation, useQuery } from '@tanstack/react-query';
import SearchBtn from '@/app/main/components/SearchBtn';
import { usePathname } from 'next/navigation';
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)

export default function KakaoMap() {
  const dispatch: AppDispatch = useDispatch();
  const pathName = usePathname();
  // const data = useSelector((state: RootState) => state.dumdata.value);
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const data = useSelector((state: RootState) => state.dumdata.value);
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [nowPosition, setNowPosition] = useState<LatLng>({
    lat: 36.628297,
    lng: 127.492533,
  });
<<<<<<< HEAD
<<<<<<< HEAD
  const shopIdx: number = useSelector((state: RootState) => state.shopIndex.value);
=======
  const shopIdx: number = useSelector(
    (state: RootState) => state.shopIndex.value
  );
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)

  const mutation = useMutation<Store[], Error, locationData>(
    async (locationData) => {
      const response = await fetch('https://j11b107.p.ssafy.io/api/sales/map', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(locationData),
      });
      if (!response.ok) {
        throw new Error('Failed to send location data');
      }

      return response.json();
    }
<<<<<<< HEAD

    return response.json();
=======
  const shopIdx: number = useSelector(
    (state: RootState) => state.shopIndex.value
  );
  // 리액트 쿼리 사용하여 대전 데이터 가져오기
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: any; data: Store[] | undefined } = useQuery({
    queryKey: ['dumdata'],
    queryFn: async () => {
      return await fetch('https://j11b107.p.ssafy.io/api/temp').then((res) =>
        res.json()
      );
    },
>>>>>>> 579c2e4 (feat:분석이력조회 컴포넌트 개발)
  });
=======
  );
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)

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
    if (mutation.data && Array.isArray(mutation.data) && mutation.data.length) {
      console.log(mutation.data);
      dispatch(changeDumData(mutation.data));
    }
  }, [mutation.data]);

  useEffect(() => {
    if (data && shopIdx !== 0) {
      setNowPosition({
        lat: data.find((a: Store) => a.id == shopIdx)!.latitude,
        lng: data.find((a: Store) => a.id == shopIdx)!.longitude,
      });
    }
  }, [shopIdx]);

  useEffect(() => {
    if (scriptLoad) {
      setTimeout(()=> {
        getInfo();
      }, 100);
      setTimeout(()=> {
        getInfo();
      }, 200);
    }
  }, [scriptLoad]);

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
          level={4}
          isPanto={true}
          ref={mapRef}
          draggable={pathName === '/main' ? true : false}
          zoomable={pathName === '/main' ? true : false}
        >
          <SearchBtn getInfo={getInfo} />
          <MarkerClusterer averageCenter={true} minLevel={3}>
            {Array.isArray(data) && data.length !== 0 &&
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
