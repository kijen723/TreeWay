import { useState } from "react";
import styles from "../page.module.scss";
import Button from '../../common/Button';
import FormField from "@/app/regist/components/FormField";

export default function InputForm({ setImageUrl, setErrorMessage }: { setImageUrl: (url: string) => void, setErrorMessage: (message: string) => void }) {
    const [region, setRegion] = useState('');  // 지역 상태
    const [business, setBusiness] = useState('');  // 업종 상태
    const [budget, setBudget] = useState('');  // 예산 상태

    // 전국 8도 및 주요 광역시별 평균 창업비용 설정
    const startupCosts: { [key: string]: number } = {
    '서울특별시': 200000000,  // 2억 원
    '경기도': 150000000,  // 1억 5천만 원
    '강원도': 60000000,  // 6천만 원
    '충청북도': 50000000,  // 5천만 원
    '충청남도': 55000000,  // 5천 5백만 원
    '전라북도': 55000000,  // 5천 5백만 원
    '전라남도': 50000000,  // 5천만 원
    '경상북도': 75000000,  // 7천 5백만 원
    '경상남도': 80000000,  // 8천만 원
    '제주특별자치도': 70000000,  // 7천만 원
    '부산광역시': 90000000,  // 9천만 원
    '대구광역시': 85000000,  // 8천 5백만 원
    '인천광역시': 100000000,  // 1억 원
    '광주광역시': 70000000,  // 7천만 원
    '대전광역시': 75000000,  // 7천 5백만 원
    '울산광역시': 80000000  // 8천만 원
    };


    const handleSubmitBtn = async () => {
        console.log("분석 버튼 클릭");

        if (!region || !business || !budget) {
            setErrorMessage('모든 필드를 입력해주세요.');
            return;
        }

        // 입력된 지역에서 주요 도시명만 추출 (예: '서울특별시 강남구' -> '서울')
        const parsedRegion: string = region.split(' ')[0]; // '서울특별시' -> '서울'

        // 지역별 평균 창업비용 가져오기
        const averageCost = startupCosts[parsedRegion];

        if (!averageCost) {
            setErrorMessage('해당 지역의 평균 창업 비용을 찾을 수 없습니다.');
            return;
        }

        let prompt = '';
        const budgetInt = parseInt(budget, 10);  // 예산을 정수로 변환

        // 예산과 비교하여 프롬프트 설정
        if (budgetInt < averageCost * 0.5) {
            prompt = `
            I want to run a small ${business} business with a budget of ${budget} won in ${region}.
            Please show an extremely makeshift version of the ${business}, where the vendor is operating on the street with no formal shop.
            The scene should depict the business run on a newspaper spread on the ground, with only basic and portable tools and items available.
            The environment should be outdoors, possibly under a makeshift canopy or near a crowded street in ${region}, giving a sense of financial desperation.
            The overall tone should reflect a struggling business with almost no resources, forced to operate in a public, temporary setting.
            `;
        } else if (budgetInt < averageCost) {
            prompt = `
            I want to run a small ${business} business with a budget of ${budget} won in ${region}.
            Show a very run-down and humble version of the ${business}. The shop should be old, small, and visibly deteriorated with worn-out furniture and equipment.
            The storefront should have peeling paint, cracked windows, and an old, fading sign. The interior should have the bare minimum, such as a worn-out chair, a simple table, and old lighting. 
            The environment outside should have poorly maintained neighboring buildings, cracked pavements, and a deserted street in ${region}. 
            The overall atmosphere should convey the sense of struggle in a low-budget business.
            `;
        } else if (budgetInt <= averageCost * 1.5) {
            prompt = `
            I want to run a small ${business} business with a budget of ${budget} won in ${region}.
            Create a realistic image of a modest yet functional ${business}. The shop should have clean interiors with simple but well-maintained furniture, such as clean tables, chairs, and functional lighting. 
            The exterior should be neat with a clean sign, large windows, and a basic but professional appearance. 
            The business should be located on a regular street in a commercial area of ${region}, with similar small shops nearby. 
            The overall feel should be practical and balanced, reflecting a stable but modest business.
            `;
        } else {
            prompt = `
            I want to run a small ${business} business with a budget of ${budget} won in ${region}.
            Generate a luxurious and grand version of the ${business}, situated in a modern, high-end building. The shop should have a sleek and contemporary design with high-quality materials, polished floors, modern furniture, and bright lighting. 
            The storefront should be impressive with a large, well-lit sign and a clean, glass-covered facade. 
            The shop should be located in a prime area of ${region}, surrounded by upscale businesses, with well-maintained streets and a busy atmosphere.
            The overall feeling should convey success and luxury, showing that this is a high-budget, premium business.
            `;
        }

        try {
            const response = await fetch('/api/generateImage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            console.log("API 응답 데이터:", data);  // API 응답 데이터 확인
            setImageUrl(data.imageUrl);  // 이미지 URL 부모 컴포넌트로 전달
            setErrorMessage('');  // 에러 메시지 초기화
        } catch (error) {
            console.error("Error occurred during API call:", error);
            setErrorMessage('이미지 생성 중 오류가 발생했습니다.');
        }
    };

    return (
        <div className={styles.formArea}>
            <FormField
                label="지역"
                htmlFor="region"
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
            />
            <FormField
                label="업종"
                htmlFor="business"
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
            />
            <FormField
                label="예산"
                htmlFor="budget"
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
            />
            <div className={styles.buttonArea}>
                <Button content="분석하기" size="medium" colorType="blue" onClick={handleSubmitBtn} />
            </div>
        </div>
    );
}
