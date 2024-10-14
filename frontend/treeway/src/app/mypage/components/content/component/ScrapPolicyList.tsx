import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PolicyList from "./PolicyList"; // 정책 리스트 컴포넌트 임포트

const fetchScrapPolicies = async (memberId: number) => {
    const response = await fetch(`https://j11b107.p.ssafy.io/api/policy/scrap/${memberId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch scrap policies');
    }
    return response.json();
};

export default function ScrapPolicyList() {
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    const { data, isLoading, error } = useQuery(
        ['scrapPolicies', memberId],
        () => fetchScrapPolicies(memberId),
        {
            enabled: !!memberId,
        }
    );

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>스크랩한 정책을 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <div>
            {data && data.length > 0 ? (
                <PolicyList policyData={data} />
            ) : (
                <div>스크랩한 정책이 없습니다.</div>
            )}
        </div>
    );
}
