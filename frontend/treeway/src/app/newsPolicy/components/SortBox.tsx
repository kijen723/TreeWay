import styles from '../page.module.scss'

interface SortBoxProps {
    setSortCriteria: (criteria: string) => void;
}

export default function SortBox({ setSortCriteria }: SortBoxProps) {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortCriteria(e.target.value);
    };

    return (
        <div className={styles.sortDropdown}>
            <label htmlFor="sortBy" className={styles.label}>
                Sort by:
            </label>
            <select
                id="sortBy"
                name="sortBy"
                className={styles.dropdown}
                defaultValue="Latest"
                onChange={handleSortChange}
            >
                <option value="Latest">최신순</option>
                <option value="ScrapCount">스크랩순</option>
            </select>
        </div>
    );
}
