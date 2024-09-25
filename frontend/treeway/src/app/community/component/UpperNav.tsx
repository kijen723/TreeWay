import styles from '../page.module.scss'
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';

export default function UpperNav() {
    return (
        <div className={styles.upperNav}>
            <div className={styles.rightBlock}>
                <SortBox />
                <SearchBtn />
            </div>
        </div>
    );
}