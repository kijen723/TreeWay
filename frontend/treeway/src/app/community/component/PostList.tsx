import styles from "../page.module.scss";
import Post from "./Post";
import { useRouter } from 'next/navigation'
import { PostListProps } from "@/types/CommunityPropsTypes";

export default function PostList({ currentPage, postsPerPage, postList }: PostListProps) {
    const router = useRouter(); 

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = postList.slice(startIndex, startIndex + postsPerPage);

    const handlePostClick = (id: number) => {
        router.push(`/community/${id}`);
    };

    return (
        <div className={styles.postList}>
            {currentPosts.map((post, index) => (
                <Post key={index} post={post} onClick={() => handlePostClick(post.id)}/>
            ))}
        </div>
    );
}
