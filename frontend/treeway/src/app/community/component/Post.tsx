import { useState } from "react";
import styles from "../page.module.scss";
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { PostType } from "@/types/CommunityPropsTypes";
import { formatDateTime } from '@/util/formatDateTime';

interface PostProps {
  post: PostType;
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const { date, time } = formatDateTime(post.createdAt);
  const [isScrap, setIsScrap] = useState(post.isScrap); 
  const [scrapCount, setScrapCount] = useState(post.scrapCount); 

  const memberId = 1; // 수정 필요

  const toggleScrap = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      if (isScrap) {
        const response = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memberId: memberId, 
            articleId: post.id 
          })
        });

        if (!response.ok) {
          throw new Error('Failed to cancel scrap');
        }

        setIsScrap(false);
        setScrapCount(scrapCount - 1); 
      } else {
        const response = await fetch(`https://j11b107.p.ssafy.io/api/article/scrap`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            memberId: memberId,
            articleId: post.id
          })
        });

        if (!response.ok) {
          throw new Error('Failed to scrap');
        }

        setIsScrap(true);
        setScrapCount(scrapCount + 1);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }; 

  return (
    <div className={styles.post} onClick={onClick}>
      <div className={styles.postSummary}>
        <div className={styles.postInfo}>
          <p>{post.regionName} | {post.industryDetailName}</p>
          <p>{date} {time}</p>
        </div>
        <h2>{post.title}</h2>
        <div className={styles.postInfo}>
          <p>{post.memberName}</p>
        </div>
      </div>
      <div className={styles.postEnd}>
        <div className={styles.postStats}>
          <div className={styles.count}>
            <span>
              <LuEye /> {post.viewCount}
            </span>
            <span>
              <MdBookmarks /> {scrapCount}
            </span>
          </div>
          <div className={styles.scrapBtn} onClick={toggleScrap}>
            {isScrap ? (
              <IoBookmark className={styles.colorBookmark} />
            ) : (
              <IoBookmarkOutline className={styles.bookmark} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
