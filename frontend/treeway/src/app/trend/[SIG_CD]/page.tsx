import { propsType } from "@/app/main/[id]/page";
import KeyWordNews from "./components/KeyWordNews";
import OutBtn from "./components/OutBtn";
import styles from "./page.module.scss";
import Restaurant5 from "./components/Restaurant5";
import { trendData } from "@/types/TrendDataType";

export default async function TrendDetail({
  searchParams,
  params,
}: {
  searchParams: { location: string };
  params: { SIG_CD: number };
}) {
  const location = searchParams.location;
  const SIG_CD = Number(params.SIG_CD);

  const res = await fetch(`https://j11b107.p.ssafy.io/api/analysis/trend/${SIG_CD}`, {cache : "no-store"})
  const data:trendData = await res.json();

  return (
    <>
      <div className={styles.detailBox}>
        <OutBtn />
        <div className={styles.InfoBox}>
          <KeyWordNews location={location} data={data} />
          <Restaurant5 location={location} data={data}/>
        </div>
      </div>
    </>
  );
}
