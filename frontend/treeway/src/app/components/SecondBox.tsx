'use client'

import styles from './SecondBox.module.scss';
import { motion } from 'framer-motion';
export default function SecondBox(){
    return(
        <div className={styles.main}>
            <motion.img 
            className={styles.img1} 
            src="/image/first1.png"
            initial = {{opacity : 0, translateY : "10px"}}
            whileInView={{opacity : 1, translateY : "-10px", transition : {
                delay : 0.2,
                duration : 0.5
            }}}
            />
            <motion.img 
            className={styles.img2} 
            src="/image/first1.png"
            initial = {{opacity : 0, translateY : "10px"}}
            whileInView={{opacity : 1, translateY : "-10px", transition : {
                delay : 0.5,
                duration : 0.5
            }}}/>
            <motion.img 
            className={styles.img3} 
            src="/image/first1.png"
            initial = {{opacity : 0, translateY : "10px"}}
            whileInView={{opacity : 1, translateY : "-10px",transition : {
                delay : 0.8,
                duration : 0.5,
            }}}
            
            />

        </div>
    )
}