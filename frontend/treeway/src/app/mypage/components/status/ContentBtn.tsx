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
                <p>게시글 관리</p>
            </div>
            <div className={styles.contentBtn}>
                <RoundBtnGroup buttons={scrapButton} direction="single"/>
                <p>스크랩 관리</p>
            </div>
            <div className={styles.contentBtn}>
                <RoundBtnGroup buttons={likeButton} direction="single"/>
                <p>매물 찜 관리</p>
            </div>
        </>
    );
}
