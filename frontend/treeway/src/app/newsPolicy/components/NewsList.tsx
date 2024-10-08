import styles from '../page.module.scss';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useState } from 'react';
import { NewsListProps } from "@/types/NewsPolicyPropsTypes";
import { formatDateTime } from '@/util/formatDateTime';

export default function NewsList({ newsData }: NewsListProps) {
    // 스크랩 수 상태 관리
    const [scrapCounts, setScrapCounts] = useState(newsData.map(news => news.scrapCount));
    const [scrapStatus, setScrapStatus] = useState(newsData.map(news => news.isScrap)); // 스크랩 여부를 초기화

    const toggleScrap = (index: number) => {
        const updatedScrapStatus = [...scrapStatus];
        updatedScrapStatus[index] = !updatedScrapStatus[index];
        setScrapStatus(updatedScrapStatus);

        const updatedScrapCounts = [...scrapCounts];
        updatedScrapCounts[index] = updatedScrapStatus[index]
            ? updatedScrapCounts[index] + 1
            : updatedScrapCounts[index] - 1;
        setScrapCounts(updatedScrapCounts);
    };

    return (
        <div className={styles.newsList}>
            {newsData.map((news, index) => {
                const { date, time } = formatDateTime(news.createdAt);

                return (
                    <div key={index} className={styles.news}>
                        <div className={styles.newsBody}>
                            <div className={styles.newsInfo}>
                                {/* <span>{news.NewsClass}</span> */}
                                <span>{date} {time}</span>
                            </div>
                            <a className={styles.newsTitle} href={news.url} target="_blank">
                                <h3>{news.title}</h3>
                            </a>
                            <p className={styles.newsContent}>{news.content}</p>
                        </div>
                        <div className={styles.newsStats}>
                            <div className={styles.count}>
                                <span><LuEye /> {news.viewCount}</span>
                                <span><MdBookmarks /> {news.scrapCount}</span>
                            </div>
                            <div className={styles.scrapBtn} onClick={() => toggleScrap(index)}>
                                {scrapStatus[index] ?
                                    <IoBookmark className={styles.colorBookmark} /> :
                                    <IoBookmarkOutline className={styles.bookmark} />}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
