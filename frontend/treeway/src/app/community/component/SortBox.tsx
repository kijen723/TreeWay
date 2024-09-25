import styles from '../page.module.scss'

export default function SortBox() {
    return (
        <div className={styles.sortDropdown}>
            <label htmlFor="sortBy" className={styles.label}>
                Sort by:
            </label>
            <select id="sortBy" name="sortBy" className={styles.dropdown} defaultValue="Latest">
                <option value="Latest">최신순</option>
                <option value="ViewCount">조회수순</option>
                <option value="ScrapCount">스크랩순</option>
            </select>
        </div>
    );
}