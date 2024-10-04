import { Store } from "@/types/MapType";
import styles from "./DetailInfoBox.module.scss";

export default function DetailInfoLast({data}: {data : Store}) {
  return (
    <div className={styles.Last}>
      <div className={styles.shopDescriptTitle}>
        <span>매물 설명</span>
      </div>
      <div className={styles.description}>
      {data.additionalInformation}
      </div>
    </div>
  );
}
