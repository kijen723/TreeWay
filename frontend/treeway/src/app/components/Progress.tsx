'use client'

import { useEffect, useState } from 'react';
import styles from './Progress.module.scss';

export default function Progress(){
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / height) * 100;
        setScrollPosition(scrollPercent);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return(
        <div className={styles.progress} style={{width : `${scrollPosition}%`}}>

        </div>
    )
}