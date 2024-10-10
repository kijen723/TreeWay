import styles from '@/app/community/[postId]/page.module.scss'
import { PostType } from '@/types/CommunityPropsTypes';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";
import { formatDateTime } from '@/util/formatDateTime';

interface postProp {
    post: PostType
}

export default function PostInfo({ post }: postProp) {
    const { date, time } = formatDateTime(post.createdAt);

    return (
        <div className={styles.postInfo}>
            <div className={styles.infoHead}>
                <p className={styles.orange}>{post.regionName} | {post.industryDetailName}</p>
                <div className={styles.count}>
                    <span>
                        <LuEye /> {post.viewCount}
                    </span>
                    <span>
                        <MdBookmarks /> {post.scrapCount}
                    </span>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div className={styles.info}>
                <span>{post.memberName}</span>
                <span>{date} {time}</span>
            </div>
        </div>
    );
}
