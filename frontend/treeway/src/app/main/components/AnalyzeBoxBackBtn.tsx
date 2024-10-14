'use client';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import styles from './AnalyzeBoxBackBtn.module.scss';

interface AnalyzeBoxBackBtnProps {
  onClose: () => void;
}

export default function AnalyzeBoxBackBtn({ onClose }: AnalyzeBoxBackBtnProps) {
  return (
    <div className={styles.backBox}>
      <IoMdCloseCircleOutline className={styles.backBtn} onClick={onClose} />
    </div>
  );
}
