'use client';

import Button from '@/app/common/Button';
import styles from '@/app/community/[postId]/page.module.scss';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ClickEventProps {
    postId: number;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onCommentSubmit?: () => void; // 댓글 제출 후 콜백 추가
}

export default function CommentForm({ postId, onClick, onCommentSubmit }: ClickEventProps) {
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false); 

    const memberId = useSelector((state :RootState) => state.auth.memberId);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async () => {
        if (!comment) return; 

        setLoading(true); 

        try {
            const response = await fetch('https://j11b107.p.ssafy.io/api/article/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "memberId": memberId,
                    "articleId": postId,
                    "content": comment
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            setComment(''); 

            if (onCommentSubmit) {
                onCommentSubmit();
            }

        } catch (error) {
            console.error('Error submitting comment:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className={styles.commentForm} onClick={onClick}>
            <textarea
                className={styles.commentInput}
                value={comment}
                onChange={handleInputChange}
                placeholder="댓글을 입력해주세요"
                disabled={loading} // 로딩 중일 때 입력 금지
            />
            <Button
                content={loading ? '등록 중...' : '댓글달기'}
                size="medium"
                colorType="blue"
                onClick={handleCommentSubmit}
                type="submit"
                disabled={loading} // 로딩 중일 때 버튼 비활성화
            />
        </div>
    );
}
