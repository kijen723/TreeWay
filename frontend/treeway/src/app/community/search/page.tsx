'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PostList from '../component/PostList';
import Pagenation from '../component/Pagenation';
import styles from '../page.module.scss';
import { PostType } from '@/types/CommunityPropsTypes';

const fetchSearchResults = async (searchParams: URLSearchParams): Promise<PostType[]> => {
    const queryParams = [];

    const title = searchParams.get('title');
    const memberName = searchParams.get('memberName');
    const regionId = searchParams.get('regionId');
    const industryDetailId = searchParams.get('industryDetailId');

    if (title) {
        queryParams.push(`title=${encodeURIComponent(title)}`);
    }
    if (memberName) {
        queryParams.push(`memberName=${encodeURIComponent(memberName)}`);
    }
    if (regionId) {
        queryParams.push(`regionId=${encodeURIComponent(regionId)}`);
    }
    if (industryDetailId) {
        queryParams.push(`industryDetailId=${encodeURIComponent(industryDetailId)}`);
    }

    const queryString = queryParams.join('&');
    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/search?${queryString}`);
    if (!res.ok) {
        throw new Error('Failed to fetch search results');
    }
    return res.json();
};

export default function SearchResults() {
    const [searchResults, setSearchResults] = useState<PostType[]>([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const postsPerPage = 4;
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams?.toString()) {
            fetchSearchResults(searchParams)
                .then((data) => {
                    const sortedData = data.sort(
                        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    );
                    setSearchResults(sortedData);
                })
                .catch((err) => console.error('Error fetching search results:', err));
        }
    }, [searchParams]);

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = searchResults.slice(startIndex, startIndex + postsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.background}>
            <h1>검색 결과</h1>
            <div className={styles.block}>
                {searchResults.length > 0 ? (
                    <>
                        <div className={styles.postBlock}>
                            <PostList 
                                currentPage={currentPage} 
                                postsPerPage={postsPerPage} 
                                postList={currentPosts || []} 
                            />
                        </div>
                        <div>
                            <Pagenation
                                postCnt={searchResults.length || 0}
                                postsPerPage={postsPerPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </>
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
    );
}
