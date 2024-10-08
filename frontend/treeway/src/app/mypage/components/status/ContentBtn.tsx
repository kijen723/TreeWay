'use client'

import { useEffect, useState } from 'react';
import styles from '@/app/mypage/page.module.scss';
import RoundBtnGroup from "@/app/common/RoundBtnGroup";
import { IoReader, IoBookmarks, IoHeart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface StatusBarProps {
    setConType: (type: string) => void;
}

export default function ContentBtn({ setConType }: StatusBarProps) {
    const [postCnt, setPostCnt] = useState<number>(0);
    const scrapCnt = 0;
    const [likeCnt, setLikeCnt] = useState<number>(0);
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    const fetchPostCount = async () => {
        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/search?memberId=${memberId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post count');
            }
            const data = await response.json();
            setPostCnt(data.length);
        } catch (error) {
            console.error('Error fetching post count:', error);
        }
    };

    const fetchLikeCount = async () => {
        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/sales/scrap/${memberId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post count');
            }
            const data = await response.json();
            setLikeCnt(data.length);
        } catch (error) {
            console.error('Error fetching post count:', error);
        }
    };

    useEffect(() => {
        fetchPostCount();
        fetchLikeCount();
    }, []);

    const handlePostClick = () => {
        setConType('post');
    };
    const handleScrapClick = () => {
        setConType('scrap');
    };
    const handleLikeClick = () => {
        setConType('like');
    };

    const postButton = [
        { icon: IoReader, alt: 'Post', onClick: handlePostClick },
    ];
    const scrapButton = [
        { icon: IoBookmarks, alt: 'Scrap', onClick: handleScrapClick },
    ];
    const likeButton = [
        { icon: IoHeart, alt: 'Like', onClick: handleLikeClick },
    ];

    return (
        <>
            <div className={styles.contentBtn}>
                <RoundBtnGroup buttons={postButton} direction="single"/>
                <p>게시글 관리 : {postCnt}</p>
            </div>
            <div className={styles.contentBtn}>
                <RoundBtnGroup buttons={scrapButton} direction="single"/>
                <p>스크랩 관리 : {scrapCnt}</p>
            </div>
            <div className={styles.contentBtn}>
                <RoundBtnGroup buttons={likeButton} direction="single"/>
                <p>매물 찜 관리 : {likeCnt}</p>
            </div>
        </>
    );
}
