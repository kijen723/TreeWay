import Button from '@/app/common/Button';
import styles from '../page.module.scss'
import SearchBtn from './SearchBtn';
import SortBox from './SortBox';
import Dropdown from './Dropdown'; // 새롭게 추가할 드롭다운 컴포넌트
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdSearch } from "react-icons/md";

import { regionOptions } from '@/../public/data/region';
import { industryDetailOptions } from '@/../public/data/industry_detail';

interface UpperNavProps {
    setSortBy: (value: 'Latest' | 'ViewCount' | 'ScrapCount') => void; 
}

export default function UpperNav({ setSortBy }: UpperNavProps) {
    const router = useRouter();

    const [selectedRegion, setSelectedRegion] = useState<number>(0);
    const [selectedIndustry, setSelectedIndustry] = useState<number>(0);

    const handleCreatePost = () => {
        router.push('/community/createPost');
    };

    const handleSearch = () => {
        if (selectedRegion === 0 && selectedIndustry === 0) {
            alert('지역 또는 업종을 선택해주세요.');
            return;
        }

        const queryParams = new URLSearchParams();

        if (selectedRegion !== null && selectedRegion !== 0) {
            queryParams.append('regionId', String(selectedRegion));
        }

        if (selectedIndustry !== null && selectedIndustry !== 0) {
            queryParams.append('industryDetailId', String(selectedIndustry));
        }

        const queryString = queryParams.toString();
        router.push(`/community/search${queryString ? `?${queryString}` : ''}`);
    };

    return (
        <div className={styles.upperNav}>
            <div className={styles.leftBlock}>
                <Button content="글쓰기" size="medium" colorType="yellow" onClick={handleCreatePost} />
            </div>
            <div className={styles.centerBlock}>
                <Dropdown
                    label="지역"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(Number(e.target.value))}
                    options={regionOptions}
                />
                <Dropdown
                    label="업종"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(Number(e.target.value))}
                    options={industryDetailOptions}
                />
                <Button content="검색" size="small" colorType="blue" onClick={handleSearch} />
            </div>
            <div className={styles.rightBlock}>
                <SortBox setSortBy={setSortBy} />
                <SearchBtn />
            </div>
        </div>
    );
}
