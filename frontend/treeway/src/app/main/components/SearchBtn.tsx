'use client'

import styles from './SearchBtn.module.scss';

export default function SearchBtn({getInfo} : {getInfo : () => void}){
    
    return(
        <div className={styles.main} onClick={()=>{
            getInfo();
        }}>
            검색하기
        </div>
    )
}