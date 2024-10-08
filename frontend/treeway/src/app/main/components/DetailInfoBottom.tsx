import { Store } from "@/types/MapType";
import Chart from "./Chart";
import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoBottom({ data }: { data: Store }) {
  return (
    <div className={styles.Bottom}>
      <div className={styles.feeInfoTitle}>
        <span>금액정보</span>
      </div>
      <div className={styles.feeInfo}>
        <div>
          <span>권리금</span>
          <span>{Math.round(data.premium / 10000)}만원</span>
        </div>
        <div>
          <span>보증금</span>
          <span>{Math.round(data.deposit / 10000)}만원</span>
        </div>
        <div>
          <span>월세</span>
          <span>{Math.round(data.administrationCost / 10000)}만원</span>
        </div>
        <div>
          <span>관리비</span>
          <span>{Math.round(data.monthlyRent / 10000)}만원</span>
        </div>
      </div>
      <div className={styles.sellTitle}>
        <span>매출정보</span>
      </div>
      <Chart shopData={data}/>
    </div>
  );
}
