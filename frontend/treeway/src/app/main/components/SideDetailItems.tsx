"use client"

import styles from './SideDetailItems.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SideDetailItem from './SideDetailItem';

export default function SideDetailItems(){
    const dumdata = useSelector((state :RootState) => state.dumdata.value);
    return(
        <div className={styles.items}>
            {dumdata && dumdata.map((value, index)=>{
                return(
                    <SideDetailItem data={value}></SideDetailItem>
                )
            })}
        </div>
    )
}