"use client";

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker, Polygon } from "react-kakao-maps-sdk";
import styles from "./page.module.scss";
import data from "./JSON/Korea030.json";
import {LatLng, Polygon1, Polygon2} from './type/Type';
import hole from './hole';

const KakaoMap = () => {
  const convertCoordinates = (polygonData: Polygon1): Polygon2 => {
    return {
      type: polygonData.type,
      features: polygonData.features.map((feature) => ({
        type: feature.type,
        geometry: {
          type: feature.geometry.type,
          coordinates:
            feature.geometry.type === "Polygon"
              ? // Polygon일 때 처리
                (feature.geometry.coordinates as number[][][]).map((array) =>
                  array.map((coord) => ({
                    lat: parseFloat(coord[1].toString()), // 경도와 위도를 교체
                    lng: parseFloat(coord[0].toString()),
                  }))
                )
              : // MultiPolygon일 때 처리
                (feature.geometry.coordinates as number[][][][]).map(
                  (polygon) => {
                    let newArray: LatLng[] = [];
                    polygon.map((array) => {
                      array.forEach((coord) => {
                        newArray.push({
                          lat: parseFloat(coord[1].toString()), // 경도와 위도를 교체
                          lng: parseFloat(coord[0].toString()),
                        });
                      });
                    });
                    return newArray;
                  }
                ),
        },
        properties: {
          CTPRVN_CD: feature.properties.CTPRVN_CD,
          CTP_ENG_NM: feature.properties.CTP_ENG_NM,
          CTP_KOR_NM: feature.properties.CTP_KOR_NM,
        },
      })),
    };
  };

  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<Polygon2 | null>(null);

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoad(true);
    });

    setPolygonData(convertCoordinates(data));
  }, []);

  return (
    <div className={styles.box}>
      {scriptLoad ? (
        <Map
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: "100vw", height: "100vh" }}
          level={10}
        >
          <MapMarker
            position={{
              lat: 36.35485742248066,
              lng: 127.29835443980944,
            }}
            title="연수원"
          ></MapMarker>
          <MapMarker
            position={{
              lat: 36.350941775577425,
              lng: 127.30107307434082,
            }}
            title="밭대"
          ></MapMarker>
          {polygonData &&
            polygonData.features.map((data) => {
              return (
                <Polygon
                  path={data.properties.CTPRVN_CD === "46" ? [...(data.geometry.coordinates as LatLng[][]), hole] : data.geometry.coordinates as LatLng[]}
                  strokeWeight={3}
                  strokeColor="black"
                  strokeOpacity={1}
                  fillColor="#fff"
                  fillOpacity={0.5}
                ></Polygon>
              );
            })}
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default KakaoMap;
