import styles from '../page.module.scss';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
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

    const toggleScrap = async (index: number, newsId: number) => {
        const updatedNewsList = [...newsList];
        const newScrapStatus = !updatedNewsList[index].isScrap;

        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/news/scrap`, {
                method: newScrapStatus ? 'POST' : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberId: memberId,
                    newsId: newsId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update scrap status');
            }

            updatedNewsList[index].isScrap = newScrapStatus;
            updatedNewsList[index].scrapCount = newScrapStatus
                ? updatedNewsList[index].scrapCount + 1
                : updatedNewsList[index].scrapCount - 1;

            setNewsList(updatedNewsList);
        } catch (error) {
            console.error('Error updating scrap status:', error);
        }
    };

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
                            <div className={styles.scrapBtn} onClick={() => toggleScrap(index, news.id)}>
                                {news.isScrap ? (
                                    <IoBookmark className={styles.colorBookmark} />
                                ) : (
                                    <IoBookmarkOutline className={styles.bookmark} />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
