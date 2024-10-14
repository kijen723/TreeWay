'use client'

import { useState } from 'react';
import styles from './SecondBox.module.scss';
import { motion } from 'framer-motion';
export default function SecondBox(){
    const [imgSrc, setImgSrc] = useState<string>('/image/first1.png');
    const height = document.documentElement.clientHeight;
    const handleScrollEvent = ()=>{
        const scrollY = window.scrollY;
        if(scrollY <= height * 9 / 2){
            setImgSrc('/image/first1.png')
        }else if(scrollY <= height * 11 / 2){
            setImgSrc('/image/cat.jpg')
        }else if(scrollY <= height * 13 / 2){
            setImgSrc('/image/TREEWAY_logo.png')
        }else{
            setImgSrc('/image/192.png')
        }
    }
    window.addEventListener('scroll', handleScrollEvent);
    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.info}>
                    <h1>첫번째 글</h1>
                </div>
                <div className={styles.info}>
                    <h1>두번째 글</h1>
                </div>
                <div className={styles.info}>
                    <h1>세번째 글</h1>
                </div>
                <div className={styles.info}>
                    <h1>네번째 글</h1>
                </div>
            </div>
            <div className={styles.right}>
                <motion.img 
                key={imgSrc}
                src={imgSrc}
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                exit = {{opacity : 0}}
                transition={{duration : 0.5}}
                />
            </div>
        </div>
    )
}