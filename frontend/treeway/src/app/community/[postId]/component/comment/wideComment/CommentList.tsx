import styles from '@/app/community/[postId]/page.module.scss';
import { CommentType } from '@/types/CommunityPropsTypes';
import { formatDateTime } from '@/util/formatDateTime';
import { FaTrash } from "react-icons/fa";

interface CommentListProps {
    commentList: CommentType[];
    loggedInMemberId: number | null;
    onCommentDelete?: (commentId: number) => void;
}

export default function CommentList({ commentList, loggedInMemberId, onCommentDelete }: CommentListProps) {
    const handleDeleteClick = async (commentId: number) => {
        try {
            const confirmDelete = window.confirm("댓글을 삭제하시겠습니까?");
            if (!confirmDelete) return;

            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/comment/${commentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }

            if (onCommentDelete) {
                onCommentDelete(commentId);
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };
    
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
                        {comment.memberId === loggedInMemberId && (
                            <p className={styles.delete} onClick={() => handleDeleteClick(comment.id)}>
                                <FaTrash /> DELETE
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}