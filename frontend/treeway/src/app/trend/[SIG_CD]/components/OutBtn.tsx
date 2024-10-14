'use client'

import { useRouter } from 'next/navigation';
import styles from './OutBtn.module.scss';

export default function BackBtn(){
    const router = useRouter();
    return(
        <>
            <div className={styles.OutBtn}>
                <img src="/image/backBtn.png" onClick={()=>{
                    router.push("/trend")
                }}/>
            </div>
        </>
    )
}