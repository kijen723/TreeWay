'use client';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import styles from './DetailBackBtn.module.scss';
import { useRouter } from 'next/navigation';

interface DetailBackBtnProps {
  onClose: () => void;
}

export default function DetailBackBtn({ onClose }: DetailBackBtnProps) {
  return (
    <div className={styles.backBox}>
      <IoMdCloseCircleOutline className={styles.backBtn} onClick={onClose} />
    </div>
  );
}
