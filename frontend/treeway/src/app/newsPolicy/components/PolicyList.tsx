import styles from '../page.module.scss';
import { MdBookmarks } from 'react-icons/md'; // 스크랩 수 아이콘
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'; // 스크랩 버튼 아이콘
import { useState, useEffect } from 'react';
import { PolicyListProps } from '@/types/NewsPolicyPropsTypes';
import { formatDateTime } from '@/util/formatDateTime';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Swal from "sweetalert2";

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

    const toggleScrap = async (index: number, policyId: number) => {
        if (!memberId) {
            Swal.fire({
                title: '로그인이 필요합니다!',
                text: "로그인 후 이용할 수 있는 기능입니다.",
                icon: 'warning',
                confirmButtonText: '확인',
            });
            return;
        }

        const updatedPolicyList = [...policyList];
        const newScrapStatus = !updatedPolicyList[index].isScrap;

        try {
            const response = await fetch(`https://j11b107.p.ssafy.io/api/policy/scrap`, {
                method: newScrapStatus ? 'POST' : 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    memberId: memberId,
                    policyId: policyId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update scrap status');
            }

            updatedPolicyList[index].isScrap = newScrapStatus;
            updatedPolicyList[index].scrapCount = newScrapStatus
                ? updatedPolicyList[index].scrapCount + 1
                : updatedPolicyList[index].scrapCount - 1;

            setPolicyList(updatedPolicyList);
        } catch (error) {
            console.error('Error updating scrap status:', error);
        }
    };

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
                                    <p>대상: {policy.target.split(",").map((word, i)=>{
                                        return(
                                            <span className={styles.word}>{word + " "}</span>
                                        )
                                    })}</p>
                                    <p>사업 자격: {policy.eligibility.split(",").map((word, i)=>{
                                        return(
                                            <span className={styles.word}>{word + " "}</span>
                                        )
                                    })}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.policyStats}>
                            <div className={styles.count}>
                                <span><MdBookmarks /> {policy.scrapCount}</span>
                            </div>
                            <div className={styles.scrapBtn} onClick={() => toggleScrap(index, policy.id)}>
                                {policy.isScrap ? (
                                    <IoBookmark className={styles.colorBookmark} />
                                ) : (
                                    <IoBookmarkOutline className={styles.bookmark} />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
