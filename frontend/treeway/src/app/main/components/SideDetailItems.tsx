'use client';
import { usePathname } from 'next/navigation';
import styles from './SideDetailItems.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SideDetailItem from './SideDetailItem';
import SelectRating from './SelectRating';
import SelectIndustry from './SelectIndustry';
import SelectRegion from './SelectRegion';
import { useState } from 'react';
// import { FadeLoader } from 'react-spinners';

export default function SideDetailItems() {
  const pathname = usePathname();
  const dumdata = useSelector((state: RootState) => state.dumdata.value);

  // const [isLoading, setIsLoading] = useState(false); // 스피너 상태 관리

  // const handleLoading = (loading: boolean) => {
  //   setIsLoading(loading);
  // };

  // 경로에 따라 컴포넌트 렌더링
  let Component = null;
  switch (pathname) {
    case '/main/rating':
      Component = <SelectRating />;
      break;
    case '/main/industry':
      Component = <SelectIndustry />;
      break;
    case '/main/region':
      Component = <SelectRegion />;
      break;
    default:
      Component = (
        <div className={styles.items}>
          {Array.isArray(dumdata) &&
            dumdata.length !== 0 &&
            dumdata.map((value, index) => {
              return <SideDetailItem key={index} data={value}></SideDetailItem>;
            })}
        </div>
      );
      break;
  }

  return (
    <div className={styles.items}>
      {/* {isLoading && ( // 스피너 표시
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
          }}
        >
          <FadeLoader color='#36d7b7' />
        </div>
      )} */}

      {Component}
    </div>
  );
}
