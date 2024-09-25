'use client'

import styles from '@/app/mypage/page.module.scss';
import { FaPen } from "react-icons/fa";

export default function NameField() {
    const userName = "정다운";

    const handlePenClick = () => {
        console.log("update profile")
    };
    
    return (
        <div className={styles.nameField}>
            <h2>{userName} 님</h2>
            <FaPen onClick={handlePenClick} style={{ cursor: "pointer" }}/>
        </div>
    );
}