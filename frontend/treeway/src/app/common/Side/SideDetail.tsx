'use client';

import { useState } from 'react';
import styles from './SideDetail.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { usePathname } from 'next/navigation';

export default function SideDetail({ items }: { items: JSX.Element }) {
  const pathname = usePathname();
  const sideState = useSelector((state: RootState) => state.sidecontrol.value);

  let text = '';
  switch (pathname) {
    case '/main':
      text = '올라온 매물';
      break;
    case '/main/rating':
      text = '종합추천';
      break;
    case '/main/industry':
      text = '업종추천';
      break;
    case '/main/region':
      text = '지역추천';
      break;
    default:
      break;
  }

  return (
    <nav className={styles.navbar} style={!sideState ? { height: '7vh' } : {}}>
      <span className={styles.title}>{text}</span>
      {sideState ? items : <></>}
    </nav>
  );
}
