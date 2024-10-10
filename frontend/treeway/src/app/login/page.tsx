'use client'

import styles from './page.module.scss';
import LoginBlock from './components/LoginBlock';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Login() {
    const searchParams = useSearchParams();
    const alertMessage = searchParams?.get('alert');

    useEffect(() => {
        if (alertMessage === 'loginRequired') {
            alert('로그인이 필요합니다.');
        }
    }, [alertMessage]);

    return (
        <div className={styles.mainContent}>
            <LoginBlock />
        </div>
    );
}