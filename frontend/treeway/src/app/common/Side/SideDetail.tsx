"use client"

import { useState } from 'react';
import styles from './SideDetail.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function SideDetail({items} : {items : JSX.Element}){
    const sideState = useSelector((state :RootState) => state.sidecontrol.value);
    return(
        <nav className={styles.navbar} style={!sideState ? {height : "7vh"} : {}}>
            <span className={styles.title}>올라온 매물</span>
            {sideState ? items : <></>}
        </nav>
    )
}