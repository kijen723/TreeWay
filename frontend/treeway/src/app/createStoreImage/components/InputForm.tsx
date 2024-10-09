import { useState } from "react";
import styles from "../page.module.scss";
import Button from '../../common/Button';
import FormField from "@/app/regist/components/FormField";

export default function InputForm({ setImageUrl, setErrorMessage }: { setImageUrl: (url: string) => void, setErrorMessage: (message: string) => void }) {
    const [region, setRegion] = useState('');  // 지역 상태
    const [business, setBusiness] = useState('');  // 업종 상태
    const [budget, setBudget] = useState('');  // 예산 상태

<<<<<<< HEAD
    // 전국 8도 및 주요 광역시별 평균 창업비용 설정
=======
    // 1차 지역과 2차 시/군/구 데이터
    const regions: { [key: string]: string[] } = {
        '서울특별시': ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강도구'].sort(),
        '경기도': ['수원시', '용인시', '고양시', '화성시', '성남시', '부천시', '남양주시', '안산시', '평택시', '안양시', '시흥시', '파주시', '김포시', '의정부시', '광주시', '하남시', '광명시', '군포시', '양주시', '오산시', '이천시', '안성시', '구리시', '의왕시', '포천시', '양평군', '여주시', '동두천시', '과천시', '가평군', '연천군'].sort(),
        '충청북도' : ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'].sort(),
        '충청남도' : ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'].sort(),
        '전라남도' : ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '회순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'].sort(),
        '경상북도' : ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'].sort(),
        '경상남도' : ['창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'].sort(),
        '부산광역시' : ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'].sort(),
        '인천광역시' : ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'].sort(),
        '대구광역시' : ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군', '군위군'].sort(),
        '대전광역시' : ['동구', '중구', '서구', '유성구', '대덕구'].sort(),
        '광주광역시' : ['동구', '서구', '남구', '북구', '광산구'].sort(),
        '울산광역시' : ['중구', '남구', '동구', '북구', '울주군'].sort(),
        '세종특별자치시' : ['세종시'].sort(),
        '강원특별자치도': ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'].sort(),
        '전북특별자치도' : ['전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'].sort(),
        '제주특별자치도' : ['제주시', '서귀포시'].sort()
    };

    const businesses: { [key: string]: string[] } = {
        '외식업' : ['한식', '중식', '일식/회', '양식', '분식', '육류', '주류', '버거류', '커피', '배달전문', '유흥주점'],
        '서비스업' : ['미용실', '뷰티', '마사지', '세탁소', '사우나', '카센터', '애견미영/호텔'],
        '도/소매업' : ['편의점', '슈퍼마켓', '청과류', '정육점', '의류가방', '문구류', '액세서리', '화장품', '리빙가구', '귀금속', '가전제품', '철물/자제', '꽃/식물', '애견용품'],
        '예술/스포츠/시설업' : ['노래방', '당구장', '독서실', '헬스클럽', '바둑기원', '볼링장', '무도장', '음악작업', '탁구장', '실내골프', '실내야구', '풋살/축구', '실내낚시', '기타오락/스포츠', '무인사진', '코인노래방', '코인빨래방'],
        '교육/학원업' : ['어린이집', '학원', '키즈카페', '미술업', '공방'],
        '숙박업' : ['호텔모텔', '숙박업', '캠핑장', '원룸텔'],
    };

    //이거 맞나요?
>>>>>>> ed0a542 (feat : modify AI page)
    const startupCosts: { [key: string]: number } = {
<<<<<<< HEAD
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
=======
        '서울특별시': 200000000,  // 2억 원
        '경기도': 150000000,  // 1억 5천만 원
        '강원특별자치도': 60000000,  // 6천만 원
        '충청북도': 50000000,  // 5천만 원
        '충청남도': 55000000,  // 5천 5백만 원
        '전북특별자치도': 55000000,  // 5천 5백만 원
        '전라남도': 50000000,  // 5천만 원
        '경상북도': 75000000,  // 7천 5백만 원
        '경상남도': 80000000,  // 8천만 원
        '제주특별자치도': 70000000,  // 7천만 원
        '부산광역시': 90000000,  // 9천만 원
        '대구광역시': 85000000,  // 8천 5백만 원
        '인천광역시': 100000000,  // 1억 원
        '광주광역시': 70000000,  // 7천만 원
        '대전광역시': 75000000,  // 7천 5백만 원
        '울산광역시': 80000000,  // 8천만 원
        '세종특별자치시' : 80000000,
>>>>>>> e4bd95b (feat : add hover box)
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
