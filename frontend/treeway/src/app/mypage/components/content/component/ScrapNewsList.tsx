import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NewsList from "./NewsList";

const fetchScrapNews = async (memberId: number) => {
    const response = await fetch(`https://j11b107.p.ssafy.io/api/news/scrap/${memberId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch scrap news');
    }
    return response.json();
};

export default function ScrapNewsList() {
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    const { data, isLoading, error } = useQuery(
        ['scrapNews', memberId],
        () => fetchScrapNews(memberId),
        {
            enabled: !!memberId,
        }
    );

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>스크랩한 뉴스를 불러오는 중 오류가 발생했습니다.</div>;
    }

    return (
        <div>
            {data && data.length > 0 ? (
                <NewsList newsData={data} />
            ) : (
                <div>스크랩한 뉴스가 없습니다.</div>
            )}
        </div>
    );
}
