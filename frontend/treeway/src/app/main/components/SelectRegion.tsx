'use client';
import { useState } from 'react';
import categories from '@/app/common/categories';

interface allCategories {
  [key: string]: string[];
}

export default function SelectRegion() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);

  const allCategory: allCategories = { 전체: ['전체'], ...categories };
  const [selectedMainCategory, setSelectedMainCategory] = useState('전체'); // 대업종 디폴트값
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    allCategory['전체'][0]
  ); // 소업종 디폴트값

  // 대업종 변경 시 소업종 리스트 업데이트
  const handleMainCategoryChange = (mainCategory: string) => {
    setSelectedMainCategory(mainCategory);
    setSelectedSubCategory(allCategory[mainCategory][0]); // 대업종 변경 시 첫 번째 소업종으로 초기화
  };

  // 소업종 변경
  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
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
      console.log('선택 업종:', selectedSubCategory);
      console.log('선택한 영업시간:', businessHours);
      console.log('입력한 예산:', budget);
      // 종합 추천 결과 처리 로직
    }
  };

  return (
    <div>
      <div>
        {/* 대업종 리스트 */}
        <div>
          <label htmlFor='main-category'>대업종 선택</label>
          <div
            style={{
              maxHeight: '100px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '5px',
            }}
          >
            <ul>
              {Object.keys(allCategory).map((mainCategory, index) => (
                <ul
                  key={index}
                  onClick={() => handleMainCategoryChange(mainCategory)}
                  style={{
                    cursor: 'pointer',
                    fontWeight:
                      selectedMainCategory === mainCategory ? 'bold' : 'normal',
                  }}
                >
                  {mainCategory}
                </ul>
              ))}
            </ul>
          </div>
        </div>

        {/* 소업종 리스트 */}
        <div>
          <label htmlFor='sub-category'>소업종 선택</label>
          <div
            style={{
              maxHeight: '100px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '5px',
            }}
          >
            <ul>
              {allCategory[selectedMainCategory].map((subCategory, index) => (
                <ul
                  key={index}
                  onClick={() => handleSubCategoryChange(subCategory)}
                  style={{
                    cursor: 'pointer',
                    fontWeight:
                      selectedSubCategory === subCategory ? 'bold' : 'normal',
                  }}
                >
                  {subCategory}
                </ul>
              ))}
            </ul>
          </div>
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
