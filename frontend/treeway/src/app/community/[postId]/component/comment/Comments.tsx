import styles from '@/app/community/[postId]/page.module.scss'
import CommentHeader from './CommentHeader';
import CommentForm from './CommentForm';

interface Comment {
    id: number;
    name: string;
    content: string;
}

interface commentsProps {
    commentList: Comment[];
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default function Comments({ commentList, onClick } : commentsProps) {
    // 댓글 입력창 클릭 이벤트 막기
    const blockClickEvent = (e : React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); 
    }

    return (
        <div className={styles.comments} onClick={onClick}>
            <div className={styles.commentBlock}>
                <CommentHeader commentCount={commentList.length}/>
                <CommentForm onClick={blockClickEvent}/>
            </div>
        </div>
    );
}