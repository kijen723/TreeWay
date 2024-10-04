'use client'

import Comments from './component/comment/Comments';
import PostDetail from './component/detail/PostDetail';
import PostSummary from './component/title/PostSummary';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import WideComments from './component/comment/wideComment/WideComments';
import NarrowPostSummary from './component/title/narrowPostSummary/NarrowPostSummary';

export default function CommunityDetail() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
=======
    const pathname = usePathname();
    const postId = pathname.split('/').pop();

    const fetchPost = async (postId: string | undefined) => {
        const res = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`);
        if (!res.ok) {
            throw new Error('Failed to fetch post');
        }
        return res.json();
    };

    // const post = fetchPost(postId); 
    const post = {
        id: 1,
        title: "TITLETITLETITLE",
        content: "본문 내용",
        author: "author",
        date: "2024-10-04 00:00:00",
        imgSrc: "/image/cat.jpg",
        industryDetail: "한식",
        region: "서울",
        viewCount: 3,
        scrapCount: 0,
        isScrap: false,
    }

    const commentList = [
        {
            id: 1,
            date: '2024-10-04 00:00:00',
            name: '작성자',
            content: '댓글 내용1'
        },
        {
            id: 2,
            date: '2024-10-04 00:00:00',
            name: '작성자',
            content: '댓글 내용2'
        },
        {
            id: 3,
            date: '2024-10-04 00:00:00',
            name: '작성자',
            content: '댓글 내용3'
        },
        {
            id: 4,
            date: '2024-10-04 00:00:00',
            name: '작성자',
            content: '댓글 내용4'
        },
        {
            id: 5,
            date: '2024-10-04 00:00:00',
            name: '작성자',
            content: '댓글 내용5'
        },
    ]

    useEffect(() => {
        if (post) {
            console.log('post:', post);
        }
    })

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
=======
>>>>>>> a452d35 (feat : modify main page list)
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    {defView ? (
                        <>
                            {post && <PostSummary post={post} />}
                            <Comments commentList={commentList} onClick={toggleDefView} />
                        </>
                    ) : (
                        <>
                            <NarrowPostSummary post={post} onClick={toggleDefView} />
                            <WideComments commentList={commentList}/>
                        </>
                    )}
                </div>
                <div>
                    <PostDetail />
                </div>
            </div>
        </div>
    );
}
