'use client'

import styles from '@/app/community/[postId]/page.module.scss'
import { FaPen, FaTrash } from "react-icons/fa";

export default function EditDeleteBtn() {
    const handleEditClick = () => {
        console.log("EDIT")
    }

    const handleDeleteClick = () => {
        console.log("DELETE")
    }


    return (
        <div className={styles.editDeleteBtn}>
            <p className={styles.edit} onClick={handleEditClick}><FaPen /> EDIT</p>
            <p className={styles.delete} onClick={handleDeleteClick}><FaTrash /> DELETE</p>
        </div>
    );
}