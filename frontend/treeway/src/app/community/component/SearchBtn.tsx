import styles from "../page.module.scss";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("title");

    const toggleSearchBar = () => {
        setIsOpen(!isOpen); 
    };

    const handleCriteriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCriteria(e.target.value);
    };

    const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        console.log("검색어:", searchText, "검색 기준:", searchCriteria);
        // 여기에 검색 처리 로직 추가
    };

    return (
        <div className={styles.searchContainer}>
            <MdSearch 
                onClick={toggleSearchBar} 
                className={styles.searchIcon} 
            />
            {isOpen ? "" : <p className={styles.closeText}>제목, 작성자 검색</p>}
            <div className={`${styles.searchOptions} ${isOpen ? styles.open : ""}`}>
                <select 
                    className={styles.searchCriteria}
                    value={searchCriteria} 
                    onChange={handleCriteriaChange}
                >
                    <option value="title">제목</option>
                    <option value="memberName">작성자</option>
                </select>

                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchText}
                    onChange={handleSearchTextChange}
                    className={`${styles.searchInput} ${isOpen ? styles.open : ""}`} 
                />

                <button onClick={handleSearch} className={styles.searchButton}>
                    검색
                </button>
            </div>
        </div>
    );
}
