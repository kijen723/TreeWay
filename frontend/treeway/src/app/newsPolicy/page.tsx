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
            ScrapCount: 0,
        },
        {
            NewsClass: '스타트업',
            Title: '“방과 후 수업 늘리는 대신 부모 근로 시간 줄여야죠” 육아하는 아빠...',
            Content: '당시 다녔던 스타트업에서도 육아휴직에 대해 우호적인 분위기였고요. 하지만 복직을 해보니 순탄치 않더라고요. 당시 회사에는 결혼하거나 아이를 키우는 직원이 거의 없었어요. 일과 육아를 병행하는 저를 보곤...',
            Time: '2024-10-01  10:02:00 AM',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 3,
            ScrapCount: 0,
        },
        {
            NewsClass: '청년창업',
            Title: '"기업과 시민이 함께 ESG"...롯데카드, 서울시와 \'띵크어스 데이\' 개최',
            Content: '이 행사는 롯데카드 ESG 캠페인 \'띵크어스\'나 서울특별시 지역 연계형 청년 창업 지원사업 \'넥스트로컬\'에 참여해, 지역 자원 활용과 지역민 고용 등 지역 경제 활성화에 기여하는 ESG 기업이 자사 브랜드와 상품을...',
            Time: '2024-09-30  2:32:00 PM',
            URL: 'https://www.hansbiz.co.kr/news/articleView.html?idxno=713748',
            ViewCount: 3,
            ScrapCount: 0,
        },
        {
            NewsClass: '스타트업',
            Title: '“방과 후 수업 늘리는 대신 부모 근로 시간 줄여야죠” 육아하는 아빠...',
            Content: '당시 다녔던 스타트업에서도 육아휴직에 대해 우호적인 분위기였고요. 하지만 복직을 해보니 순탄치 않더라고요. 당시 회사에는 결혼하거나 아이를 키우는 직원이 거의 없었어요. 일과 육아를 병행하는 저를 보곤...',
            Time: '2024-10-01  10:02:00 AM',
            URL: 'https://woman.donga.com/life/article/all/12/5194375/1',
            ViewCount: 3,
            ScrapCount: 0,
        },
    ];

    const policyData = [
        { 
            PolicyName: '정책 A', 
            Description: '정책 설명', 
            EffectiveDate: '2024-01-01', 
            PolicyNumber: 'P-12345', 
            Link: 'https://example.com/policy1' 
        }
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