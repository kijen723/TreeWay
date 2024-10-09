import styles from './PolicyList.module.scss';
import { MdBookmarks } from 'react-icons/md'; // 스크랩 수 아이콘
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'; // 스크랩 버튼 아이콘
import { useState, useEffect } from 'react';
import { PolicyListProps } from '@/types/NewsPolicyPropsTypes';
import { formatDateTime } from '@/util/formatDateTime';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function PolicyList({ policyData }: PolicyListProps) {
    const [policyList, setPolicyList] = useState(policyData || []);
    const [loading, setLoading] = useState(true);
    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const fetchScrapStatus = async (policyId: number) => {
        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/policy/scrap/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberId: memberId,
                    policyId: policyId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch scrap status');
            }

            const data = await response.json();
            return data.isScraped;
        } catch (error) {
            console.error('Error fetching scrap status:', error);
            return false;
        }
    };

    useEffect(() => {
        const updateScrapStatusForAllPolicies = async () => {
            const updatedPolicyList = await Promise.all(
                policyData.map(async (policy) => {
                    const isScrap = await fetchScrapStatus(policy.id);
                    return { ...policy, isScrap };
                })
            );
            setPolicyList(updatedPolicyList);
            setLoading(false);
        };

        if (policyData.length > 0) {
            updateScrapStatusForAllPolicies();
        }
    }, [policyData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.policyList}>
            {policyList.map((policy, index) => {
                const { date: startDate, time: startTime } = formatDateTime(policy.startDate);
                const { date: endDate, time: endTime } = formatDateTime(policy.endDate);

                return (
                    <div key={index} className={styles.policy}>
                        <div className={styles.policyBody}>
                            <div className={styles.policyInfo}>
                                <span>{policy.regionName} | {policy.category}</span>
                                <span>기간: {startDate} ~ {endDate}</span>
                            </div>
                            <div className={styles.policyTitle}>
                                <h3>{policy.host}</h3>
                                <a href={policy.url} target="_blank">
                                    <h3>{policy.title}</h3>
                                </a>
                            </div>
                            <div className={styles.policyContent}>
                                <div className={styles.content}>
                                    <p>대상: {policy.target}</p>
                                    <p>사업 자격: {policy.eligibility}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.policyStats}>
                            <div className={styles.count}>
                                <span><MdBookmarks /> {policy.scrapCount}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
