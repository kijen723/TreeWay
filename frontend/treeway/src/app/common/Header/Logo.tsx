import { useRouter } from 'next/navigation';
import styles from './HeaderNav.module.scss';

export default function Logo() {
  const router = useRouter();
  return (
    <div
      className={styles.logoContainer}
      onClick={() => {
        router.push('/main');
      }}
    >
      <div className={styles.logoImage}>
        <img src='/image/TREEWAY_logo.png' alt='TREEWAY Logo' />
      </div>
    </div>
  );
}
