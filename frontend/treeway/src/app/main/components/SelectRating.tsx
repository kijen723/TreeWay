'use client';
import { useState } from 'react';

import categories from '@/app/common/categories';
import locations from '@/app/common/locations';

export default function SelectRating() {
  const [budget, setBudget] = useState('');
  const [businessHours, setBusinessHours] = useState('');
  const [showBudgetError, setShowBudgetError] = useState(false);
  const [showBusinessHoursError, setShowBusinessHoursError] = useState(false);
  const [showInvalidBudgetError, setShowInvalidBudgetError] = useState(false);

  const [selectedMainLocation, setSelectedMainLocation] =
    useState('서울특별시'); // 대지역 디폴트값
  const [selectedSubLocation, setSelectedSubLocation] = useState(
    locations['서울특별시'][0]
  ); // 지역 디폴트값

  // 시,.도 변경 시 시군ㄷ구 리스트 업데이트
  const handleMainLocationChange = (mainLocation: string) => {
    setSelectedMainLocation(mainLocation);
    setSelectedSubLocation(locations[mainLocation][0]); // 시.도 변경 시 첫 번째 소업종으로 초기화
  };

  // 시군구 변경
  const handleSubLocationChange = (subLocation: string) => {
    setSelectedSubLocation(subLocation);
  };

  const [selectedMainCategory, setSelectedMainCategory] = useState('외식업'); // 대업종 디폴트값
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    categories['외식업'][0]
  ); // 소업종 디폴트값

  // 대업종 변경 시 소업종 리스트 업데이트
  const handleMainCategoryChange = (mainCategory: string) => {
    setSelectedMainCategory(mainCategory);
    setSelectedSubCategory(categories[mainCategory][0]); // 대업종 변경 시 첫 번째 소업종으로 초기화
  };

  // 소업종 변경
  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
  };

  const handleSubmit = () => {
    let valid = true;

    // budget : 가능 예산
    if (!budget) {
      setShowBudgetError(true);
      setShowInvalidBudgetError(false);
      valid = false;
    } else if (isNaN(Number(budget))) {
      setShowInvalidBudgetError(true);
      setShowBudgetError(false);
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
      console.log('선택한 지역:', selectedSubLocation);
      console.log('선택한 소업종:', selectedSubCategory);
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
              {Object.keys(categories).map((mainCategory, index) => (
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
              {categories[selectedMainCategory].map((subCategory, index) => (
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
              {Object.keys(locations).map((mainLocation, index) => (
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

        {/* 시군구 리스트 */}
        <div>
          <label htmlFor='sub-location'>시군구 선택</label>
          <div
            style={{
              maxHeight: '100px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              padding: '5px',
            }}
          >
            <ul>
              {locations[selectedMainLocation].map((subLocation, index) => (
                <ul
                  key={index}
                  onClick={() => handleSubLocationChange(subLocation)}
                  style={{
                    cursor: 'pointer',
                    fontWeight:
                      selectedSubLocation === subLocation ? 'bold' : 'normal',
                  }}
                >
                  {subLocation}
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
          placeholder='예산 입력'
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
      <button onClick={handleSubmit}>종합 추천 받기</button>
    </div>
  );
}
