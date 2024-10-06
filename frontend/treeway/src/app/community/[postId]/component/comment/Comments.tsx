'use client';

import { useState } from 'react';
import styles from '@/app/community/[postId]/page.module.scss';
import CommentHeader from './CommentHeader';
import CommentForm from './CommentForm';

interface Comment {
    id: number;
    name: string;
    content: string;
}

interface commentsProps {
    postId: number;
    commentList: Comment[];
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onCommentSubmit?: () => void;
}

export default function Comments({ postId, commentList, onClick, onCommentSubmit } : commentsProps) {
    // 댓글 입력창 클릭 이벤트 막기
    const blockClickEvent = (e : React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); 
    }

    return (
        <div className={styles.comments} onClick={onClick}>
            <div className={styles.commentBlock}>
                <CommentHeader commentCount={commentList.length}/>
                <CommentForm postId={postId} onClick={blockClickEvent} onCommentSubmit={onCommentSubmit}/>
            </div>
        </div>
    );
}
