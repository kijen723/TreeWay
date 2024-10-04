'use client'

import styles from '@/app/mypage/page.module.scss';
import RoundBtnGroup from "@/app/common/RoundBtnGroup";
import { IoReader, IoBookmarks, IoHeart } from "react-icons/io5";

interface StatusBarProps {
    setConType: (type: string) => void;
}

export default function ContentBtn({ setConType }: StatusBarProps) {
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

    const postCnt = 0;
    const scrapCnt = 0;
    const likeCnt = 0;

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