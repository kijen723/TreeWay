import styles from '../page.module.scss';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useState } from 'react';

interface NewsItem {
    NewsClass: string;
    Title: string;
    Content: string;
    Time: string;
    URL: string;
    ViewCount: number;
    ScrapCount: number;
    isScrap: boolean; 
}

interface NewsListProps {
    newsData: NewsItem[];
}

export default function NewsList({ newsData }: NewsListProps) {
    // 스크랩 수 상태 관리
    const [scrapCounts, setScrapCounts] = useState(newsData.map(news => news.ScrapCount));
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
            {newsData.map((news, index) => (
                <div key={index} className={styles.news}>
                    <div className={styles.newsBody}>
                        <div className={styles.newsInfo}>
                            <span>{news.NewsClass}</span>
                            <span>{news.Time}</span>
                        </div>
                        <a className={styles.newsTitle} href={news.URL} target="_blank">
                            <h3>{news.Title}</h3>
                        </a>
                        <p className={styles.newsContent}>{news.Content}</p>
                    </div>
                    <div className={styles.newsStats}>
                        <div className={styles.count}>
                            <span><LuEye /> {news.ViewCount}</span>
                            <span><MdBookmarks /> {scrapCounts[index]}</span>
                        </div>
                        <div className={styles.scrapBtn} onClick={() => toggleScrap(index)}>
                            {scrapStatus[index] ?
                                <IoBookmark className={styles.colorBookmark} /> :
                                <IoBookmarkOutline className={styles.bookmark} />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
