import { useState } from 'react';
import locations from '@/app/common/locations';
<<<<<<< HEAD

export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState('');
=======
import styles from './SelectIndustry.module.scss';
import AnalyzeBox from './AnalyzeBox';
export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState<number>(0);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);

  const [selectedMainLocation, setSelectedMainLocation] = useState('전국'); // 대지역 디폴트값
  const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가

  // "전국"을 포함한 새로운 allLocations 생성
  const allLocations = [
    { label: '전국', value: '1', districts: [] },
    ...locations,
  ];
  const [regionCode, setRegionCode] = useState(
    allLocations.find((location) => location.label === '전국')?.value || 1
  ); // 시군구 코드

  const handleMainLocationChange = (mainLocation: string) => {
    setRegionCode(
      allLocations.find((location) => location.label === mainLocation)?.value ||
        1
    );
    setSelectedMainLocation(mainLocation);
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 닫기
  };

  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ더미데이터ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const score = 85;
  const explanation =
    '이 점수는 시장의 트렌드와 지역 수요를 기반으로 평가되었습니다.';
  const propertyList = [
    {
      industry: '업종',
      name: '호식이두마리치킨',
      address: '대전 유성구 궁동 409-1',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
    {
      industry: '업종',
      name: '닉pc방',
      address: '대전 유성구 문화원로 77',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
    {
      industry: '업종',
      name: '꼬꼬레스토랑',
      address: '대전 유성구 문화원로 89',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
    {
      industry: '업종',
      name: '메롱',
      address: '대전 유성구 문화원로 89',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
    {
      industry: '업종',
      name: '바보',
      address: '대전 유성구 문화원로 89',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
    {
      industry: '업종',
      name: '멍청이',
      address: '대전 서구 갈마동 263-45',
      monthlySales: 7000000,
      monthlyEarnings: 1000000,
    },
  ];
  //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  const handleSubmit = () => {
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

      setShowModal(true);
    }
  };

  return (
    <div>
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
      <label htmlFor='business-hours'>가능 영업시간: </label>
      <select
        id='business-hours'
        value={businessHours}
        onChange={(e) => setBusinessHours(Number(e.target.value))}
      >
        <option value=''>--영업시간 선택--</option>
        <option value='0'>무관</option>
        <option value='1'>09시~18시</option>
        <option value='2'>18시~02시</option>
        <option value='3'>02시~09시</option>
      </select>
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
      {showModal && (
        <AnalyzeBox
          score={score}
          explanation={explanation}
          propertyList={propertyList}
          onClose={handleCloseModal}
        />
      )}
>>>>>>> 8e87981 (feat: 분석 페이지 개발 및 query 폴더 구조  생성)
    </div>
  );
}
