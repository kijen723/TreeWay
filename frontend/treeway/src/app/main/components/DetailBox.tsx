import { useRouter } from "next/navigation";
import styles from "./DetailBox.module.scss";
import DetailBackBtn from "./DetailBackBtn";

export default function DetailBox() {
  // const router = useRouter();
  return (
    <div className={styles.DetailBox}>
      <DetailBackBtn/>
    </div>
  );
}
