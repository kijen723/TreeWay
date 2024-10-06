import styles from '@/app/community/[postId]/page.module.scss';
import { CommentType } from '@/types/CommunityPropsTypes';
import { formatDateTime } from '@/util/formatDateTime';

interface CommentListProps {
    commentList: CommentType[];
}

export default function CommentList({ commentList }: CommentListProps) {
    return (
        <div className={styles.commentList}>
            {commentList.map((comment) => {
                const { date, time } = formatDateTime(comment.createdAt);

                return (
                    <div key={comment.id} className={styles.comment}>
                        <div className={styles.titleArea}>
                            <p><strong>{comment.memberName}</strong></p>
                            <p className={styles.date}>{date} {time}</p>
                        </div>
                        <div className={styles.contentArea}>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
