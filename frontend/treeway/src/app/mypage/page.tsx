'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import StatusBar from './components/status/StatusBar';
import ContentBlock from './components/content/ContentBlock';
import ProfileModal from './components/status/ProfileModal';

export default function MyPage() {
    const [conType, setConType] = useState<string>('post');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.background}>
            <StatusBar setConType={setConType} handleModalOpen={handleModalOpen} />
            <ContentBlock conType={conType} />
            {isModalOpen && <ProfileModal onClose={handleModalClose} />}
        </div>
    );
}
