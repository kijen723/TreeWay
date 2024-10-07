'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import DetailBackBtn from '../components/DetailBackBtn';
import IndustryAnalyze from '../components/IndustryAnalyze';
import SalesAnalyze from '../components/SalesAnalyze';
import TimeAnalyze from '../components/TimeAnalyze';
import RegionAnalyze from '../components/RegionAnalyze';
import PopulationAnalyze from '../components/PopulationAnalyze';

const AnalyzePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    setSelectedCategory('업종분석');
  }, []);

  return (
    <div className={styles.DetailBox}>
      <DetailBackBtn />
      <div className={styles.navContainer}>
        {['업종분석', '매출분석', '인구분석', '지역현황'].map(
          (category, index) => (
            <div
              key={index}
              className={`${styles.category} ${
                selectedCategory === category && styles.active
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          )
        )}
      </div>
      <hr className={styles.line} />

      <div className={styles.WhiteBox}>
        <div>
          {selectedCategory === '업종분석' && (
            <div>
              <IndustryAnalyze />
            </div>
          )}
          {selectedCategory === '매출분석' && (
            <div>
              <SalesAnalyze />
              <TimeAnalyze />
            </div>
          )}
          {selectedCategory === '인구분석' && (
            <div>
              <PopulationAnalyze />
            </div>
          )}
          {selectedCategory === '지역현황' && (
            <div>
              <RegionAnalyze />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;
