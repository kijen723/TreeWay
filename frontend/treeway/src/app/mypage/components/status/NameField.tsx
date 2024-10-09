'use client'

import styles from '@/app/mypage/page.module.scss';
import { FaPen } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface NameFieldProps {
    handleModalOpen: () => void;
}

export default function NameField({ handleModalOpen }: NameFieldProps) {
    const userName = useSelector((state :RootState) => state.auth.username);

    return (
        <div className={styles.nameField}>
            <h2>{userName} 님</h2>
            <FaPen onClick={handleModalOpen} style={{ cursor: "pointer" }} />
        </div>
    );
}
