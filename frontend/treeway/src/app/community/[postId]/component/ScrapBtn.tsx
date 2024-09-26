import { useState } from 'react';
import styles from '../page.module.scss';
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

export default function ScrapBtn() {
    const [isScraped, setIsScraped] = useState(false);

    const toggleScrap = () => {
        setIsScraped((prev) => !prev);
    };

    return (
        <div className={styles.scrapBtn} onClick={toggleScrap}>
            {isScraped ? 
            <IoBookmark className={styles.colorBookmark}/> : 
            <IoBookmarkOutline className={styles.bookmark}/>}
        </div>
    );
}