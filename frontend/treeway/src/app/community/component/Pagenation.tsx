import styles from '../page.module.scss'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface PagenationProps {
    postCnt: number;
}

export default function Pagenation({ postCnt } : PagenationProps) {
    return (
        <div className={styles.pageBlock}>
            <div className={styles.arrowWrapper}>
                <FaArrowUp className={styles.arrowIcon} />
            </div>
            <div className={styles.numberList}>
                <div className={`${styles.number} ${styles.highlight}`}>01</div>
                <div className={styles.number}>02</div>
                <div className={styles.number}>03</div>
                <div className={styles.number}>04</div>
                <div className={styles.number}>05</div>
            </div>
            <div className={styles.arrowWrapper}>
                <FaArrowDown className={styles.arrowIcon} />
            </div>
        </div>
    );
} 