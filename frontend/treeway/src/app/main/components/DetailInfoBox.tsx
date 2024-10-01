import { FaLocationDot, FaWonSign } from "react-icons/fa6";
import styles from "./DetailInfoBox.module.scss";
import DetailInfoTop from "./DetailInfoTop";
import DetailInfoMid from "./DetailInfoMid";
import DetailInfoBottom from "./DetailInfoBottom";
import DetailInfoLast from "./DetailInfoLast";

export default function DetailInfoBox() {
  return (
    <>
      <div className={styles.main}>
        <DetailInfoTop />
        <DetailInfoMid />
        <DetailInfoBottom />
        <DetailInfoLast/>
      </div>
    </>
  );
}
