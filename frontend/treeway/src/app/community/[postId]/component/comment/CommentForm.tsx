import Button from '@/app/common/Button';
import styles from '@/app/community/[postId]/page.module.scss'
import { useState } from 'react';

export default function CommentForm() {
    const [ comment, setComment ] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value); 
    };

    const handleCommentSubmit = () => {
        console.log(comment);
    }

    return (
        <div className={styles.commentForm}>
            <textarea
                className={styles.commentInput}
                value={comment}
                onChange={handleInputChange}
                placeholder="댓글을 입력해주세요"
            />
            <Button
                content="댓글달기"
                size="medium"
                colorType="blue"
                onClick={handleCommentSubmit}
                type="submit"
            />
        </div>
    );
}