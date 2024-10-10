'use client'

import styles from '@/app/community/[postId]/page.module.scss'
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";

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
            const result = await Swal.fire({
                title: '게시글을 삭제하시겠습니까?',
                text: "삭제 후에는 복구할 수 없습니다.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '삭제',
                cancelButtonText: '취소'
            });

            if (!result.isConfirmed) return;

            const response = await fetch(`https://j11b107.p.ssafy.io/api/article/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete the article');
            }

            await Swal.fire(
                '삭제 완료!',
                '게시글이 삭제되었습니다.',
                'success'
            );

            router.push('/community');
        } catch (error) {
            console.error('Error deleting the article:', error);
            Swal.fire(
                '삭제 실패!',
                '게시글 삭제 중 오류가 발생했습니다.',
                'error'
            );
        }
    };

    return (
        <div className={styles.editDeleteBtn}>
            <p className={styles.edit} onClick={handleEditClick}><FaPen /> EDIT</p>
            <p className={styles.delete} onClick={handleDeleteClick}><FaTrash /> DELETE</p>
        </div>
    );
}
