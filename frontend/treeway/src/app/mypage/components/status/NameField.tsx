'use client'

import styles from '@/app/mypage/page.module.scss';
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function NameField() {
    const userName = useSelector((state :RootState) => state.auth.username);

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