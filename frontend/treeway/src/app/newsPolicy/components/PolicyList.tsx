import styles from '../page.module.scss';
import { LuEye } from 'react-icons/lu'; // 조회수 아이콘
import { MdBookmarks } from 'react-icons/md'; // 스크랩 수 아이콘
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'; // 스크랩 버튼 아이콘
import { useState } from 'react';
import { PolicyListProps } from '@/types/NewsPolicyPropsTypes';

export default function PolicyList({ policyData }: PolicyListProps) {
    const [scrapCounts, setScrapCounts] = useState(
        policyData.map(policy => policy.ScrapCount)
    );
    const [isScraped, setIsScraped] = useState(
        policyData.map(policy => policy.isScrap)
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
                            <span>{policy.Region} | {policy.Field}</span>
                            <span>기간: {policy.Start_date} ~ {policy.End_date}</span>
                        </div>
                        <div className={styles.policyTitle}>
                            <h3>{policy.Affiliation}</h3>
                            <a href={policy.URL} target="_blank">
                                <h3>{policy.Project}</h3>
                            </a>
                        </div>
                        <div className={styles.policyContent}>
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
