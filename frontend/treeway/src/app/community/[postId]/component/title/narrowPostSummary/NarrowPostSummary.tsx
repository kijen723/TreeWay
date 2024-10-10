import styles from '@/app/community/[postId]/page.module.scss';
import BackButton from '../BackButton';
import ScrapBtn from '../ScrapBtn';
import PostInfo from '../PostInfo';
import EditDeleteBtn from '../EditDeleteBtn';
import { PostType } from '@/types/CommunityPropsTypes';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface postProp {
    post: PostType,
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function NarrowPostSummary({ post, onClick }: postProp) {
    const [isScraped, setIsScraped] = useState<boolean>(false);
    const [scrapCount, setScrapCount] = useState<number>(post.scrapCount ?? 0);
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    useEffect(() => {
        const checkScrapStatus = async () => {
            try {
                const response = await fetch('https://j11b107.p.ssafy.io/api/article/scrap/check', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        memberId: memberId,
                        articleId: post.id,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to check scrap status');
                }

                const data = await response.json();
                setIsScraped(data.isScraped);
            } catch (error) {
                console.error('Error fetching scrap status:', error);
            }
        };

        checkScrapStatus();
    }, [post.id, memberId]);

    const handleScrapToggle = (newScrapStatus: boolean) => {
        setIsScraped(newScrapStatus);
        setScrapCount(newScrapStatus ? scrapCount + 1 : scrapCount - 1);
    };

    const imageUrl = post.articleAttachedFile && post.articleAttachedFile.length > 0 
        ? `https://j11b107.p.ssafy.io/api/files/download/${post.articleAttachedFile[0].id}` 
        : "/image/default_img.png";

    return (
        <div className={styles.narrowPostSummary} onClick={onClick}>
            <div>
                <BackButton />
            </div>
            <div className={styles.summBody}>
                <img className={styles.summImg} src={imageUrl} alt="Post image" />
                <div className={styles.summContent}>
                    <PostInfo post={post} />
                    <div className={styles.postBtnGroup} onClick={(e) => { e.stopPropagation() }}>
                        <ScrapBtn
                            isScraped={isScraped}
                            postId={post.id}
                            memberId={memberId}
                            onToggle={handleScrapToggle}
                        />
                        {memberId === post.memberId ? <EditDeleteBtn postId={post.id}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
