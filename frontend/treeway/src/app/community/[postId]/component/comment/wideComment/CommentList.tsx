import styles from '@/app/community/[postId]/page.module.scss';
import { CommentType } from '@/types/CommunityPropsTypes';
import { formatDateTime } from '@/util/formatDateTime';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

interface CommentListProps {
    commentList: CommentType[];
    loggedInMemberId: number | null;
    onCommentDelete?: (commentId: number) => void;
}

export default function CommentList({ commentList, loggedInMemberId, onCommentDelete }: CommentListProps) {
    const handleDeleteClick = async (commentId: number) => {
        try {
            const result = await Swal.fire({
                title: '댓글을 삭제하시겠습니까?',
                text: "삭제 후에는 복구할 수 없습니다.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '삭제',
                cancelButtonText: '취소',
            });

            if (!result.isConfirmed) return;

            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/comment/${commentId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete comment');
            }

            if (onCommentDelete) {
                onCommentDelete(commentId);
            }

            Swal.fire(
                '삭제 완료!',
                '댓글이 삭제되었습니다.',
                'success'
            );

        } catch (error) {
            console.error('Error deleting comment:', error);
            Swal.fire(
                '삭제 실패!',
                '댓글 삭제 중 오류가 발생했습니다.',
                'error'
            );
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
