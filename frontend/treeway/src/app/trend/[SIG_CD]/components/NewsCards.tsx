import { trendData } from "@/types/TrendDataType";
import styles from "./NewsCards.module.scss";

const data1 = [
  {
    title: "김경 문화체육위원장, '학교체육시설 개방 활성화 방안 마련 토론회'개...",
    content:
      "토론회를 주관한 김경 위원장이 좌장을 맡고, 도시안전건설위원회 박칠성 부위원장의 사회로 진행되었으며, 서울특별시교육청과 강",
    data: "2024-09-26",
    url: "https://www.bizwnews.com/news/articleView.html?idxno=89204",
  },
  {
    title: "김경 문화체육위원장, '학교체육시설 개방 활성화 방안 마련 토론회'개...",
    content:
      "토론회를 주관한 김경 위원장이 좌장을 맡고, 도시안전건설위원회 박칠성 부위원장의 사회로 진행되었으며, 서울특별시교육청과 강",
    data: "2024-09-26",
    url: "https://www.bizwnews.com/news/articleView.html?idxno=89204",
  },
  {
    title: "김경 문화체육위원장, '학교체육시설 개방 활성화 방안 마련 토론회'개...",
    content:
      "토론회를 주관한 김경 위원장이 좌장을 맡고, 도시안전건설위원회 박칠성 부위원장의 사회로 진행되었으며, 서울특별시교육청과 강",
    data: "2024-09-26",
    url: "https://www.bizwnews.com/news/articleView.html?idxno=89204",
  },
  {
    title: "김경 문화체육위원장, '학교체육시설 개방 활성화 방안 마련 토론회'개...",
    content:
      "토론회를 주관한 김경 위원장이 좌장을 맡고, 도시안전건설위원회 박칠성 부위원장의 사회로 진행되었으며, 서울특별시교육청과 강",
    data: "2024-09-26",
    url: "https://www.bizwnews.com/news/articleView.html?idxno=89204",
  },
  {
    title: "김경 문화체육위원장, '학교체육시설 개방 활성화 방안 마련 토론회'개...",
    content:
      "토론회를 주관한 김경 위원장이 좌장을 맡고, 도시안전건설위원회 박칠성 부위원장의 사회로 진행되었으며, 서울특별시교육청과 강",
    data: "2024-09-26",
    url: "https://www.bizwnews.com/news/articleView.html?idxno=89204",
  },
];

export default async function NewsCards({ data }: { data: trendData }) {
  // const res = await fetch('https://j11b107.p.ssafy.io/api/??');
  // const data = await res.json();

  return (
    <div className={styles.NewsCards}>
      {data1.map((value, index) => {
        return (
          <a className={styles.Card} href={value.url} target="_blank">
            <span className={styles.date}>{value.data}</span>
            <span className={styles.title}>{value.title}</span>
            <span className={styles.content}>{value.content}</span>
          </a>
        );
      })}
    </div>
  );
}
