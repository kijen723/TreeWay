import styles from "../../../page.module.scss";
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { PostType } from "@/types/CommunityPropsTypes";
import { formatDateTime } from '@/util/formatDateTime';

interface PostProps {
  post: PostType;
  onClick: () => void;
}

export default function Post({ post, onClick }: PostProps) {
  const { date, time } = formatDateTime(post.createdAt);

  return (
    <div className={styles.post} onClick={onClick}>
      <div className={styles.postSummary}>
        <div className={styles.postInfo}>
          <p className={styles.orange}>{post.regionName} | {post.industryDetailName}</p>
          <p className={styles.gray}>{date} {time}</p>
        </div>
        <h2>{post.title}</h2>
        <div className={styles.postInfo}>
          <p className={styles.gray}>{post.memberName}</p>
        </div>
      </div>
      <div className={styles.postEnd}>
        <div className={styles.postStats}>
          <div className={styles.count}>
            <span>
              <LuEye /> {post.viewCount}
            </span>
            <span>
              <MdBookmarks /> {post.scrapCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
