export type LatLng = {
  lat: number;
  lng: number;
};

export type Polygon1 = {
  type: string;
  features: {
    geometry: {
      type: string;
      coordinates: number[][][] | number[][][][];
    };
    properties: {
      CTPRVN_CD?: string;
      CTP_ENG_NM?: string;
      CTP_KOR_NM?: string;
      SIGRVN_CD?: string;
      SIG_ENG_NM?: string;
      SIG_KOR_NM?: string;
    };
    type: string;
  }[];
};

export type Polygon2 = {
  type: string;
  features: {
    isMouseOver : boolean;
    geometry: {
      type: string;
      coordinates: LatLng[][] | LatLng[];
    };
    properties: {
      CTPRVN_CD?: string;
      CTP_ENG_NM?: string;
      CTP_KOR_NM?: string;
      SIGRVN_CD?: string;
      SIG_ENG_NM?: string;
      SIG_KOR_NM?: string;
    };
    type: string;
  }[];
};