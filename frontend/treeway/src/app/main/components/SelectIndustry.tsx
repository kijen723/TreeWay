'use client';
import { useState } from 'react';
import locations from '@/app/common/locations';

export default function SelectIndustry() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);

  const [selectedMainLocation, setSelectedMainLocation] = useState('전국'); // 대지역 디폴트값

  // 시,.도 변경 시 시군ㄷ구 리스트 업데이트
  const handleMainLocationChange = (mainLocation: string) => {
    setSelectedMainLocation(mainLocation);
  };

  const handleSubmit = () => {
    let valid = true;

    // budget : 가능 예산
    if (budget !== '무관' && (!budget || isNaN(Number(budget)))) {
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
      console.log('선택한 영업시간:', businessHours);
      console.log('입력한 예산:', budget);
      // 종합 추천 결과 처리 로직
    }
  };
  const allLocations = { 전국: [], ...locations };

  return (
    <div>
      {/* 시도 리스트 */}
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
        </div>
      </div>
      <label htmlFor='business-hours'>가능 영업시간: </label>
      <select
        id='business-hours'
        value={businessHours}
        onChange={(e) => setBusinessHours(e.target.value)}
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
          placeholder='무관 시 무관 입력'
        />
        만원
      </div>
      {/* 예산 미입력시 에러 메시지 */}
      {showBudgetError && (
        <p style={{ color: 'red' }}>예산을 입력해야 합니다.</p>
      )}
      {/* 예산이 숫자가 아닐 때 에러 메시지 */}
      {showInvalidBudgetError && (
        <p style={{ color: 'red' }}>숫자를 입력해야 합니다.</p>
      )}
      <button onClick={handleSubmit}>업종 추천 받기</button>
    </div>
  );
}
