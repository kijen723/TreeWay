'use client'

import styles from "../page.module.scss";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBtn() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearchBar = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className={styles.searchContainer}>
            <MdSearch 
                onClick={toggleSearchBar} 
                className={styles.searchIcon} 
            />
            
            <input 
                type="text" 
                placeholder="Search..." 
                className={`${styles.searchInput} ${isOpen ? styles.open : ""}`} 
            />
        </div>
    );
}
