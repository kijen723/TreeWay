'use client'

import { useState } from 'react';
import Pagenation from './components/Pagenation';
import UpperNav from './components/UpperNav';
import styles from './page.module.scss';
import NewsList from './components/NewsList';
import PolicyList from './components/PolicyList';

export default function NewsPolicy() {
    const [ isNews, setIsNews ] = useState(true);

    const toggleNewsStatus = () => {
        setIsNews(!isNews);
    }

    const newsData = [
        {
            NewsClass: '청년창업',
            Title: '"기업과 시민이 함께 ESG"...롯데카드, 서울시와 \'띵크어스 데이\' 개최',
            Content: '이 행사는 롯데카드 ESG 캠페인 \'띵크어스\'나 서울특별시 지역 연계형 청년 창업 지원사업 \'넥스트로컬\'에 참여해, 지역 자원 활용과 지역민 고용 등 지역 경제 활성화에 기여하는 ESG 기업이 자사 브랜드와 상품을...',
            Time: '2024-09-30  2:32:00 PM',
            URL: 'https://www.hansbiz.co.kr/news/articleView.html?idxno=713748',
            ViewCount: 3,
            ScrapCount: 1,
            isScrap: true,
        },
        {
            NewsClass: '스타트업',
            Title: '“방과 후 수업 늘리는 대신 부모 근로 시간 줄여야죠” 육아하는 아빠...',
            Content: '당시 다녔던 스타트업에서도 육아휴직에 대해 우호적인 분위기였고요. 하지만 복직을 해보니 순탄치 않더라고요. 당시 회사에는 결혼하거나 아이를 키우는 직원이 거의 없었어요. 일과 육아를 병행하는 저를 보곤...',
            Time: '2024-10-01  10:02:00 AM',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 3,
            ScrapCount: 0,
            isScrap: false,
        },
        {
            NewsClass: '청년창업',
            Title: '"기업과 시민이 함께 ESG"...롯데카드, 서울시와 \'띵크어스 데이\' 개최',
            Content: '이 행사는 롯데카드 ESG 캠페인 \'띵크어스\'나 서울특별시 지역 연계형 청년 창업 지원사업 \'넥스트로컬\'에 참여해, 지역 자원 활용과 지역민 고용 등 지역 경제 활성화에 기여하는 ESG 기업이 자사 브랜드와 상품을...',
            Time: '2024-09-30  2:32:00 PM',
            URL: 'https://www.hansbiz.co.kr/news/articleView.html?idxno=713748',
            ViewCount: 3,
            ScrapCount: 0,
            isScrap: false,
        },
        {
            NewsClass: '스타트업',
            Title: '“방과 후 수업 늘리는 대신 부모 근로 시간 줄여야죠” 육아하는 아빠...',
            Content: '당시 다녔던 스타트업에서도 육아휴직에 대해 우호적인 분위기였고요. 하지만 복직을 해보니 순탄치 않더라고요. 당시 회사에는 결혼하거나 아이를 키우는 직원이 거의 없었어요. 일과 육아를 병행하는 저를 보곤...',
            Time: '2024-10-01  10:02:00 AM',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 3,
            ScrapCount: 2,
            isScrap: true,
        },
    ];

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

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.postBlock}>
                    <UpperNav isNews={isNews} toggleNewsStatus={toggleNewsStatus}/>
                    {isNews ? (
                        <NewsList newsData={newsData} />
                    ) : (
                        <PolicyList policyData={policyData} />
                    )}
                </div>
                <div>
                    <Pagenation postCnt={4} />
                </div>
            </div>
        </div>
    )
}