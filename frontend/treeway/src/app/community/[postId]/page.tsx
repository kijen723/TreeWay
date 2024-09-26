'use client'

import Comments from './component/Comments';
import PostDetail from './component/PostDetail';
import PostSummary from './component/PostSummary'
import styles from './page.module.scss'

export default function CommunityDetail() {
    return (
        <div className={styles.background}>
            <div className={styles.contentsArea}>
                <div>
                    <PostSummary />
                    <Comments />
                </div>
                <div>
                    <PostDetail />
                </div>
            </div>
        </div>
    );
}