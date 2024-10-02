import styles from '../page.module.scss';
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';
import { useRouter } from 'next/navigation';

interface UpperNavProps {
  isNews: boolean;
  toggleNewsStatus: () => void;
}

export default function UpperNav({ isNews, toggleNewsStatus }: UpperNavProps) {
  const router = useRouter();

  return (
    <div className={styles.upperNav}>
      <div className={styles.leftBlock}>
        <button
          className={isNews ? styles.activeButton : styles.inactiveButton}
          onClick={() => !isNews && toggleNewsStatus()}
        >
          뉴스
        </button>
        <button
          className={!isNews ? styles.activeButton : styles.inactiveButton}
          onClick={() => isNews && toggleNewsStatus()}
        >
          정책
        </button>
      </div>
      <div className={styles.rightBlock}>
        <SortBox />
        <SearchBtn />
      </div>
    </div>
  );
}
