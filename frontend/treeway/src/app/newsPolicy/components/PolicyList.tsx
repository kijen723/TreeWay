import styles from '../page.module.scss';
import { LuEye } from 'react-icons/lu'; // 조회수 아이콘
import { MdBookmarks } from 'react-icons/md'; // 스크랩 수 아이콘
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'; // 스크랩 버튼 아이콘
import { useState } from 'react';

interface PolicyItem {
    Project: string;
    Region: string;
    Field: string;
    Affiliation: string;
    Business_eligibility: string;
    Target: string;
    Start_date: string;
    End_date: string;
    URL: string;
    ViewCount: number;
    ScrapCount: number;
    isScrap: boolean;
}

interface PolicyListProps {
    policyData: PolicyItem[];
}

export default function PolicyList({ policyData }: PolicyListProps) {
    // 스크랩 수와 스크랩 여부를 상태로 관리
    const [scrapCounts, setScrapCounts] = useState(
        policyData.map(policy => policy.ScrapCount)
    );
    const [isScraped, setIsScraped] = useState(
        policyData.map(policy => policy.isScrap) // 초기값으로 각 정책의 스크랩 상태 설정
    );

    const toggleScrap = (index: number) => {
        const updatedScrapStatus = [...isScraped];
        updatedScrapStatus[index] = !updatedScrapStatus[index];
        setIsScraped(updatedScrapStatus);

        const updatedScrapCounts = [...scrapCounts];
        updatedScrapCounts[index] = updatedScrapStatus[index]
            ? updatedScrapCounts[index] + 1
            : updatedScrapCounts[index] - 1;
        setScrapCounts(updatedScrapCounts);
    };

    return (
        <div className={styles.policyList}>
            {policyData.map((policy, index) => (
                <div key={index} className={styles.policy}>
                    <div className={styles.policyBody}>
                        <div className={styles.policyInfo}>
                            <span>{policy.Region}</span>
                            <span>기간: {policy.Start_date} ~ {policy.End_date}</span>
                        </div>
                        <a className={styles.policyTitle} href={policy.URL} target="_blank">
                            <h3>{policy.Project}</h3>
                        </a>
                        <div className={styles.policyContent}>
                            <div className={styles.content}>
                                <p>지원분야: {policy.Field}</p>
                                <p>기관명: {policy.Affiliation}</p>
                            </div>
                            <div className={styles.content}>
                                <p>대상: {policy.Target}</p>
                                <p>사업 자격: {policy.Business_eligibility}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.policyStats}>
                        <div className={styles.count}>
                            <span><LuEye /> {policy.ViewCount}</span>
                            <span><MdBookmarks /> {scrapCounts[index]}</span>
                        </div>
                        <div className={styles.scrapBtn} onClick={() => toggleScrap(index)}>
                            {isScraped[index] ? (
                                <IoBookmark className={styles.colorBookmark} />
                            ) : (
                                <IoBookmarkOutline className={styles.bookmark} />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
