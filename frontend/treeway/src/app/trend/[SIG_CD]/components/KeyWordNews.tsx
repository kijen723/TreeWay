import styles from "./KeyWordNews.module.scss";
import NewsCards from "./NewsCards";

export default function KeyWordNews({ location, SIG_CD }: { location: string, SIG_CD: number }) {
  return (
    <div className={styles.KeyWordNews}>
      <div className={styles.KeyWord}>
        <span>{location} 인기 키워드 TOP10</span>
        {/* <KeyWordChart/> */}
      </div>
      <div className={styles.News}>
        <span className={styles.NewsTitle}>{location} 뉴스</span>
        <NewsCards SIG_CD ={SIG_CD}/>
      </div>
    </div>
  );
}
