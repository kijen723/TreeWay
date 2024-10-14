"use client";

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker, Polygon } from "react-kakao-maps-sdk";
import styles from "./KakaoMapPolygon.module.scss";
import { LatLng, Polygon1, Polygon2 } from "@/types/MapType";
import hole, { areaInfo } from "./data";
import { IoArrowBackSharp } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { convertCoordinates } from "@/util/ConvertCoordinate";

const KakaoMapPolygon = () => {
  const [nowPosition, setNowPosition] = useState<LatLng>({
    lat: 36.628297,
    lng: 127.492533,
  });
  const [scriptLoad, setScriptLoad] = useState<boolean>(false);
  const [polygonData, setPolygonData] = useState<Polygon2 | null>(null);
  const [mousePosition, setMousePosition] = useState<LatLng>({
    lat: 0,
    lng: 0,
  });
  const [areaIndex, setAreaIndex] = useState<number>(-1);
  const router = useRouter();
  const pathName = usePathname();

  // 폴리곤 데이터 불러오기
  useEffect(() => {
    const loadJson = async () => {
      let data;
      if (areaIndex === -1) {
        data = await import("./JSON/Korea.json");
      } else {
        data = await import(`./JSON/${areaInfo[areaIndex].name}.json`);
      }

      setPolygonData(convertCoordinates(data as Polygon1));
    };
    loadJson();
  }, [areaIndex]);

  // 카카오맵 로드
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
    <div className={styles.box}>
      {areaIndex !== -1 ? (
        <div
          className={styles.back}
          onClick={() => {
            setAreaIndex(-1);
          }}
        >
          <IoArrowBackSharp />
        </div>
      ) : null}
      {scriptLoad ? (
        <Map
          center={areaIndex === -1 ? { lat: nowPosition.lat, lng: nowPosition.lng } : areaInfo[areaIndex].position}
          style={{ width: "100vw", height: "100vh" }}
          level={areaIndex === -1 ? 12 : areaInfo[areaIndex].level}
          zoomable={false}
          disableDoubleClickZoom={true}
          draggable={pathName === "/trend" ? true : false}
          onMouseMove={(_map, mouseEvent) => {
            setMousePosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            });
          }}
        >
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
                  strokeWeight={3}
                  strokeColor="black"
                  strokeOpacity={1}
                  fillColor={data.isMouseOver ? "#99582a" : "#edede9"}
                  fillOpacity={0.7}
                  onMouseover={() => {
                    const result = { ...polygonData };
                    result.features[index].isMouseOver = true;
                    setPolygonData(result);
                  }}
                  onMouseout={() => {
                    const result = { ...polygonData };
                    result.features[index].isMouseOver = false;
                    setPolygonData(result);
                  }}
                  onClick={() => {
                    if (areaIndex === -1) {
                      setAreaIndex(index);
                    }else{
                      router.push(`/trend/${data.properties.SIG_CD}?location=${encodeURIComponent(data.properties.SIG_KOR_NM as string)}`);
                    }
                  }}
                ></Polygon>
              );
            })}
          {polygonData?.features.findIndex((v) => v.isMouseOver) !== -1 && (
            <CustomOverlayMap position={mousePosition} xAnchor={0.5} yAnchor={1.5}>
              <div className={styles.overlay}>
                {areaIndex === -1
                  ? polygonData?.features.find((v) => v.isMouseOver)?.properties.CTP_KOR_NM
                  : polygonData?.features.find((v) => v.isMouseOver)?.properties.SIG_KOR_NM}
              </div>
            </CustomOverlayMap>
          )}
        </Map>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default KakaoMapPolygon;
