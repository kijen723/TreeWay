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
      SIG_CD?: string;
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
      SIG_CD?: string;
      SIG_ENG_NM?: string;
      SIG_KOR_NM?: string;
    };
    type: string;
  }[];
};

export type Store = {
    "salesId": number,
    "majorBusiness": string,
    "industryDetail": string,
    "address": string,
    "monthlySales": number,
    "monthly_earnings": number,
    "host_name": string,
    "phone": string,
    "tradeName": string,
    "floor_class": string,
    "current_floor": number,
    "total_floors" : number,
    "square_meter": number,
    "available_parking": number,
    "total_parking": number,
    "premium" : number,
    "deposit" : number,
    "monthly_rent": number,
    "administration_cost": number,
    "material_cost": number,
    "personnel_expense": number,
    "utility_bill": number,
    "other_expenses": number,
    "additional_information": string,
    "itemNum": number,
    "latitude": number,
    "longitude": number
}

export type locationData = {
  swLatitude: number,
  swLongitude: number,
  neLatitude: number,
  neLongitude: number,
}