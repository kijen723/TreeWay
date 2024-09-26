export class Store {
  id : number;
  category: string;
  address: string;
  latitude: number;
  longitude: number;
  monthlyRevenue: number;
  monthlyProfit: number;
  name: string;
  phoneNumber: string;
  companyName: string;
  floors: number;
  size: number;
  parking: string;
  rightFee: number;
  deposit: number;
  monthlyRent: number;
  managementFee: number;
  materialCost: number;
  laborCost: number;
  utilitiesCost: number;
  otherExpenses: number;
  additionalInfo: string;

  constructor(
    id: number = 0,
    category: string = "음식점",
    address: string = "서울특별시",
    latitude: number = 37.5665,
    longitude: number = 126.9780,
    monthlyRevenue: number = 10000000,
    monthlyProfit: number = 1000000,
    name: string = "기본 이름",
    phoneNumber: string = "010-0000-0000",
    companyName: string = "기본 상호명",
    floors: number = 1,
    size: number = 50,
    parking: string = "있음",
    rightFee: number = 0,
    deposit: number = 1000000,
    monthlyRent: number = 500000,
    managementFee: number = 50000,
    materialCost: number = 2000000,
    laborCost: number = 1000000,
    utilitiesCost: number = 200000,
    otherExpenses: number = 100000,
    additionalInfo: string = "기본 정보"
  ) {
    this.id = id;
    this.category = category;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.monthlyRevenue = monthlyRevenue;
    this.monthlyProfit = monthlyProfit;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.companyName = companyName;
    this.floors = floors;
    this.size = size;
    this.parking = parking;
    this.rightFee = rightFee;
    this.deposit = deposit;
    this.monthlyRent = monthlyRent;
    this.managementFee = managementFee;
    this.materialCost = materialCost;
    this.laborCost = laborCost;
    this.utilitiesCost = utilitiesCost;
    this.otherExpenses = otherExpenses;
    this.additionalInfo = additionalInfo;
  }
}

  // Helper function to generate random data
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(6));
}

export default function makedata(){
  const categories: string[] = ['음식점', '카페', '편의점', 'PC방', '미용실', '세탁소', '헬스장', '문구점'];
  const parkings: string[] = ['있음', '없음'];
  const stores: Store[] = [];
  
  for (let i = 0; i < 100; i++) {
    const id = i+1;
    const category = categories[getRandomInt(0, categories.length - 1)];
    const address = `대한민국 서울특별시 ${getRandomInt(1, 100)}길`;
    const latitude = 37 + getRandomFloat(0, 0.5);  // 예시 좌표 범위
    const longitude = 127 + getRandomFloat(0, 0.5);
    const monthlyRevenue = getRandomInt(1000000, 100000000);
    const monthlyProfit = Math.round(monthlyRevenue * getRandomFloat(0.05, 0.3));
    const name = `이름${i + 1}`;
    const phoneNumber = `010-${getRandomInt(1000, 9999)}-${getRandomInt(1000, 9999)}`;
    const companyName = `상호명${i + 1}`;
    const floors = getRandomInt(1, 5);
    const size = getRandomInt(20, 200);
    const parking = parkings[getRandomInt(0, parkings.length - 1)];
    const rightFee = getRandomInt(0, 50000000);
    const deposit = getRandomInt(1000000, 50000000);
    const monthlyRent = getRandomInt(500000, 10000000);
    const managementFee = getRandomInt(10000, 1000000);
    const materialCost = Math.round(monthlyRevenue * getRandomFloat(0.2, 0.4));
    const laborCost = Math.round(monthlyRevenue * getRandomFloat(0.1, 0.3));
    const utilitiesCost = getRandomInt(50000, 500000);
    const otherExpenses = getRandomInt(10000, 500000);
    const additionalInfo = `이 매장은 주요 비용을 재료비와 인건비가 차지하고 있으며, 권리금과 보증금이 상대적으로 적습니다. 평균 순이익률은 ${(monthlyProfit / monthlyRevenue * 100).toFixed(2)}% 정도이며, 손익분기점까지의 거리가 적절합니다. 월세와 관리비는 현지 상권에 맞는 수준입니다.`;
  
    stores.push(new Store(id, category, address, latitude, longitude, monthlyRevenue, monthlyProfit, name, phoneNumber, companyName, floors, size, parking, rightFee, deposit, monthlyRent, managementFee, materialCost, laborCost, utilitiesCost, otherExpenses, additionalInfo));
  }

  return stores;

}
