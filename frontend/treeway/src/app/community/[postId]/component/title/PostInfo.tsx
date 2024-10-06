import styles from '@/app/community/[postId]/page.module.scss'
import { PostType } from '@/types/CommunityPropsTypes';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { formatDateTime } from '@/util/formatDateTime';

interface postProp {
    post: PostType
}

export default function PostInfo({ post }: postProp) {
    const scrapCount = 0; // 반환값 필요
    const { date, time } = formatDateTime(post.createdAt);

    return (
        <div className={styles.postInfo}>
            <div className={styles.infoHead}>
                <p>{post.regionName} | {post.industryDetailName}</p>
                <div className={styles.count}>
                    <span>
                        <LuEye /> {post.viewCount}
                    </span>
                    <span>
                        <MdBookmarks /> {scrapCount}
                    </span>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div className={styles.info}>
                <p>{post.memberName}</p>
                <p>{date} {time}</p>
            </div>
        </div>
    );
}