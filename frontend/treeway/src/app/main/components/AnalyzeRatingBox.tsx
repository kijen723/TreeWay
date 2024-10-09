'use client';

import { FaLocationDot, FaWonSign } from 'react-icons/fa6';
import styles from './AnalyzeRatingBox.module.scss';
import AnalyzeDetailBox from './AnalyzeDetailBox';
import { useEffect, useState } from 'react';

interface Property {
  id: string;
  hostName: string;
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
}

interface AnalyzeBoxProps {
  explanation: string; // 점수 설명
  propertyList: Property[];
  randomList: Property[];
  onClose: () => void; // 모달 닫기 함수
}
export default function DetailBox({
  explanation,
  propertyList,
  randomList,
  onClose,
}: AnalyzeBoxProps) {
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
  const [showData, setShowData] = useState<Property>();

  useEffect(() => {
    if (showData !== undefined) {
      setShowModal(true);
    }
  }, [showData]); // detailData가 변경될 때마다 실행

  const handleClick = (data: Property) => {
    console.log(data);
    setShowData(data);
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기 함수
  };

  return (
    <div className={styles.DetailBox}>
      <div className={styles.WhiteBox}>
        <div>
          <div className={styles.header}>
            <h2>분석 결과</h2>
            <button className={styles.closeButton} onClick={onClose}>
              ✖
            </button>
          </div>
          <div className={styles.score}>
            <h1>
              {Math.min(Math.floor(propertyList[0].ratingScore * 10), 100)} /
              100점
            </h1>
          </div>
          <p>{explanation}</p>
          <div className={styles.explanation}></div>
          <div className={styles.propertyList}>
            <h3>추천 매물 정보</h3>
            <ul>
              {randomList.map((property, index) => (
                <li
                  key={index}
                  className={styles.propertyItem}
                  onClick={() => handleClick(property)}
                >
                  <div className={styles.top}>
                    <span className={styles.category}>
                      {property.majorBusiness}
                    </span>
                    <span className={styles.name}>
                      {property.tradeName.length > 11
                        ? property.tradeName.slice(0, 11) + '..'
                        : property.tradeName}
                    </span>
                  </div>
                  <span className={styles.address}>
                    <FaLocationDot /> {property.address}
                  </span>

                  <div className={styles.bottom}>
                    <FaWonSign className={styles.icon} />
                    <span>
                      월매출 {Math.floor(property.monthlySales / 10000)}만원 /
                    </span>
                    <span>
                      월수익 {Math.floor(property.monthlyEarnings / 10000)}만원
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2>* 세부 결과는 분석이력결과에 저장됩니다.</h2>
      </div>
      {showModal && showData && (
        <AnalyzeDetailBox onClose={handleCloseModal} data={showData} />
      )}
    </div>
  );
}
