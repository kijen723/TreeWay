import styles from '@/app/community/[postId]/page.module.scss'
import CommentHeader from './CommentHeader';
import CommentForm from './CommentForm';

export default function Comments() {
    return (
        <div className={styles.comments}>
            <div className={styles.commentBlock}>
                <CommentHeader />
                <CommentForm />
            </div>
        </div>
    );
}