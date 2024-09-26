'use client'

import Comments from './component/title/Comments';
import PostDetail from './component/title/PostDetail';
import PostSummary from './component/title/PostSummary'
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