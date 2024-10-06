import { propsType } from "@/app/main/[id]/page";
import KeyWordNews from "./components/KeyWordNews";
import OutBtn from "./components/OutBtn";
import styles from "./page.module.scss";

export default function TrendDetail({searchParams} : {searchParams : {location : string}}) {
  const location = searchParams.location;

  return (
    <>
      <div className={styles.detailBox}>
        <OutBtn/>
        <KeyWordNews location={location}/>
      </div>
    </>
  );
}
