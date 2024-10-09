import { PostType } from "@/types/CommunityPropsTypes";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Post from "./Post";
import { useRouter } from 'next/navigation';
import styles from '../../../page.module.scss';

const fetchScrapPosts = async (memberId: number) => {
    const response = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap/${memberId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch scrap posts');
    }
    return response.json();
};

export default function ScrapPostList() {
    const memberId = useSelector((state: RootState) => state.auth.memberId);
    const router = useRouter();

    const { data, isLoading, error } = useQuery(
        ['scrapPosts', memberId],
        () => fetchScrapPosts(memberId),
        {
            enabled: !!memberId,
        }
    );

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>스크랩한 게시글을 불러오는데 문제가 발생했습니다.</div>;
    }

    return (
        <div className={styles.postList}>
            {data && data.length > 0 ? (
                data.map((post: PostType) => (
                    <Post
                        key={post.id}
                        post={post}
                        onClick={() => {
                            router.push(`/community/${post.id}`);
                        }}
                    />
                ))
            ) : (
                <div>스크랩한 게시글이 없습니다.</div>
            )}
        </div>
    );
}
