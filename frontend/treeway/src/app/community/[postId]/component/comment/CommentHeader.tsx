import styles from '@/app/community/[postId]/page.module.scss'

interface commentCntProp {
    commentCount: number,
}

export default function CommentHeader({commentCount} : commentCntProp) {

    return (
        <div className={styles.commentHeader}>
            <h3>댓글</h3>
            <p>{commentCount}</p>
        </div>
    );
}