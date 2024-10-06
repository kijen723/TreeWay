'use client';

import Comments from './component/comment/Comments';
import PostDetail from './component/detail/PostDetail';
import PostSummary from './component/title/PostSummary';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import WideComments from './component/comment/wideComment/WideComments';
import NarrowPostSummary from './component/title/narrowPostSummary/NarrowPostSummary';

const fetchPost = async (postId: string | undefined) => {
    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    return res.json();
};

const fetchComments = async (postId: string | undefined) => {
    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/comment/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch comments');
    }
    return res.json();
};

export default function CommunityDetail() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
=======
    const pathname = usePathname();
    const postId = pathname.split('/').pop();

    const [post, setPost] = useState<any>(null); 
    const [comments, setComments] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
    const [loadingComments, setLoadingComments] = useState<boolean>(true);

    useEffect(() => {
        const loadPostAndComments = async () => {
            try {
                const [fetchedPost, fetchedComments] = await Promise.all([
                    fetchPost(postId),
                    fetchComments(postId),
                ]);
                setPost(fetchedPost);
                setComments(fetchedComments); // 댓글 데이터 설정
            } catch (error) {
                console.error('Failed to fetch post or comments:', error);
            } finally {
                setLoading(false);
                setLoadingComments(false); // 댓글 로딩 완료
            }
        };

        if (postId) {
            loadPostAndComments();
        }
    }, [postId]);

<<<<<<< HEAD
>>>>>>> 4c30418 (feat: 커뮤니티 수정)
    const [ defView, setDefView ] = useState(true);
=======
    const [defView, setDefView] = useState(true);
>>>>>>> 29b1edb (feat: 커뮤니티 게시글 상세 페이지 댓글 컴포넌트 수정)

    const toggleDefView = () => {
        setDefView(!defView);
    };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a452d35 (feat : modify main page list)
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
=======
    if (loading) return <div>Loading...</div>; 

>>>>>>> 998e6ca (feat: 게시글 상세 조회 api 연결)
    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    {defView ? (
                        <>
                            {post && <PostSummary post={post} />}
                            <Comments commentList={comments} onClick={toggleDefView} />
                        </>
                    ) : (
                        <>
                            <NarrowPostSummary post={post} onClick={toggleDefView} />
                            <WideComments commentList={comments}/>
                        </>
                    )}
                </div>
                <div>
                    {post && <PostDetail postContent={post.content} />}
                </div>
            </div>
        </div>
    );
}
