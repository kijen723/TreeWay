'use client';
import { useEffect, useState } from 'react';

import categories from '@/app/common/categories';
import locations from '@/app/common/locations'; // LocationItem 타입 기반
import styles from './SelectRating.module.scss';
import AnalyzeRatingBox from './AnalyzeRatingBox';
import { useDispatch, useSelector } from 'react-redux';
import { changeDumData } from '@/redux/slice/dumdataSlice';
import { useRecommandOverall } from '@/hooks/useRecommand';
import { FadeLoader } from 'react-spinners';
import { RootState } from '@/redux/store';

interface CategoryItem {
  label: string;
  value: number;
}

export default function SelectRating() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState(1);
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBudgetOverError, setShowBudgetOverError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);
  const [detailData, setDetailData] = useState<any>('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
  const [selectedMainLocation, setSelectedMainLocation] =
    useState('서울특별시');
  const [selectedDistrict, setSelectedDistrict] = useState(
    locations.find((location) => location.label === '서울특별시')
      ?.districts[0] || ''
  ); // 시군구 디폴트값
  const [regionCode, setRegionCode] = useState<number>(
    locations.find((location) => location.label === '서울특별시')?.value || 0
  );
  const [randomDetailData, setRandomDetailData] = useState<any>('');
  const [topProperties, setTopProperties] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const memberId = useSelector((state: RootState) => state.auth.memberId);

  const explanation =
    '현재 시장의 트렌드와 지역 수요를 기반으로 평가되었습니다.';
  const RecomandOverall = useRecommandOverall({
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

  // 시도 변경 시 시군구 리스트 업데이트
  const handleMainLocationChange = (mainLocation: string) => {
    setSelectedMainLocation(mainLocation);
    const mainLoc = locations.find(
      (location) => location.label === mainLocation
    );
    setRegionCode(mainLoc?.value || 0);
    if (mainLoc) {
      setSelectedDistrict(mainLoc.districts[0] || ''); // 시도 변경 시 첫 번째 시군구로 초기화
    }
  };

  // 시군구 변경
  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
  };

  const [selectedMainCategory, setSelectedMainCategory] = useState('외식업'); // 대업종 디폴트값
  const [selectedSubCategory, setSelectedSubCategory] = useState<CategoryItem>(
    categories['외식업'][0]
  ); // 소업종 디폴트값

  // 대업종 변경 시 소업종 리스트 업데이트
  const handleMainCategoryChange = (mainCategory: string) => {
    setSelectedMainCategory(mainCategory);
    setSelectedSubCategory(categories[mainCategory][0]); // 대업종 변경 시 첫 번째 소업종으로 초기화
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

    // 예산 검증
    if (!budget) {
      setShowBudgetError(true);
      setShowInvalidBudgetError(false);
      setShowBudgetOverError(false);
      valid = false;
    } else if (isNaN(Number(budget))) {
      setShowInvalidBudgetError(true);
      setShowBudgetOverError(false);
      setShowBudgetError(false);
      valid = false;
    } else if (budget !== '' && Number(budget) >= 100000) {
      setShowBudgetError(false);
      setShowBudgetOverError(true);
      setShowInvalidBudgetError(false);
      valid = false;
    } else {
      setShowBudgetError(false);
      setShowBudgetOverError(false);
      setShowInvalidBudgetError(false);
    }

    // 영업시간 검증
    if (!businessHours) {
      setShowBusinessHoursError(true);
      valid = false;
    } else {
      setShowBusinessHoursError(false);
    }

    if (valid) {
      console.log('시간: ', businessHours);
      console.log('선택한 시도:', selectedMainLocation);
      console.log('선택한 시군구:', selectedDistrict);
      console.log('시 코드: ', regionCode);
      console.log('선택한 소업종:', selectedSubCategory.label);
      console.log('선택한 소업종 코드:', selectedSubCategory.value);
      console.log('선택한 영업시간:', businessHours);
      console.log('입력한 예산:', budget);
      // 종합 추천 결과 처리 로직\

      setLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        setLoading(false);
        // 비동기 호출 대기
        await RecomandOverall.mutateAsync({
          memberId,
          businessHours,
          regionCode,
          budget: budget ? Number(budget) * 10000 : 0, // 빈 문자열인 경우 0으로 처리
          industryDetailId: selectedSubCategory.value,
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeDumData([]));
  }, []);

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
                {Object.keys(categories).map((mainCategory, index) => (
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
                {categories[selectedMainCategory].map((subCategory, index) => (
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

          <div className={styles.textSub}>
            <label htmlFor='main-location'>시도 선택</label>
            <label htmlFor='district'>시군구 선택</label>
          </div>
          <div className={styles.container}>
            {/* 시도 리스트 */}
            <div className={styles.selectBox}>
              <div className={styles.selectText}>
                {locations.map((mainLocation, index) => (
                  <li
                    className={`${
                      selectedMainLocation === mainLocation.label
                        ? styles.selected
                        : ''
                    }`}
                    key={index}
                    onClick={() => handleMainLocationChange(mainLocation.label)}
                  >
                    {mainLocation.label}
                  </li>
                ))}
              </div>
            </div>

            {/* 시군구 리스트 */}
            <div className={styles.selectBox}>
              <div className={styles.selectText}>
                {locations
                  .find((location) => location.label === selectedMainLocation)
                  ?.districts.map((district, index) => (
                    <li
                      className={`${
                        selectedDistrict === district ? styles.selected : ''
                      }`}
                      key={index}
                      onClick={() => handleDistrictChange(district)}
                    >
                      {district}
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
        <option value=''>--영업시간 선택--</option>
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
              placeholder='예산 입력'
            />
            <span className={styles.budgetLabel}>만원 </span>
          </div>
          {/* 예산 미입력시 에러 메시지 */}
          {showBudgetError && (
            <p className={styles.failedText}>예산을 입력해야 합니다.</p>
          )}
          {/* 예산이 숫자가 아닐 때 에러 메시지 */}
          {showInvalidBudgetError && (
            <p className={styles.failedText}>숫자를 입력해야 합니다.</p>
          )}
          {showBudgetOverError && (
            <p className={styles.failedText}>
              예산 10억 이상의 추천 데이터가 없습니다.
            </p>
          )}
          <button className={styles.submitButton} onClick={handleSubmit}>
            종합 추천 받기
          </button>
        </>
      )}

      {showModal && (
        <AnalyzeRatingBox
          explanation={explanation}
          propertyList={topProperties}
          randomList={randomDetailData}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
