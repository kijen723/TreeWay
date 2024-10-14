'use client';

import { useState } from 'react';
import HeaderText from './components/HeaderText';
import InputForm from './components/InputForm';
import styles from './page.module.scss';
import { FadeLoader } from 'react-spinners';

export default function CreateStoreImage() {
  const [imageUrl, setImageUrl] = useState(''); // 이미지 URL 상태 관리
  const [isFormVisible, setIsFormVisible] = useState(true); // 폼이 보이는지 여부
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  // 분석 버튼을 클릭했을 때 폼을 숨기고 이미지를 보여줌
  const handleAnalyze = (url: string) => {
    setImageUrl(url);
    setIsFormVisible(false); // 이미지가 생성되면 폼을 숨김
  };

  // 다시하기 버튼을 클릭했을 때 폼을 다시 보여줌
  const handleReset = () => {
    setImageUrl(''); // 이미지 URL을 초기화
    setIsFormVisible(true); // 폼을 다시 보여줌
    setErrorMessage(''); // 에러 메시지 초기화
  };

  return (
    <>
      <div className={styles.block}>
        <div className={styles.formBlock}>
          {isLoading ? (
            <div className={styles.spinnerWrapper}>
              <FadeLoader color='#36d7b7' />
            </div>
          ) : isFormVisible ? (
            <>
              <HeaderText />
              <InputForm
                setImageUrl={handleAnalyze}
                setErrorMessage={setErrorMessage}
                setIsLoading={setIsLoading} // isLoading 상태 전달
              />
            </>
          ) : (
            <div className={styles.imageContainer}>
              <img src={imageUrl} alt='Generated Store Image' />
            </div>
          )}
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
        </div>
        {!isFormVisible && (
          <div className={styles.resetButtonArea}>
            <button onClick={handleReset} className={styles.resetButton}>
              다시하기
            </button>
          </div>
        )}
      </div>
    </>
  );
}
