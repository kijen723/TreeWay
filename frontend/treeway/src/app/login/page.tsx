'use client'

import styles from './page.module.scss';
import LoginBlock from './components/LoginBlock';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Login() {
    const searchParams = useSearchParams();
    const alertMessage = searchParams?.get('alert');

    useEffect(() => {
        if (alertMessage === 'loginRequired') {
            Swal.fire({
                title: '로그인이 필요합니다!',
                text: '로그인 후에 이용할 수 있는 기능입니다.',
                icon: 'warning',
                confirmButtonText: '확인',
            });
        }
    }, [alertMessage]);

    return (
        <div className={styles.mainContent}>
            <LoginBlock />
        </div>
    );
}