import styles from './AnalyzeDetailBox.module.scss';
import AnalyzeDetailBackBtn from './AnalyzeDetailBackBtn';
import { FaLocationDot, FaWonSign } from 'react-icons/fa6';
import Chart from './Chart';
import { Store } from '@/types/MapType';

interface Property {
  id: string;
  additionalInformation: string;
  address: string;
  administrationCost: number;
  availableParking: number;
  currentFloor: number;
  deposit: number;
  industryDetail: number;
  latitude: number;
  longitude: number;
  majorBusiness: string;
  materialCost: number;
  monthlyEarnings: number;
  monthlyRent: number;
  monthlySales: number;
  otherExpenses: number;
  personnelExpense: number;
  phone: string;
  premium: number;
  ratingScore: number;
  squareMeter: number;
  totalFloors: number;
  totalParking: number;
  tradeName: string;
  utilityBill: number;
  hostName: string;
}

interface AnalyzeDetailBoxProps {
  onClose: () => void;
  data: Property;
}

export default function AnalyzeDetailBox({
  onClose,
  data,
}: AnalyzeDetailBoxProps) {
  return (
    <div className={styles.DetailBox}>
      <AnalyzeDetailBackBtn onClose={onClose} />
      <div className={styles.WhiteBox}>
        {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ탑 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
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
        {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ미드 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
        <div className={styles.Mid}>
          <div className={styles.shopInfoTitle}>
            <span>매물정보</span>
          </div>
          <div className={styles.shopInfo}>
            <div className={styles.shopName}>
              <span>상호명</span>
              <span>{data.tradeName}</span>
            </div>
            <div className={styles.address}>
              <span>주소</span>
              <span>{data.address}</span>
            </div>
            <div className={styles.floor}>
              <span>층수</span>
              <span>
                지상 {data.currentFloor}/{data.totalFloors}층
              </span>
            </div>
            <div className={styles.squreMeter}>
              <span>평수</span>
              <span>실면적 {data.squareMeter / 10000}평</span>
            </div>
            <div className={styles.parking}>
              <span>주차</span>
              {data.totalParking === -1 ? (
                <span>주차불가</span>
              ) : (
                <span>
                  {data.totalParking}대 / {data.availableParking}대
                </span>
              )}
            </div>
          </div>
        </div>
        {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ바텀ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
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
              <span>{Math.round(data.monthlyRent / 10000)}만원</span>
            </div>
            <div>
              <span>관리비</span>
              <span>{Math.round(data.administrationCost / 10000)}만원</span>
            </div>
          </div>

          {/* <Chart shopData={data} /> */}
        </div>
        {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ라스트ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}{' '}
        <div className={styles.Last}>
          <div className={styles.shopDescriptTitle}>
            <span>매물 설명</span>
          </div>
          <div className={styles.description}>{data.additionalInformation}</div>
        </div>
      </div>
    </div>
  );
}
