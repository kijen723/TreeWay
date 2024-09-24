"use client";

import { useEffect, useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polygon,
} from "react-kakao-maps-sdk";
import styles from "./page.module.scss";
import { LatLng, Polygon1, Polygon2 } from "./type/Type";
import hole, {areaInfo} from "./data";


// 뒤로가기 버튼 만들어야 돼!!!!!!!
const KakaoMap = () => {
  const convertCoordinates = (polygonData: Polygon1): Polygon2 => {
    return {
      type: polygonData.type,
      features: polygonData.features.map((feature) => ({
        isMouseOver : false,
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
          SIGRVN_CD: feature.properties.SIGRVN_CD,
          SIG_ENG_NM: feature.properties.SIG_ENG_NM,
          SIG_KOR_NM: feature.properties.SIG_KOR_NM,
        },
      })),
    };
  };
  const [nowPosition, setNowPosition] = useState<LatLng>({lat : 36.628297, lng : 127.492533});
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<Polygon2 | null>(null);
  const [mousePosition, setMousePosition] = useState<LatLng>({lat : 0, lng : 0});
  const [areaIndex, setAreaIndex] = useState<number>(-1);

  useEffect(()=>{
    const loadJson = async () => {
      let data;
      if(areaIndex === -1){
        data = await import("./JSON/Korea.json");
      }else{
        data = await import(`./JSON/${areaInfo[areaIndex].name}.json`);
      }
      
      setPolygonData(convertCoordinates(data as Polygon1));
    }
    loadJson();
  }, [areaIndex])

  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      setScriptLoad(true);
    });

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        setNowPosition({lat : position.coords.latitude, lng : position.coords.longitude});
      })
    }
    // setPolygonData(convertCoordinates(data));
  }, []);

  // useEffect(()=>{
  //   setPolygonData(convertCoordinates(data));
  // }, [data])

  return (
    <div className={styles.box}>
      {scriptLoad ? (
        <Map
          center={areaIndex === -1 ? { lat: nowPosition.lat, lng: nowPosition.lng } : areaInfo[areaIndex].position}
          style={{ width: "100vw", height: "100vh" }}
          level={areaIndex === -1 ? 12 : areaInfo[areaIndex].level}
          zoomable={false}
          disableDoubleClickZoom={true}
          
          onMouseMove={(_map, mouseEvent)=>{
            setMousePosition({
              lat : mouseEvent.latLng.getLat(),
              lng : mouseEvent.latLng.getLng(),
            })
          }}
          
        >
          {/* <MapMarker
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
          ></MapMarker> */}
          {polygonData &&
            polygonData.features.map((data, index) => {
              return (
                <Polygon
                  key={index}
                  path={
                    data.properties.CTPRVN_CD === "46"
                      ? [...(data.geometry.coordinates as LatLng[][]), hole]
                      : (data.geometry.coordinates as LatLng[])
                  }
                  strokeWeight={2}
                  strokeColor="black"
                  strokeOpacity={1}
                  fillColor={data.isMouseOver ? "black" : "#eee"}
                  fillOpacity={0.5}
                  onMouseover={() => {
                    const result = {...polygonData}
                    result.features[index].isMouseOver = true;
                    setPolygonData(result);
                  }}
                  onMouseout={() => {
                    const result = {...polygonData}
                    result.features[index].isMouseOver = false;
                    setPolygonData(result);
                  }}
                  onClick={()=>{
                    if(areaIndex === -1){
                      setAreaIndex(index)
                    }
                  }}
                ></Polygon>
              );
            })}
            {polygonData?.features.findIndex((v) => v.isMouseOver) !== -1 && (
              <CustomOverlayMap position = {mousePosition} yAnchor={2}>
                <div>{areaIndex === -1 ? polygonData?.features.find((v) => v.isMouseOver)?.properties.CTP_KOR_NM : polygonData?.features.find((v) => v.isMouseOver)?.properties.SIG_KOR_NM}</div>
              </CustomOverlayMap>
            )}
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default KakaoMap;
