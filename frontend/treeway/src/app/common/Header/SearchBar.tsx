import styles from './HeaderNav.module.scss';
import { MdSearch } from 'react-icons/md';

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <MdSearch className={styles.icon}/>
            <input type="text" placeholder="검색어를 입력하세요." className={styles.input} />
        </div>
    );
}