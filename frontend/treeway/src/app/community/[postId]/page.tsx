'use client'

import Comments from './component/comment/Comments';
import PostDetail from './component/detail/PostDetail';
import PostSummary from './component/title/PostSummary'
import styles from './page.module.scss'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import WideComments from './component/comment/wideComment/WideComments';
import NarrowPostSummary from './component/title/narrowPostSummary/NarrowPostSummary';

const fetchPost = async (postId: string | undefined) => {
    const res = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`);
    if (!res.ok) {
        throw new Error('Failed to fetch post');
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

    const post = fetchPost(postId); 

    useEffect(() => {
        if (post) {
            console.log('post:', post);
        }
    })

>>>>>>> 4c30418 (feat: 커뮤니티 수정)
    const [ defView, setDefView ] = useState(true);

    const toggleDefView = () => {
        setDefView(!defView);
    }

<<<<<<< HEAD
=======
>>>>>>> a452d35 (feat : modify main page list)
=======
>>>>>>> 19073e0 (fix: merge 에러 수정)
    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    { defView ? (
                        <>
                            <PostSummary />
                            <Comments onClick={toggleDefView}/>
                        </>
                        ) : 
                    (
                        <>
                            <NarrowPostSummary onClick={toggleDefView}/>
                            <WideComments />
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