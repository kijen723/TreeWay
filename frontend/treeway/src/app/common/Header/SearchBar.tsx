import styles from './HeaderNav.module.scss';
import { MdSearch } from 'react-icons/md';

export default function SearchBar() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoText}>
        <p>TREEWAY</p>
      </div>
    </div>
  );
}
