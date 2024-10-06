import styles from '@/app/community/[postId]/page.module.scss'
import CommentForm from "../CommentForm";
import CommentHeader from "../CommentHeader";
import CommentList from "./CommentList";
import { CommentType } from '@/types/CommunityPropsTypes';

interface commentsProps {
    postId: number;
    commentList: CommentType[];
}

export default function WideComments({ postId, commentList } : commentsProps) {
    return (
        <div className={styles.wideComments}>
            <div className={styles.commentBlock}>
                <CommentHeader commentCount={commentList.length}/>
                <CommentList commentList={commentList} />
                <CommentForm postId={postId}/>
            </div>
        </div>
    );
}