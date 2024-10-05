'use client';

import { useRouter } from 'next/navigation';
import styles from './SideList.module.scss';
import { MenuItemProps } from '@/types/CommonPropsTypes';

export default function MenuItem({ icon, label, index }: MenuItemProps) {
  const router = useRouter();
  return (
    <div
      className={styles.menuItem}
      onClick={() => {
        if (index === 0) {
          router.push('/main');
        } else if (index === 1) {
          router.push('/main/rating');
        } else if (index === 2) {
          router.push('/main/industry');
        } else if (index === 3) {
          router.push('/main/region');
        } else if (index === 4) {
          router.push('/trend');
        } else if (index === 5) {
        }
      }}
    >
      <div className={styles.icon}>{icon}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
