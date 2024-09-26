import { Store } from "@/util/MakeData";
import { useRouter } from "next/navigation";
import styles from "./SideDetailItems.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeShopIndex } from "@/redux/slice/shopIndexSlice";
import { useEffect, useRef } from "react";

export default function SideDetailItem({ data }: { data: Store }) {
  const router = useRouter();
  const shopIdx = useSelector((state: RootState) => state.shopIndex.value);
  const dispatch = useDispatch();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const nullRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "instant", block: "center" });
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
      <img src="/image/192.png" alt="" />
      <div className={styles.Info}>
        <span>{data.companyName}</span>
        <span>{data.category}</span>
        <span>권리금 {Math.floor(data.rightFee / 10000)}만원</span>
        <span>보증금 {Math.floor(data.managementFee / 10000)}만원</span>
        <span>월매출 {Math.floor(data.monthlyRevenue / 10000)}만원</span>
        {/* <span>월수익 {Math.floor(data.monthlyProfit / 10000)}만원</span> */}
        <button onClick={()=>{
          router.push(`/main/${data.id}`)
        }}>자세히 보기</button>
      </div>
    </div>
  );
}
