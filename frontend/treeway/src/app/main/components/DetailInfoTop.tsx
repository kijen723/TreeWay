import { FaLocationDot, FaWonSign } from 'react-icons/fa6';
import styles from './DetailInfoBox.module.scss';
import { Store } from '@/types/MapType';

export default function DetailInfoTop({ data }: { data: Store }) {
  return (
    <>
      <div className={styles.Info1}>
        <div className={styles.category}>
          <span>
            {data.majorBusiness} | {data.industryDetail}
          </span>
        </div>
        <div className={styles.premium}>
          <FaWonSign />
          <span> 권리금 : {Math.round(data.premium / 10000)}만원</span>
        </div>
        <div className={styles.address}>
          <FaLocationDot />
          <span>{data.address}</span>
        </div>
      </div>
      <div className={styles.Info2}>
        <div className={styles.fee}>
          <div>
            <span>금액 정보</span>
          </div>
          <div className={styles.monthSell}>
            <span>월 매출</span>
            <span>{Math.round(data.monthlySales / 10000)}만원</span>
          </div>
          <div className={styles.monthRevenue}>
            <span>월 수익</span>
            <span>{Math.round(data.monthlyEarnings / 10000)}만원</span>
          </div>
        </div>
        <div className={styles.seller}>
          <div>
            <span>매도자 정보</span>
          </div>
          <div className={styles.name}>
            <span>이름</span>
            <span>{data.hostName}</span>
          </div>
          <div className={styles.phone}>
            <span>번호</span>
            <span>{data.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
