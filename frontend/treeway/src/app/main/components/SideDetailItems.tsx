"use client"

import { useRouter } from 'next/navigation';
import styles from './SideDetailItems.module.scss';

export default function SideDetailItems(){
    const router = useRouter();
    return(
        <div className={styles.items}>
            <div className={styles.item} onClick={()=>{
                router.push("/main/1")
            }}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
            <div className={styles.item}>매물정보</div>
        </div>
    )
}