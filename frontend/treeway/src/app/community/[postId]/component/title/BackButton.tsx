'use client'

import styles from '@/app/community/[postId]/page.module.scss'
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
    const handleBackClick = () => {
        window.history.back();
    }

    return (
        <div>
            <IoArrowBackSharp className={styles.backButton} onClick={handleBackClick}/>
        </div>
    );
}