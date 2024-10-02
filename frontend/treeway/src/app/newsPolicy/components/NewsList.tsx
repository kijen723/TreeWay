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
}

interface NewsListProps {
    newsData: NewsItem[];
}

export default function NewsList({ newsData }: NewsListProps) {
    // 각 뉴스의 스크랩 여부를 NewsItem에 받아와야하나?
    const [isScraped, setIsScraped] = useState(false);

    const toggleScrap = () => {
        setIsScraped((prev) => !prev);
    };

    return (
        <div className={styles.newsList}>
            {newsData.map((news, index) => (
                <div key={index} className={styles.news}>
                    <div>
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
                            <span><MdBookmarks /> {news.ScrapCount}</span>
                        </div>
                        <div className={styles.scrapBtn} onClick={toggleScrap}>
                            {isScraped ?
                                <IoBookmark className={styles.colorBookmark} /> :
                                <IoBookmarkOutline className={styles.bookmark} />}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}
