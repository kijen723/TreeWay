import { FaLocationDot, FaWonSign } from "react-icons/fa6";
import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoTop() {
  return (
    <>
      <div className={styles.Info1}>
        <div className={styles.category}>
          <span>외식업 | 한식</span>
        </div>
        <div className={styles.premium}>
          <FaWonSign />
          <span> 권리금 : 2200만원</span>
        </div>
        <div className={styles.address}>
          <FaLocationDot />
          <span>서울 광진구 광나루로 382</span>
        </div>
      </div>
      <div className={styles.Info2}>
        <div className={styles.fee}>
          <div>
            <span>금액 정보</span>
          </div>
          <div className={styles.monthSell}>
            <span>월 매출</span>
            <span>600만원</span>
          </div>
          <div className={styles.monthRevenue}>
            <span>월 수익</span>
            <span>1081만원</span>
          </div>
        </div>
        <div className={styles.seller}>
          <div>
            <span>매도자 정보</span>
          </div>
          <div className={styles.name}>
            <span>이름</span>
            <span>레미아빠</span>
          </div>
          <div className={styles.phone}>
            <span>번호</span>
            <span>비공개</span>
          </div>
        </div>
      </div>
    </>
  );
}
