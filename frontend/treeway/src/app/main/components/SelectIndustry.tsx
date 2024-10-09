<<<<<<< HEAD
=======
'use client';
>>>>>>> c8ee142 (api 연결 및 종합,업종,지역추천 페이지 개발)
import { useEffect, useState } from 'react';
import locations from '@/app/common/locations';
<<<<<<< HEAD

export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState('');
=======
import styles from './SelectIndustry.module.scss';
import AnalyzeBox from './AnalyzeBox';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { changeDumData } from '@/redux/slice/dumdataSlice';
=======
import { useRecommandIndustry } from '@/hooks/useRecommand';
import { FadeLoader } from 'react-spinners';

>>>>>>> 454cf81 (feat:종합, 지역, 종합 api 연결)
export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState<number>(0);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);

  const [selectedMainLocation, setSelectedMainLocation] = useState('전국'); // 대지역 디폴트값
  const [detailData, setDetailData] = useState<any>('');
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
  const [randomDetailData, setRandomDetailData] = useState<any>('');
  const [topProperties, setTopProperties] = useState<any>('');
  const [loading, setLoading] = useState(false);

  const RecomandIndustry = useRecommandIndustry({
    onSuccess: async (data) => {
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

    // businessHours : 영업시간
    if (!businessHours) {
      setShowBusinessHoursError(true);
      valid = false;
    } else {
      setShowBusinessHoursError(false);
    }

    if (valid) {
      console.log('선택지역:', selectedMainLocation);
      console.log('선택지역코드:', regionCode);
      console.log('선택한 영업시간:', businessHours);
      console.log('입력한 예산:', budget ? Number(budget) : 0);
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
        console.error('Error:', error);
        setLoading(false);
      }
    }
  };

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(changeDumData([]));
  }, [])

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {/* {loading && <FadeLoader className={styles.loader} color='#36d7b7' />} */}
      <div className={styles.textSub}>
        <label htmlFor='main-Location'>시도 선택</label>
      </div>
>>>>>>> c8ee142 (api 연결 및 종합,업종,지역추천 페이지 개발)
      {/* 시도 리스트 */}
<<<<<<< HEAD
      <div>
        <label htmlFor='main-Location'>시도 선택</label>
        <div
          style={{
            maxHeight: '100px',
            overflowY: 'auto',
            border: '1px solid #ccc',
            padding: '5px',
          }}
        >
          <ul>
            {Object.keys(allLocations).map((mainLocation, index) => (
              <ul
                key={index}
                onClick={() => handleMainLocationChange(mainLocation)}
                style={{
                  cursor: 'pointer',
                  fontWeight:
                    selectedMainLocation === mainLocation ? 'bold' : 'normal',
                }}
              >
                {mainLocation}
              </ul>
            ))}
          </ul>
=======
      <div className={styles.selectBox}>
        <div className={styles.selectText}>
          {allLocations.map((location, index) => (
            <li
              className={`${
                selectedMainLocation === location.label ? styles.selected : ''
              }`}
              key={index}
              onClick={() => handleMainLocationChange(location.label)}
            >
              {location.label}
            </li>
          ))}
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
        </div>
      </div>
<<<<<<< HEAD
      <label htmlFor='business-hours'>가능 영업시간: </label>
      <select
=======
      {/* <div className={styles.textSub}>
=======
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
          {/* <div className={styles.textSub}>
>>>>>>> 193d899 (feat: 종합추천 페이지 api 연결)
        <label htmlFor='business-hours'>가능 영업시간 </label>
      </div> */}
          {/* <select
        className={styles.businessHours}
>>>>>>> c8ee142 (api 연결 및 종합,업종,지역추천 페이지 개발)
        id='business-hours'
        value={businessHours}
        onChange={(e) => setBusinessHours(Number(e.target.value))}
      >
        <option value=''>--영업시간 선택--</option>
        <option value='0'>무관</option>
        <option value='1'>09시~18시</option>
        <option value='2'>18시~02시</option>
        <option value='3'>02시~09시</option>
      </select> */}
<<<<<<< HEAD
      <div>
        {showBusinessHoursError && (
          <p style={{ color: 'red' }}>영업시간을 선택해야 합니다.</p>
        )}
        <label htmlFor='budget'>예산: </label>
        <input
          id='budget'
          type='text'
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder='미입력시 무관'
        />
        만원
      </div>
<<<<<<< HEAD
      {/* 예산 미입력시 에러 메시지 */}
      {showBudgetError && (
        <p style={{ color: 'red' }}>예산을 입력해야 합니다.</p>
      )}
=======
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
      {/* 예산이 숫자가 아닐 때 에러 메시지 */}
      {showInvalidBudgetError && (
        <p style={{ color: 'red' }}>숫자를 입력해야 합니다.</p>
      )}
<<<<<<< HEAD
      <button onClick={handleSubmit}>업종 추천 받기</button>
=======
      <button className={styles.submitButton} onClick={handleSubmit}>
        업종 추천 받기
      </button>
=======
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
            업종 추천 받기
          </button>
        </>
      )}
>>>>>>> 193d899 (feat: 종합추천 페이지 api 연결)
      {showModal && (
        <AnalyzeBox
          explanation={explanation}
          propertyList={topProperties}
          randomList={randomDetailData}
          onClose={handleCloseModal}
        />
      )}
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
    </div>
  );
}
