import { propsType } from "@/app/main/[id]/page";
import KeyWordNews from "./components/KeyWordNews";
import OutBtn from "./components/OutBtn";
import styles from "./page.module.scss";

export default function TrendDetail({
  searchParams,
  params,
}: {
  searchParams: { location: string };
  params: { SIG_CD: number };
}) {
  const location = searchParams.location;
  const SIG_CD = Number(params.SIG_CD);
  return (
    <>
      <div className={styles.detailBox}>
        <OutBtn />
        <div className={styles.InfoBox}>
          <KeyWordNews location={location} SIG_CD={SIG_CD} />
        </div>
      </div>
    </>
  );
}
