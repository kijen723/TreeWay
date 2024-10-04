'use client'

import { useState } from 'react';
import styles from './page.module.scss';
import StatusBar from './components/status/StatusBar';
import ContentBlock from './components/content/ContentBlock';

export default function MyPage() {
    const [conType, setConType] = useState<string>('post');

    return (
        <div className={styles.background}>
            <StatusBar setConType={setConType} />
            <ContentBlock conType={conType} />
        </div>
    );
}