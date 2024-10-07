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
    const [newsData, setNewsData] = useState([]); // newsData를 state로 관리
    const [loading, setLoading] = useState(false);
    const itemsPerPage = 4; // 한 페이지에 보여줄 아이템 수

    const toggleNewsStatus = () => {
        setIsNews(!isNews);
        setCurrentPage(1); 
    };

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

    const policyData = [
        { 
            Project: '2024 광양벤처밸리 BUILD-UP CAMP 참여팀 모집공고(추가모집)',
            Region: '전남',
            Field: '멘토링ㆍ컨설팅ㆍ교육',
            Affiliation: '포스코',
            Business_eligibility: '7년미만',
            Target: '대학생,일반인,대학,연구기관,일반기업,1인 창조기업',
            Start_date: '2024-09-26',
            End_date: '2024-10-03',
            URL: 'https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=170650',
            ViewCount: 10,
            ScrapCount: 3,
            isScrap: false,
        },
        { 
            Project: '2024 광양벤처밸리 BUILD-UP CAMP 참여팀 모집공고(추가모집)',
            Region: '전남',
            Field: '멘토링ㆍ컨설팅ㆍ교육',
            Affiliation: '포스코',
            Business_eligibility: '7년미만',
            Target: '대학생,일반인,대학,연구기관,일반기업,1인 창조기업',
            Start_date: '2024-09-26',
            End_date: '2024-10-03',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 10,
            ScrapCount: 3,
            isScrap: false,
        },
        { 
            Project: '2024 광양벤처밸리 BUILD-UP CAMP 참여팀 모집공고(추가모집)',
            Region: '전남',
            Field: '멘토링ㆍ컨설팅ㆍ교육',
            Affiliation: '포스코',
            Business_eligibility: '7년미만',
            Target: '대학생,일반인,대학,연구기관,일반기업,1인 창조기업',
            Start_date: '2024-09-26',
            End_date: '2024-10-03',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 10,
            ScrapCount: 3,
            isScrap: true,
        },
        { 
            Project: '2024 충남콘텐츠코리아랩「힐링마루(창작/창업 고민 해결)」참여자 모집공고',
            Region: '충남',
            Field: '행사ㆍ네트워크',
            Affiliation: '충남정보문화산업진흥원',
            Business_eligibility: '예비창업자,1년미만,2년미만,3년미만,5년미만,7년미만,10년미만',
            Target: '대학생,일반인,대학,일반기업,1인 창조기업',
            Start_date: '2024-09-09',
            End_date: '2024-10-04',
            URL: 'https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=170628',
            ViewCount: 10,
            ScrapCount: 3,
            isScrap: false,
        },
    ];

    // 현재 페이지에 보여줄 데이터
    const getCurrentPageData = (data: any[]) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav isNews={isNews} toggleNewsStatus={toggleNewsStatus}/>
                    {isNews ? (
                        <NewsList newsData={getCurrentPageData(newsData)} />
                    ) : (
                        <PolicyList policyData={getCurrentPageData(policyData)} />
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
