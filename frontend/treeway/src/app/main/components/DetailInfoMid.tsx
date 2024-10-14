import { Store } from "@/types/MapType";
import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoMid({ data }: { data: Store }) {
  return (
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
          {data.totalParking === -1 || data.totalParking === 0 ? (
            <span>주차불가</span>
          ) : (
            <span>
              {data.availableParking}대 / {data.totalParking}대
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
