import { trendData } from "@/types/TrendDataType";
import styles from "./NewsCards.module.scss";

export default async function NewsCards({ data }: { data: trendData }) {
  return (
    <div className={styles.NewsCards}>
      {data.newsAnalysis ? data.newsAnalysis.map((value, index) => {
        return (
          <a className={styles.Card} href={value.url} target="_blank">
            <span className={styles.date}>{value.date}</span>
            <span className={styles.title}>{value.title}</span>
            <span className={styles.content}>{value.content}</span>
          </a>
        );
      }): <></>}
    </div>
  );
}
