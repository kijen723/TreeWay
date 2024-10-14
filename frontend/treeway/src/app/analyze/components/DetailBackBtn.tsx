'use client';

import { IoMdCloseCircleOutline } from 'react-icons/io';
import styles from './DetailBackBtn.module.scss';
import { useParams, useRouter } from 'next/navigation';

export default function DetailBackBtn() {
  const router = useRouter();
  return (
    <div className={styles.backBox}>
      <IoMdCloseCircleOutline
        className={styles.backBtn}
        onClick={() => {
          router.push('/analyze');
        }}
      />
    </div>
  );
}
