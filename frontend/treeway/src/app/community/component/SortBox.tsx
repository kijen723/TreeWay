import styles from '../page.module.scss';

interface SortBoxProps {
    setSortBy: (value: 'Latest' | 'ViewCount' | 'ScrapCount') => void;
}

export default function SortBox({ setSortBy }: SortBoxProps) {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as 'Latest' | 'ViewCount' | 'ScrapCount');
    };

    return (
        <div className={styles.sortDropdown}>
            <label htmlFor="sortBy" className={styles.label}>
                Sort by:
            </label>
            <select id="sortBy" name="sortBy" className={styles.dropdown} defaultValue="Latest" onChange={handleSortChange}>
                <option value="Latest">최신순</option>
                <option value="ViewCount">조회수순</option>
                <option value="ScrapCount">스크랩순</option>
            </select>
        </div>
    );
}
