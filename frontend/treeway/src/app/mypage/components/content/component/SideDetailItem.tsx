import { useParams, useRouter } from "next/navigation";
import styles from "./SideDetailItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useEffect, useRef } from "react";
import { FaLocationDot, FaWonSign } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";

interface Store {
  "id": number,
  "majorBusiness": string,
  "industryDetailId": number,
  "industryDetailName": string,
  "address": string,
  "monthlySales": number,
  "monthlyEarnings": number,
  "hostName": string,
  "tradeName": string,
  "floorClass": string,
  "currentFloor": number,
  "totalFloors": number,
  "squareMeter": number,
  "availableParking": number,
  "totalParking": number,
  "premium": number,
  "deposit": number,
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
  "scrapCount": number
}

export default function SideDetailItem({ data }: { data: Store }) {
  const dispatch = useDispatch();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const nullRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className={styles.item}
      onClick={() => {
        alert("찜을 취소하시겠습니까?")
      }}
    >
      <div className={styles.Info}>
        <div className={styles.top}>
          <span className={styles.category}>{data.majorBusiness}</span>
          <span className={styles.name}>{data.tradeName}</span>
        </div>
        <span className={styles.address}>
          <FaLocationDot /> {data.address}
        </span>
        <div className={styles.mid}>
          <span>권리금 {Math.floor(data.personnelExpense / 10000)}만원 /</span>
          <span>보증금 {Math.floor(data.administrationCost / 10000)}만원</span>
        </div>
        <span className={styles.mid2}>
          월세 {Math.floor(data.monthlyRent / 10000)}만원
        </span>
        <div className={styles.bottom}>
          <FaWonSign className={styles.icon} />
          <span>월매출 {Math.floor(data.monthlySales / 10000)}만원 /</span>
          <span>월수익 {Math.floor(data.monthlyEarnings / 10000)}만원</span>
        </div>
      </div>
    </div>
  );
}
