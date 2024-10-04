import styles from '@/app/community/[postId]/page.module.scss';

interface Comment {
    id: number;
    date: string;
    name: string;
    content: string;
}

interface CommentListProps {
    commentList: Comment[];
}

export default function CommentList({ commentList }: CommentListProps) {
    return (
        <div className={styles.commentList}>
            {commentList.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <div className={styles.titleArea}>
                        <p><strong>{comment.name}</strong></p>
                        <p className={styles.date}>{comment.date}</p>
                    </div>
                    <div className={styles.contentArea}>
                        <p>{comment.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
