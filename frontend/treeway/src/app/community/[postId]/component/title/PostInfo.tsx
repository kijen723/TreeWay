import styles from '@/app/community/[postId]/page.module.scss'
import { PostType } from '@/types/CommunityPropsTypes';
import { LuEye } from "react-icons/lu";
import { MdBookmarks } from "react-icons/md";

interface postProp {
    post: PostType
}

export default function PostInfo({ post }: postProp) {
    return (
        <div className={styles.postInfo}>
            <div className={styles.infoHead}>
                <p>{post.region} | {post.industryDetail}</p>
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
                <p>{post.author}</p>
                <p>{post.date}</p>
                <p></p>
                <p>첨부파일</p>
            </div>
        </div>
    );
}