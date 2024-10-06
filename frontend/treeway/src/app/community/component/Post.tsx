import styles from "../page.module.scss";
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useState } from "react";
import { PostType } from "@/types/CommunityPropsTypes";
import { formatDateTime } from '@/util/formatDateTime';

interface PostProps {
  post: PostType;
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const [isScrap, setIsScrap] = useState(post.isScrap); 
  // const [scrapCount, setScrapCount] = useState(post.scrapCount); // 반환값 추가 필요
  const [scrapCount, setScrapCount] = useState(0);
  const { date, time } = formatDateTime(post.createdAt);

  const toggleScrap = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsScrap((prev) => !prev);
    // setScrapCount((prev) => (isScrap ? prev - 1 : prev + 1)); // 스크랩 카운트 업데이트
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
        {/* {post.imgSrc ? (
          <img className={styles.postImg} src={post.imgSrc} alt={post.title} />
        ) : null} */}
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
