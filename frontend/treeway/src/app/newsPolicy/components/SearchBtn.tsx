import styles from "../page.module.scss";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBtnProps {
    setSearchQuery: (query: string) => void;
}

export default function SearchBtn({ setSearchQuery }: SearchBtnProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    const toggleSearchBar = () => {
        setIsOpen(!isOpen); 
    };

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchQuery(searchText);
    };

    return (
        <div className={styles.searchContainer}>
            <MdSearch 
                onClick={toggleSearchBar} 
                className={styles.searchIcon} 
            />
            {isOpen ? "" : <p className={styles.closeText}>제목 검색</p>}
            <div className={`${styles.searchOptions} ${isOpen ? styles.open : ""}`}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchText}
                    onChange={handleSearchTextChange}
                    className={`${styles.searchInput} ${isOpen ? styles.open : ""}`} 
                />
                <button onClick={handleSearchClick} className={styles.searchButton}>
                    검색
                </button>
            </div>
        </div>
    );
}
