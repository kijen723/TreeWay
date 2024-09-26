import styles from '@/app/community/[postId]/page.module.scss'

export default function CommentHeader() {
    const commentCnt: number = 5;

    return (
        <div className={styles.commentHeader}>
            <h3>댓글</h3>
            <p>{commentCnt}</p>
        </div>
    );
}