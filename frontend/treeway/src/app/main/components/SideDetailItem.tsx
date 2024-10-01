import { useRouter } from "next/navigation";
import styles from "./SideDetailItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useEffect, useRef } from "react";
import { FaLocationDot, FaWonSign } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";
import { Store } from "@/types/MapType";

export default function SideDetailItem({ data }: { data: Store }) {
  const router = useRouter();
  const shopIdx = useSelector((state: RootState) => state.shopIndex.value);
  const dispatch = useDispatch();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const nullRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [shopIdx]);
  return (
    <div
      className={styles.item}
      ref={shopIdx === data.id ? targetRef : nullRef}
      style={shopIdx === data.id ? { background: "#ECF4DD" } : {}}
      onClick={() => {
        dispatch(changeShopIndex(data.id));
      }}
    >
      {shopIdx === data.id ? (
        <SlArrowRightCircle className={styles.back} onClick={()=>{
          router.push(`/main/${data.id}`)
        }} />
      ) : null}
      <div className={styles.Info}>
        <div className={styles.top}>
          <span className={styles.category}>{data.majorBusiness}</span>
          <span className={styles.name}>{data.tradename}</span>
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
