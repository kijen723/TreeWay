import { useState } from 'react';
import ScrapPostList from './component/ScrapPostList';
import ScrapNewsList from './component/ScrapNewsList';
import ScrapPolicyList from './component/ScrapPolicyList';
import styles from './MyScrapList.module.scss'; // 스타일 파일 임포트

export default function MyScrapList() {
    const [scrapStatus, setScrapStatus] = useState<'post' | 'news' | 'policy'>('post');

    const handlePostClick = () => setScrapStatus('post');
    const handleNewsClick = () => setScrapStatus('news');
    const handlePolicyClick = () => setScrapStatus('policy');

    return (
        <div className={styles.container}>
            <div className={styles.buttonGroup}>
                <button
                    className={`${styles.button} ${scrapStatus === 'post' ? styles.active : ''}`}
                    onClick={handlePostClick}
                >
                    게시글
                </button>
                <button
                    className={`${styles.button} ${scrapStatus === 'news' ? styles.active : ''}`}
                    onClick={handleNewsClick}
                >
                    뉴스
                </button>
                <button
                    className={`${styles.button} ${scrapStatus === 'policy' ? styles.active : ''}`}
                    onClick={handlePolicyClick}
                >
                    정책
                </button>
            </div>

            <div className={styles.content}>
                {scrapStatus === 'post' && <ScrapPostList />}
                {scrapStatus === 'news' && <ScrapNewsList />}
                {scrapStatus === 'policy' && <ScrapPolicyList />}
            </div>
        </div>
    );
}
