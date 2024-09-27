import styles from '@/app/community/[postId]/page.module.scss'
import CommentForm from "../CommentForm";
import CommentHeader from "../CommentHeader";
import CommentList from "./CommentList";

export default function WideComments() {
    return (
        <div className={styles.wideComments}>
            <div className={styles.commentBlock}>
                <CommentHeader />
                <CommentList />
                <CommentForm />
            </div>
        </div>
    );
}