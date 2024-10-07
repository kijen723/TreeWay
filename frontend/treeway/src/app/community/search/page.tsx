'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PostList from '../component/PostList';
import Pagenation from '../component/Pagenation';
import styles from '../page.module.scss';
import { PostType } from '@/types/CommunityPropsTypes';

const fetchSearchResults = async (searchCriteria: string, searchText: string): Promise<PostType[]> => {
    const queryParam = searchCriteria === 'title'
        ? `title=${encodeURIComponent(searchText)}`
        : `memberName=${encodeURIComponent(searchText)}`;

    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/search?${queryParam}`);
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

    const searchCriteria = searchParams?.get('title') ? 'title' : 'memberName';
    const searchText = searchParams?.get(searchCriteria) || '';

    useEffect(() => {
        if (searchText) {
            fetchSearchResults(searchCriteria, searchText)
                .then((data) => {
                    const sortedData = data.sort(
                        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                    );
                    setSearchResults(sortedData);
                })
                .catch((err) => console.error('Error fetching search results:', err));
        }
    }, [searchCriteria, searchText]);

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