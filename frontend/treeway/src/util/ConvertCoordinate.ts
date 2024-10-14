import { LatLng, Polygon1, Polygon2 } from "@/types/MapType";

export const convertCoordinates = (polygonData: Polygon1): Polygon2 => {
    return {
      type: polygonData.type,
      features: polygonData.features.map((feature) => ({
        isMouseOver: false,
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
                (feature.geometry.coordinates as number[][][][]).map((polygon) => {
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
                }),
        },
        properties: {
          CTPRVN_CD: feature.properties.CTPRVN_CD,
          CTP_ENG_NM: feature.properties.CTP_ENG_NM,
          CTP_KOR_NM: feature.properties.CTP_KOR_NM,
          SIG_CD: feature.properties.SIG_CD,
          SIG_ENG_NM: feature.properties.SIG_ENG_NM,
          SIG_KOR_NM: feature.properties.SIG_KOR_NM,
        },
      })),
    };
  };