'use client'

import { useState } from 'react';
import Pagenation from './component/Pagenation';
import PostList from './component/PostList';
import UpperNav from './component/UpperNav';
import styles from './page.module.scss';

export default function Community() {
    const [currentPage, setCurrentPage] = useState(1); 
    const postsPerPage = 4; 

    const postList = [
        {
            id: 1,
            title: "title1",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
        {
            id: 2,
            title: "title2",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
        {
            id: 3,
            title: "title3",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
        {
            id: 4,
            title: "title4",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
        {
            id: 5,
            title: "title5",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
        {
            id: 6,
            title: "title6",
            author: "author",
            date: "date",
            viewCnt: 0,
            imgSrc: "/image/cat.jpg", // 대표사진
            viewCount: 3,
            scrapCount: 0,
            isScrap: false,
        },
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav />
                    <PostList 
                        currentPage={currentPage} 
                        postsPerPage={postsPerPage} 
                        postList={postList} 
                    />
                </div>
                <div>
                    <Pagenation 
                        postCnt={postList.length} 
                        postsPerPage={postsPerPage} 
                        onPageChange={handlePageChange} 
                    />
                </div>
            </div>
        </div>
    );
}
