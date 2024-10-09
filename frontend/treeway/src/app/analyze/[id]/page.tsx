'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import DetailBackBtn from '../components/DetailBackBtn';
import IndustryAnalyze from '../components/IndustryAnalyze';
import SalesAnalyze from '../components/SalesAnalyze';
import TimeAnalyze from '../components/TimeAnalyze';
import RegionAnalyze from '../components/RegionAnalyze';
import PopulationAnalyze from '../components/PopulationAnalyze';
import { useAnalyzeDetailResullt } from '@/hooks/useAnalyzeHistory';

const AnalyzePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [region, setRegion] = useState('');
  const [industryDetail, setIndustryDetail] = useState('');
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const scrollableDiv = document.querySelector(`.${styles.WhiteBox}`);
    if (scrollableDiv) {
      scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤 맨 위로 이동
    }
  };

  // const { data: data, isLoading: Loading } = useAnalyzeDetailResullt(
  //   regionId,
  //   industryDetailId
  // );

  useEffect(() => {
    // window.history.state에서 전달된 값을 받아옴
    const state = window.history.state;
    if (state) {
      setRegion(state.regionId);
      setIndustryDetail(state.industryDetailId);
      console.log(state);
    }
    setSelectedCategory('업종분석');
  }, [window.history.state]);

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
