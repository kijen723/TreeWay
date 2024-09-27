import styles from '@/app/community/[postId]/page.module.scss'
import CommentHeader from './CommentHeader';
import CommentForm from './CommentForm';

interface commentsProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function Comments({onClick} : commentsProps) {
    return (
        <div className={styles.comments} onClick={onClick}>
            <div className={styles.commentBlock}>
                <CommentHeader />
                <CommentForm />
            </div>
        </div>
    );
}