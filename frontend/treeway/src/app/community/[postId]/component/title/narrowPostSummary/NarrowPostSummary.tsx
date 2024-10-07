import styles from '@/app/community/[postId]/page.module.scss'
import BackButton from '../BackButton';
import ScrapBtn from '../ScrapBtn';
import PostInfo from '../PostInfo';
import EditDeleteBtn from '../EditDeleteBtn';
import { PostType } from '@/types/CommunityPropsTypes';
import { useState } from 'react';

interface postProp {
    post: PostType,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NarrowPostSummary({ post, onClick }: postProp) {
    const [isScraped, setIsScraped] = useState<boolean>(false);
    const [scrapCount, setScrapCount] = useState<number>(post.scrapCount ?? 0);
    const memberId = 1;  // 수정 필요

    const handleScrapToggle = (newScrapStatus: boolean) => {
        setIsScraped(newScrapStatus);
        setScrapCount(newScrapStatus ? scrapCount + 1 : scrapCount - 1);
    };

    return (
        <div className={styles.narrowPostSummary} onClick={onClick}>
            <div>
                <BackButton />
            </div>
            <div className={styles.summBody}>
                {/* <img className={styles.summImg} src='/image/cat.jpg' /> */}
                <div className={styles.nonImgNarrow}></div>
                <div className={styles.summContent}>
                    <PostInfo post={post} />
                    <div className={styles.postBtnGroup} onClick={(e) => { e.stopPropagation() }}>
                        <ScrapBtn
                            isScraped={isScraped}
                            postId={post.id}
                            memberId={memberId}
                            onToggle={handleScrapToggle}
                        />
                        {true ? <EditDeleteBtn postId={post.id}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}