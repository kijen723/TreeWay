'use client'

import styles from '@/app/community/[postId]/page.module.scss'
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/community');
    }

    return (
        <div>
            <IoArrowBackSharp className={styles.backButton} onClick={handleBackClick}/>
        </div>
    );
}