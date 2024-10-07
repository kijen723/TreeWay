import styles from '../page.module.scss';
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';

interface UpperNavProps {
  isNews: boolean;
  toggleNewsStatus: () => void;
  setSortCriteria: (criteria: string) => void;
}

export default function UpperNav({ isNews, toggleNewsStatus, setSortCriteria }: UpperNavProps) {
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
        <SortBox setSortCriteria={setSortCriteria} />
        <SearchBtn />
      </div>
    </div>
  );
}
