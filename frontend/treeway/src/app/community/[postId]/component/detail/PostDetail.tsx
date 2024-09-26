import styles from '@/app/community/[postId]/page.module.scss'

export default function PostDetail() {
    return (
        <div className={styles.postDetail}>
            <div className={styles.postBlock}>
                게시글 본문
            </div>
        </div>
    );
}