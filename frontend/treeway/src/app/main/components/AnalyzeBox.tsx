import { FaLocationDot, FaWonSign } from 'react-icons/fa6';
import styles from './AnalyzeBox.module.scss';

interface AnalyzeBoxProps {
  score: number; // 점수
  explanation: string; // 점수 설명
  propertyList: {
    industry: string;
    name: string;
    address: string;
    monthlySales: number;
    monthlyEarnings: number;
  }[]; // 매물 정보

  onClose: () => void; // 모달 닫기 함수
}
export default function DetailBox({
  score,
  explanation,
  propertyList,
  onClose,
}: AnalyzeBoxProps) {
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
            <h1>{score}</h1>
          </div>
          <div className={styles.explanation}>
            <p>{explanation}</p>
          </div>
          <div className={styles.propertyList}>
            <h3>추천 매물 정보</h3>
            <ul>
              {propertyList.map((property, index) => (
                <li key={index} className={styles.propertyItem}>
                  <div className={styles.top}>
                    <span className={styles.category}>{property.industry}</span>
                    <span className={styles.name}>{property.name}</span>
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
      </div>
    </div>
  );
}
