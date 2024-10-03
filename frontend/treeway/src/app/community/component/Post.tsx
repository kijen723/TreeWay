import styles from "../page.module.scss";
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useState } from "react";

interface PostProps {
  post: {
    id: number;
    title: string;
    author: string;
    date: string;
    viewCnt: number;
    imgSrc: string;
    viewCount: number;
    scrapCount: number;
    isScrap: boolean;
  };
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const [isScrap, setIsScrap] = useState(post.isScrap); 
  const [scrapCount, setScrapCount] = useState(post.scrapCount);

  const toggleScrap = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsScrap((prev) => !prev);
    setScrapCount((prev) => (isScrap ? prev - 1 : prev + 1)); // 스크랩 카운트 업데이트
  };

  return (
    <div className={styles.post} onClick={onClick}>
      <div className={styles.postSummary}>
        <h2>{post.title}</h2>
        <div className={styles.postInfo}>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
          <p>Views: {post.viewCnt}</p>
        </div>
      </div>
      <div className={styles.postEnd}>
        <img className={styles.postImg} src={post.imgSrc} alt={post.title} />
        <div className={styles.postStats}>
          <div className={styles.count}>
            <span>
              <LuEye /> {post.viewCount}
            </span>
            <span>
              <MdBookmarks /> {scrapCount}
            </span>
          </div>
          <div
            className={styles.scrapBtn}
            onClick={toggleScrap} 
          >
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
