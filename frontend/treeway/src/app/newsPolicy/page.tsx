'use client'

import { useState, useEffect } from 'react';
import Pagenation from './components/Pagenation';
import UpperNav from './components/UpperNav';
import styles from './page.module.scss';
import NewsList from './components/NewsList';
import PolicyList from './components/PolicyList';

export default function NewsPolicy() {
    const [isNews, setIsNews] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [policyData, setPolicyData] = useState([]); // 정책 데이터 상태
    const [loading, setLoading] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('Latest');

    const itemsPerPage = 4;

    const toggleNewsStatus = () => {
        setIsNews(!isNews);
        setCurrentPage(1); 
    };

    // 뉴스
    useEffect(() => {
        const fetchNewsData = async () => {
            setLoading(true); 
            try {
                const response = await fetch('https://j11b107.p.ssafy.io/api/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsData();
    }, []);

    // 정책
    useEffect(() => {
        const fetchPolicyData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://j11b107.p.ssafy.io/api/policy');
                if (!response.ok) {
                    throw new Error('Failed to fetch policy data');
                }
                const data = await response.json();
                setPolicyData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicyData();
    }, []);

    const sortData = (data: any[], criteria: string) => {
        if (criteria === 'Latest') {
            return data.sort((a, b) => new Date(b.createdAt ? b.createdAt : b.startDate).getTime() - new Date(a.createdAt? a.createdAt : a.startDate).getTime());
        } else if (criteria === 'ScrapCount') {
            return data.sort((a, b) => b.scrapCount - a.scrapCount);
        }
        return data;
    };

    // 현재 페이지에 보여줄 데이터
    const getCurrentPageData = (data: any[]) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const sortedNewsData = sortData([...newsData], sortCriteria);
    const sortedPolicyData = sortData([...policyData], sortCriteria);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav isNews={isNews} toggleNewsStatus={toggleNewsStatus} setSortCriteria={setSortCriteria}/>
                    {isNews ? (
                        <NewsList newsData={getCurrentPageData(sortedNewsData)} />
                    ) : (
                        <PolicyList policyData={getCurrentPageData(sortedPolicyData)} />
                    )}
                </div>
                <div>
                    {isNews ? (
                        <Pagenation 
                            postCnt={newsData.length} 
                            itemsPerPage={itemsPerPage} 
                            onPageChange={(pageNumber) => setCurrentPage(pageNumber)} 
                        />
                    ) : (
                        <Pagenation 
                            postCnt={policyData.length} 
                            itemsPerPage={itemsPerPage} 
                            onPageChange={(pageNumber) => setCurrentPage(pageNumber)} 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
