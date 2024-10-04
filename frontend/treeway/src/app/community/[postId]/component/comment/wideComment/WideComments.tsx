import styles from '@/app/community/[postId]/page.module.scss'
import CommentForm from "../CommentForm";
import CommentHeader from "../CommentHeader";
import CommentList from "./CommentList";

interface Comment {
    id: number;
    date: string;
    name: string;
    content: string;
}

interface commentsProps {
    commentList: Comment[];
}

export default function WideComments({ commentList } : commentsProps) {
    return (
        <div className={styles.wideComments}>
            <div className={styles.commentBlock}>
                <CommentHeader commentCount={commentList.length}/>
                <CommentList commentList={commentList} />
                <CommentForm />
            </div>
        </div>
    );
}