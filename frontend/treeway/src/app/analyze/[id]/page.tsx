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
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const AnalyzePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    const scrollableDiv = document.querySelector(`.${styles.WhiteBox}`);
    if (scrollableDiv) {
      scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤 맨 위로 이동
    }
  };

  const regionId = useSelector(
    (state: RootState) => state.analyzeDetailSlice.regionId
  );
  const industryDetailId = useSelector(
    (state: RootState) => state.analyzeDetailSlice.industryDetailId
  );

  const { data: data, isLoading: Loading } = useAnalyzeDetailResullt(
    regionId,
    industryDetailId
  );

  console.log(data);

  useEffect(() => {
    // 처음 렌더링 시 선택된 카테고리를 리덕스에서 가져온 값으로 설정
    if (selectedCategory === '') {
      setSelectedCategory('업종분석'); // 기본값으로 '업종분석'을 설정
    }
  }, [selectedCategory]);
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
              <PopulationAnalyze populationAnalsis={data.populationAnalysis} />
            </div>
          )}
          {selectedCategory === '지역현황' && (
            <div>
              <RegionAnalyze regionAnalysis={data.regionAnalysis} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyzePage;
