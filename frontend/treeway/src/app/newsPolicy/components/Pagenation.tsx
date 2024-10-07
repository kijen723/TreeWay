import { useState } from 'react';
import styles from '../page.module.scss';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface PagenationProps {
    postCnt: number;
    itemsPerPage: number;
    onPageChange: (pageNumber: number) => void;
}

export default function Pagenation({ postCnt, itemsPerPage, onPageChange }: PagenationProps) {
    const totalPages = Math.ceil(postCnt / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesPerBlock = 5;

    const getStartPage = () => Math.floor((currentPage - 1) / pagesPerBlock) * pagesPerBlock + 1;
    const getEndPage = () => Math.min(getStartPage() + pagesPerBlock - 1, totalPages);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1); 
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1); 
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber); 
    };

    return (
        <div className={styles.pageBlock}>
            <div className={styles.arrowWrapper} onClick={handlePrevious}>
                <FaArrowUp className={styles.arrowIcon} />
            </div>
            <div className={styles.numberList}>
                {[...Array(getEndPage() - getStartPage() + 1)].map((_, index) => {
                    const pageNum = getStartPage() + index;
                    return (
                        <div
                            key={pageNum}
                            className={`${styles.number} ${currentPage === pageNum ? styles.highlight : ''}`}
                            onClick={() => handlePageClick(pageNum)}
                        >
                            {pageNum}
                        </div>
                    );
                })}
            </div>
            <div className={styles.arrowWrapper} onClick={handleNext}>
                <FaArrowDown className={styles.arrowIcon} />
            </div>
        </div>
    );
}
