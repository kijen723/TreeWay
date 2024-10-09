import styles from './NewsList.module.scss';
import { MdBookmarks } from "react-icons/md";
import { useState, useEffect } from 'react';
import { NewsListProps } from "@/types/NewsPolicyPropsTypes";
import { formatDateTime } from '@/util/formatDateTime';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function NewsList({ newsData }: NewsListProps) {
    const [newsList, setNewsList] = useState(newsData || []);
    const [loading, setLoading] = useState(true);
    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const fetchScrapStatus = async (newsId: number) => {
        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/news/scrap/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberId: memberId,
                    newsId: newsId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch scrap status');
            }

            const data = await response.json();
            return data.isScraped;
        } catch (error) {
            console.error('Error fetching scrap status:', error);
            return false;
        }
    };

    useEffect(() => {
        const updateScrapStatusForAllNews = async () => {
            const updatedNewsList = await Promise.all(
                newsData.map(async (news) => {
                    const isScrap = await fetchScrapStatus(news.id);
                    return { ...news, isScrap };
                })
            );
            setNewsList(updatedNewsList);
            setLoading(false);
        };

        if (newsData.length > 0) {
            updateScrapStatusForAllNews();
        }
    }, [newsData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.newsList}>
            {newsList.map((news, index) => {
                const { date, time } = formatDateTime(news.createdAt);

                return (
                    <div key={index} className={styles.news}>
                        <div className={styles.newsBody}>
                            <div className={styles.newsInfo}>
                                <span>{news.regionName}</span>
                                <span>{date} {time}</span>
                            </div>
                            <a className={styles.newsTitle} href={news.url} target="_blank">
                                <h3>{news.title}</h3>
                            </a>
                            <p className={styles.newsContent}>{news.content}</p>
                        </div>
                        <div className={styles.newsStats}>
                            <div className={styles.count}>
                                <span><MdBookmarks /> {news.scrapCount}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
