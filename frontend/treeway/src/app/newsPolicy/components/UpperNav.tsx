import Button from '@/app/common/Button';
import styles from '../page.module.scss';
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';
import Swal from 'sweetalert2';
import { regionOptions } from '@/../public/data/region';
import { useState } from 'react';
import Dropdown from '@/app/community/component/Dropdown';

interface UpperNavProps {
  isNews: boolean;
  toggleNewsStatus: () => void;
  setSortCriteria: (criteria: string) => void;
  setSelectedRegion: (regionId: number) => void;
}

export default function UpperNav({ isNews, toggleNewsStatus, setSortCriteria, setSelectedRegion }: UpperNavProps) {
  const [selectedRegion, setLocalSelectedRegion] = useState<number>(0);

  const handleSearch = () => {
    if (selectedRegion === 0) {
      Swal.fire({
        title: '선택이 필요합니다!',
        text: '지역을 선택해주세요.',
        icon: 'warning',
        confirmButtonText: '확인',
      });
      return;
    }

    setSelectedRegion(selectedRegion);
  };

  return (
    <div className={styles.upperNav}>
      <div className={styles.leftBlock}>
        <button
          className={isNews ? styles.activeButton : styles.inactiveButton}
          onClick={() => !isNews && toggleNewsStatus()}
        >
          뉴스
        </button>
        <button
          className={!isNews ? styles.activeButton : styles.inactiveButton}
          onClick={() => isNews && toggleNewsStatus()}
        >
          정책
        </button>
      </div>
      <div className={styles.centerBlock}>
        <Dropdown
          label="지역"
          value={selectedRegion}
          onChange={(e) => setLocalSelectedRegion(Number(e.target.value))}
          options={regionOptions}
        />
        <Button content="검색" size="small" colorType="blue" onClick={handleSearch} />
      </div>
      <div className={styles.rightBlock}>
        <SortBox setSortCriteria={setSortCriteria} />
        <SearchBtn />
      </div>
    </div>
  );
}
