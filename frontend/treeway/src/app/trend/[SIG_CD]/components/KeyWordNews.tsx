import { trendData } from "@/types/TrendDataType";
import KeyWordChart from "./KeyWordChart";
import styles from "./KeyWordNews.module.scss";
import NewsCards from "./NewsCards";

export default function KeyWordNews({ location, data }: { location: string, data: trendData }) {
  return (
    <div className={styles.KeyWordNews}>
      <div className={styles.KeyWord}>
        <span>{location} 인기 키워드 TOP10</span>
        <KeyWordChart location={location} data={data}/>
      </div>
      <div className={styles.News}>
        <span className={styles.NewsTitle}>{location} 뉴스</span>
        <NewsCards data ={data}/>
      </div>
    </div>
  );
}
