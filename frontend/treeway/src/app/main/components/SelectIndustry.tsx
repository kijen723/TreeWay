'use client';
import { useEffect, useState } from 'react';
import locations from '@/app/common/locations';
import styles from './SelectIndustry.module.scss';
import AnalyzeBox from './AnalyzeBox';
import { useDispatch } from 'react-redux';
import { changeDumData } from '@/redux/slice/dumdataSlice';
import { useRecommandIndustry } from '@/hooks/useRecommand';
import { FadeLoader } from 'react-spinners';

export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState<number>(0);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [selectedMainLocation, setSelectedMainLocation] = useState('전국'); // 대지역 디폴트값
  const [detailData, setDetailData] = useState<any>('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
  const [randomDetailData, setRandomDetailData] = useState<any>('');
  const [topProperties, setTopProperties] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const RecomandIndustry = useRecommandIndustry({
    onSuccess: async (data) => {
      setDetailData(data);
    },
    onError: () => {},
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
  // "전국"을 포함한 새로운 allLocations 생성
  const allLocations = [
    { label: '전국', value: 0, districts: [] },
    ...locations,
  ];
  const [regionCode, setRegionCode] = useState<number>(
    allLocations.find((location) => location.label === '전국')?.value || 0
  ); // 시군구 코드

  const handleMainLocationChange = (mainLocation: string) => {
    setRegionCode(
      allLocations.find((location) => location.label === mainLocation)?.value ||
        0
    );
    setSelectedMainLocation(mainLocation);
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  const explanation =
    '현재 시장의 트렌드와 지역 수요를 기반으로 평가되었습니다.';

  const handleSubmit = async () => {
    let valid = true;
    // budget : 가능 예산
    if (budget !== '' && isNaN(Number(budget))) {
      if (!budget) {
        setShowBudgetError(true);
        setShowInvalidBudgetError(false);
      } else {
        setShowInvalidBudgetError(true);
        setShowBudgetError(false);
      }
      valid = false;
    } else if (budget !== '' && Number(budget) >= 100000) {
      setShowBudgetError(true);
      setShowInvalidBudgetError(false);
      valid = false;
    } else {
      setShowBudgetError(false);
      setShowInvalidBudgetError(false);
    }

    if (valid) {
      // 종합 추천 결과 처리 로직
      setLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);

        await RecomandIndustry.mutateAsync({
          businessHours,
          regionCode,
          budget: budget ? Number(budget) * 10000 : 0, // 빈 문자열인 경우 0으로 처리
        });
      } catch (error) {
        setLoading(false);
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
            <label htmlFor='main-Location'>시도 선택</label>
          </div>
          {/* 시도 리스트 */}
          <div className={styles.selectBox}>
            <div className={styles.selectText}>
              {allLocations.map((location, index) => (
                <li
                  className={`${
                    selectedMainLocation === location.label
                      ? styles.selected
                      : ''
                  }`}
                  key={index}
                  onClick={() => handleMainLocationChange(location.label)}
                >
                  {location.label}
                </li>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.textSub}>
              <label htmlFor='budget'>예산</label>
            </div>
            <input
              className={styles.budget}
              id='budget'
              type='text'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder='미입력시 무관'
            />
            <span className={styles.budgetLabel}>만원 </span>
          </div>
          {showInvalidBudgetError && (
            <p className={styles.failedText}>숫자를 입력해야 합니다.</p>
          )}

          {showBudgetError && (
            <p className={styles.failedText}>
              예산 10억 이상의 추천 데이터가 없습니다.
            </p>
          )}

          <button className={styles.submitButton} onClick={handleSubmit}>
            업종 추천 받기
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
