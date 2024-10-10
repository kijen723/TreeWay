"use client";

import Comments from "./component/comment/Comments";
import PostDetail from "./component/detail/PostDetail";
import PostSummary from "./component/title/PostSummary";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import WideComments from "./component/comment/wideComment/WideComments";
import NarrowPostSummary from "./component/title/narrowPostSummary/NarrowPostSummary";

const fetchPost = async (postId: number | undefined) => {
  const res = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
};

const fetchComments = async (postId: number | undefined) => {
  const res = await fetch(`https://j11b107.p.ssafy.io/api/article/comment/${postId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }
  return res.json();
};

export default function CommunityDetail() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
=======
    const pathname = usePathname();
    const postId = Number(pathname.split('/').pop());
=======
    const pathname = useParams();
    const postId = Number(pathname?.postId);
>>>>>>> 7de1f0e (fix: 빌드 에러 수정)
=======
  const pathname = useParams();
  const postId = Number(pathname?.postId);
>>>>>>> 5ab4ed5 (feat : modify css)

  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [loadingComments, setLoadingComments] = useState<boolean>(true);

  const loadComments = async () => {
    try {
      const fetchedComments = await fetchComments(postId);
      setComments(fetchedComments);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    const loadPostAndComments = async () => {
      try {
        const fetchedPost = await fetchPost(postId);
        setPost(fetchedPost);
        await loadComments();
      } catch (error) {
        console.error("Failed to fetch post or comments:", error);
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      loadPostAndComments();
    }
  }, [postId]);

  const handleCommentSubmit = () => {
    setLoadingComments(true);
    loadComments();
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4c30418 (feat: 커뮤니티 수정)
    const [ defView, setDefView ] = useState(true);
=======
=======
    const handleCommentSubmit = () => {
        setLoadingComments(true);
        loadComments();
    };

<<<<<<< HEAD
>>>>>>> a235e72 (feat: 댓글 입력 후 컴포넌트 재랜더링)
=======
    const handleCommentDelete = (commentId: number) => {
        setComments((prevComments) => prevComments.filter(comment => comment.id !== commentId));
    };

>>>>>>> cb3190e (feat: 댓글 삭제 api 연결)
    const [defView, setDefView] = useState(true);
>>>>>>> 29b1edb (feat: 커뮤니티 게시글 상세 페이지 댓글 컴포넌트 수정)
=======
  const handleCommentDelete = (commentId: number) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  const [defView, setDefView] = useState(true);

  const toggleDefView = () => {
    setDefView(!defView);
  };
>>>>>>> 5ab4ed5 (feat : modify css)

  if (loading) return <div>Loading...</div>;

<<<<<<< HEAD
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
                            <Comments
                                postId={postId}
                                commentList={comments}
                                onClick={toggleDefView}
                                onCommentSubmit={handleCommentSubmit}
                            />
                        </>
                    ) : (
                        <>
                            <NarrowPostSummary post={post} onClick={toggleDefView} />
                            <WideComments 
                                postId={postId} 
                                commentList={comments} 
                                onCommentSubmit={handleCommentSubmit}
                                onCommentDelete={handleCommentDelete}
                            />
                        </>
                    )}
                </div>
                <div>
                    {post && <PostDetail postContent={post.content} postImageList={post.articleAttachedFile} />}
                </div>
            </div>
=======
  return (
    <div className={styles.background}>
      <div className={styles.contentsArea}>
        <div>
          {defView ? (
            <>
              {post && <PostSummary post={post} />}
              <Comments
                postId={postId}
                commentList={comments}
                onClick={toggleDefView}
                onCommentSubmit={handleCommentSubmit}
              />
            </>
          ) : (
            <>
              <NarrowPostSummary post={post} onClick={toggleDefView} />
              <WideComments
                postId={postId}
                commentList={comments}
                onCommentSubmit={handleCommentSubmit}
                onCommentDelete={handleCommentDelete}
              />
            </>
          )}
>>>>>>> 5ab4ed5 (feat : modify css)
        </div>
        <div>{post && <PostDetail postContent={post.content} />}</div>
      </div>
    </div>
  );
}
