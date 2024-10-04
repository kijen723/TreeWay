import styles from "./DetailBox.module.scss";
import DetailBackBtn from "./DetailBackBtn";
import DetailInfoBox from "./DetailInfoBox";
import { propsType } from "../[id]/page";

export default function DetailBox({params} : propsType) {
  // const router = useRouter();
  return (
    <div className={styles.DetailBox}>
      <div className={styles.WhiteBox}>
        <DetailBackBtn />
        <DetailInfoBox params={params}/>
      </div>
    </div>
  );
}
