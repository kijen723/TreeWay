'use client'

import styles from '@/app/community/[postId]/page.module.scss'
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from 'next/navigation';

interface EditDeleteBtnProps {
    postId: number;
}

export default function EditDeleteBtn({ postId }: EditDeleteBtnProps) {
    const router = useRouter();

    const handleEditClick = () => {
        router.push(`/community/${postId}/update`);
    };

    const handleDeleteClick = async () => {
        try {
            const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
            if (!confirmDelete) return;

            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete the article');
            }

            console.log('Article deleted successfully');

            router.push('/community');
        } catch (error) {
            console.error('Error deleting the article:', error);
        }
    };

    return (
        <div className={styles.editDeleteBtn}>
            <p className={styles.edit} onClick={handleEditClick}><FaPen /> EDIT</p>
            <p className={styles.delete} onClick={handleDeleteClick}><FaTrash /> DELETE</p>
        </div>
    );
}
