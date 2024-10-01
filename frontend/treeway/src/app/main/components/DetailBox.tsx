import styles from "./DetailBox.module.scss";
import DetailBackBtn from "./DetailBackBtn";
import DetailInfoBox from "./DetailInfoBox";

export default function DetailBox() {
  // const router = useRouter();
  return (
    <div className={styles.DetailBox}>
      <div className={styles.WhiteBox}>
        <DetailBackBtn />
        <DetailInfoBox />
      </div>
    </div>
  );
}
