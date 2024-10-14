'use client'

import { useEffect, useState } from 'react';
import Pagenation from './component/Pagenation';
import PostList from './component/PostList';
import UpperNav from './component/UpperNav';
import styles from './page.module.scss';
import { useQuery } from '@tanstack/react-query';
import { PostType } from '@/types/CommunityPropsTypes';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// 전체 게시글
const fetchPosts = async (): Promise<PostType[]> => {
    const res = await fetch('https://j11b107.p.ssafy.io/api/article');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
};

// 내가 스크랩한 게시글
const fetchScrappedPosts = async (memberId: number): Promise<PostType[]> => {
    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap/${memberId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch scrapped posts');
    }
    return res.json();
};
export default function Community() {
    const [currentPage, setCurrentPage] = useState(1); 
    const postsPerPage = 4; // 페이지당 4개 보여주기
    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const [sortBy, setSortBy] = useState<'Latest' | 'ViewCount' | 'ScrapCount'>('Latest');

    // 전체 게시글 불러오기
    const { data: postList } = useQuery(['postList'], fetchPosts);

    // 정렬
    const sortedPostList = postList?.slice().sort((a, b) => {
        if (sortBy === 'Latest') {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        if (sortBy === 'ViewCount') {
            return b.viewCount - a.viewCount;
        }
        if (sortBy === 'ScrapCount') {
            return b.scrapCount - a.scrapCount;
        }
        return 0;
    });

    useEffect(() => {
        if (sortedPostList) {
            console.log('Sorted PostList:', sortedPostList);
        }
    }, [sortedPostList]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav setSortBy={setSortBy} />
                    <PostList
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        postList={sortedPostList || []}
                    />
                </div>
                <div>
                    <Pagenation
                        postCnt={sortedPostList?.length || 0}
                        postsPerPage={postsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
