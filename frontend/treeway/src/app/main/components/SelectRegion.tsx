'use client';
import { useEffect, useState } from 'react';
import categories from '@/app/common/categories';
import styles from './SelectRating.module.scss';
import { useRecommandRegion } from '@/hooks/useRecommand';
import AnalyzeBox from './AnalyzeRegionBox';
import { useDispatch } from 'react-redux';
import { changeDumData } from '@/redux/slice/dumdataSlice';
import { FadeLoader } from 'react-spinners';

interface CategoryItem {
  label: string;
  value: number;
}

interface AllCategories {
  [key: string]: CategoryItem[];
}

export default function SelectRegion() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState<number>(0);
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);
  const [detailData, setDetailData] = useState<any>('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
  const [randomDetailData, setRandomDetailData] = useState<any>('');
  const [topProperties, setTopProperties] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const RecomandRegion = useRecommandRegion({
    onSuccess: (data) => {
      setDetailData(data);
      console.log('성공적');
    },
    onError: () => {
      console.error('Error:');
    },
  });
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  useEffect(() => {
    if (detailData !== '') {
      const randomData = detailData.sort(() => Math.random() - 0.5).slice(0, 4);
      const topPropertiesData = detailData
        .sort(
          (a: { ratingScore: number }, b: { ratingScore: number }) =>
            b.ratingScore - a.ratingScore
        )
        .slice(0, 3);

      setRandomDetailData(randomData);
      setTopProperties(topPropertiesData);
      setShowModal(true);
    }
  }, [detailData]); // detailData가 변경될 때마다 실행

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const allCategory: AllCategories = {
    전체: [{ label: '전체', value: 1 }],
    ...categories,
  };

  const [selectedMainCategory, setSelectedMainCategory] = useState('전체'); // 대업종 디폴트값
  const [selectedSubCategory, setSelectedSubCategory] = useState<CategoryItem>(
    allCategory['전체'][0]
  ); // 소업종 디폴트값

  // 대업종 변경 시 소업종 리스트 업데이트
  const handleMainCategoryChange = (mainCategory: string) => {
    setSelectedMainCategory(mainCategory);
    setSelectedSubCategory(allCategory[mainCategory][0]); // 대업종 변경 시 첫 번째 소업종으로 초기화
  };

  // 소업종 변경
  const handleSubCategoryChange = (subCategory: CategoryItem) => {
    setSelectedSubCategory(subCategory);
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  const handleSubmit = async () => {
    let valid = true;
    // budget : 가능 예산
    if (budget !== '' && isNaN(Number(budget))) {
      setShowInvalidBudgetError(true);
      setShowBudgetError(false);
      valid = false;
    } else if (budget !== '' && Number(budget) >= 100000) {
      setShowBudgetError(true);
      setShowInvalidBudgetError(false);
      valid = false;
    } else {
      setShowInvalidBudgetError(false);
      setShowBudgetError(false);
    }

    if (valid) {
      console.log('선택 업종 value:', selectedSubCategory.value); // value 출력
      console.log('선택한 영업시간:', businessHours);
      console.log('입력한 예산:', budget ? Number(budget) : 0); // 예산이 빈 문자열이면 null로 처리

      setLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        // 비동기 호출 대기
        console.log(selectedSubCategory.value);
        await RecomandRegion.mutateAsync({
          businessHours,
          selectedSubCategory: selectedSubCategory.value, // value를 전달
          budget: budget ? Number(budget) * 10000 : 0, // 빈 문자열인 경우 null로 처리
        });
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  const explanation =
    '이 점수는 시장의 트렌드와 지역 수요를 기반으로 평가되었습니다.';

  return (
    <div>
      {loading ? (
        <div className={styles.spinnerWrapper}>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <>
          <div className={styles.textSub}>
            <label htmlFor='main-category'>대업종 선택</label>
            <label htmlFor='sub-category'>소업종 선택</label>
          </div>
          <div className={styles.container}>
            {/* 대업종 리스트 */}
            <div className={styles.selectBox}>
              <div className={styles.selectText}>
                {Object.keys(allCategory).map((mainCategory, index) => (
                  <li
                    className={`${
                      selectedMainCategory === mainCategory
                        ? styles.selected
                        : ''
                    }`}
                    key={index}
                    onClick={() => handleMainCategoryChange(mainCategory)}
                  >
                    {mainCategory}
                  </li>
                ))}
              </div>
            </div>

            {/* 소업종 리스트 */}
            <div className={styles.selectBox}>
              <div className={styles.selectText}>
                {allCategory[selectedMainCategory].map((subCategory, index) => (
                  <li
                    className={`${
                      selectedSubCategory === subCategory ? styles.selected : ''
                    }`}
                    key={index}
                    onClick={() => handleSubCategoryChange(subCategory)}
                  >
                    {subCategory.label}
                  </li>
                ))}
              </div>
            </div>
          </div>
          {/* <div className={styles.textSub}>
                      <label htmlFor='business-hours'>가능 영업시간 </label>
                    </div>
                    <select
                      className={styles.businessHours}
                      id='business-hours'
                      value={businessHours}
                      onChange={(e) => setBusinessHours(Number(e.target.value))}
                    >
                      <option value='0'>무관</option>
                      <option value='1'>09시~18시</option>
                      <option value='2'>18시~02시</option>
                      <option value='3'>02시~09시</option>
                    </select> */}
          <div>
            <div className={styles.textSub}>
              <label htmlFor='budget'>예산</label>
            </div>
            <input
              className={styles.budget}
              type='text'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder='미입력시 무관'
            />
            <span className={styles.budgetLabel}>만원 </span>
          </div>

          {/* 예산이 숫자가 아닐 때 에러 메시지 */}
          {showInvalidBudgetError && (
            <p className={styles.failedText}>숫자를 입력해야 합니다.</p>
          )}
          {showBudgetError && (
            <p className={styles.failedText}>
              예산 10억 이상의 추천 데이터가 없습니다.
            </p>
          )}
          <button className={styles.submitButton} onClick={handleSubmit}>
            지역 추천 받기
          </button>
        </>
      )}

      {showModal && (
        <AnalyzeBox
          explanation={explanation}
          propertyList={topProperties}
          randomList={randomDetailData}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
