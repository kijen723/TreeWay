import styles from '@/app/community/[postId]/page.module.scss';
import CommentForm from "../CommentForm";
import CommentHeader from "../CommentHeader";
import CommentList from "./CommentList";
import { CommentType } from '@/types/CommunityPropsTypes';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface commentsProps {
    postId: number;
    commentList: CommentType[];
    onCommentSubmit?: () => void;
    onCommentDelete?: (commentId: number) => void;
}

export default function WideComments({ postId, commentList, onCommentSubmit, onCommentDelete } : commentsProps) {
    const memberId = useSelector((state: RootState) => state.auth.memberId);

    return (
        <div className={styles.wideComments}>
            <div className={styles.commentBlock}>
                <CommentHeader commentCount={commentList.length}/>
                <CommentList commentList={commentList} loggedInMemberId={memberId} onCommentDelete={onCommentDelete} />
                <CommentForm postId={postId} onCommentSubmit={onCommentSubmit}/>
            </div>
        </div>
    );
}