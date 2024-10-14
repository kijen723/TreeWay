'use client'

import { useState, useEffect } from 'react';
import styles from '@/app/community/[postId]/page.module.scss'
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

interface ScrapBtnProps {
    isScraped: boolean;
    postId: number;
    memberId: number;
    onToggle: (newScrapStatus: boolean) => void;
}

export default function ScrapBtn({ isScraped, postId, memberId, onToggle }: ScrapBtnProps) {
    const [scraped, setScraped] = useState(isScraped);

    useEffect(() => {
        setScraped(isScraped);
    }, [isScraped]);

    const toggleScrap = async () => {
        try {
            if (scraped) {
                const response = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        memberId: memberId, 
                        articleId: postId,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to cancel scrap');
                }

                setScraped(false);
                onToggle(false);
            } else {
                const response = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        memberId: memberId, 
                        articleId: postId,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to scrap');
                }

                setScraped(true);
                onToggle(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.scrapBtn} onClick={toggleScrap}>
            {scraped ? (
                <IoBookmark className={styles.colorBookmark} />
            ) : (
                <IoBookmarkOutline className={styles.bookmark} />
            )}
        </div>
    );
}
