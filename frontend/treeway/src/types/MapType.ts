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
    "industryDetailId" : number,
    "industryDetailName": string,
    "address": string,
    "monthlySales": number,
    "monthlyEarnings": number,
    "hostName": string,
    "phone": string,
    "tradeName": string,
    "floorClass": string,
    "currentFloor": number,
    "totalFloors" : number,
    "squareMeter": number,
    "availableParking": number,
    "totalParking": number,
    "premium" : number,
    "deposit" : number,
    "monthlyRent": number,
    "administrationCost": number,
    "materialCost": number,
    "personnelExpense": number,
    "utilityBill": number,
    "otherExpenses": number,
    "additionalInformation": string,
    "itemNum": number,
    "latitude": number,
    "longitude": number,
    "scrapCount" : number,
}

export type locationData = {
  swLatitude: number,
  swLongitude: number,
  neLatitude: number,
  neLongitude: number,
}