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

interface IndustryAnalysisProps {
  filteredAnalysis: {
    dataType: string;
    analysisData: string;
    industryDetailName: string;
    regionName: string;
  }[];
}

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

  const { data, isLoading, isError } = useAnalyzeDetailResullt(
    regionId,
    industryDetailId
  );

  useEffect(() => {
    // 처음 렌더링 시 선택된 카테고리를 리덕스에서 가져온 값으로 설정
    if (selectedCategory === '') {
      setSelectedCategory('업종분석'); // 기본값으로 '업종분석'을 설정
    }
  }, [selectedCategory]);

  if (isLoading) {
    // 데이터가 로드되는 동안 로딩 메시지나 스피너를 표시
    return <div>로딩 중...</div>;
  }

  if (isError || !data) {
    // 데이터 로드 중 오류가 발생했을 때 처리
    return <div>데이터를 가져오는 중 오류가 발생했습니다.</div>;
  }

  const filteredIndustryAnalysis =
    data?.industryAnalysis?.filter(
      (item: { dataType: string }) =>
        item.dataType === '111' || item.dataType === '112'
    ) || [];

  const filteredTimeIndustryAnalysis =
    data?.industryAnalysis?.filter(
      (item: { dataType: string }) =>
        item.dataType === '1' ||
        item.dataType === '2' ||
        item.dataType === '3' ||
        item.dataType === '4' ||
        item.dataType === '5' ||
        item.dataType === '6'
    ) || [];

  const filteredPayIndustryAnalysis = data?.industryAnalysis?.filter(
    (item: {
      dataType: string;
      regionId: number;
      industryDetailId: number;
    }) => {
      let majorIndustryId;
      if (industryDetailId >= 100) {
        // 3자리 이상인 경우 (100 이상)
        majorIndustryId = Math.floor(industryDetailId / 100);
      } else if (industryDetailId >= 10) {
        // 2자리인 경우 (10 이상 100 미만)
        majorIndustryId = Math.floor(industryDetailId / 10);
      }
      return (
        item.dataType === '222' &&
        (item.regionId === regionId || item.regionId === 1) &&
        item.industryDetailId === majorIndustryId
      );
    }
  );

  console.log(filteredPayIndustryAnalysis);
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
              <IndustryAnalyze industryAnalysis={filteredIndustryAnalysis} />
            </div>
          )}
          {selectedCategory === '매출분석' && (
            <div>
              <SalesAnalyze industryAnalysis={filteredPayIndustryAnalysis} />
              <TimeAnalyze industryAnalysis={filteredTimeIndustryAnalysis} />
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
