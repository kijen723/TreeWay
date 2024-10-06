'use client';

import { useParams, useRouter } from 'next/navigation';
import styles from './AnalyzeList.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaLocationDot, FaWonSign } from 'react-icons/fa6';
import { SlArrowRightCircle } from 'react-icons/sl';

const dummyData = [
  {
    id: 1,
    name: '분석이력결과',
    date: '2024-12-23',
    region: '인천 서구',
    industry: '음식점',
  },
  {
    id: 2,
    name: '분석이력결과2',
    date: '2024-12-24',
    region: '서울 강남구',
    industry: '카페',
  },
];
export default function SideDetailItem() {
  const router = useRouter();
  const params = useParams();

  const [selectedId, setSelectedId] = useState<number | null>(null);

  // 선택된 가게의 ref 설정
  const targetRef = useRef<HTMLDivElement | null>(null);

  // 선택된 가게가 있으면 해당 가게로 스크롤
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedId]);

  return (
    <div className={styles.items}>
      {dummyData.map((data) => (
        <div
          key={data.id}
          className={styles.item}
          ref={selectedId === data.id ? targetRef : null}
          style={selectedId === data.id ? { background: '#ECF4DD' } : {}}
          onClick={() => {
            setSelectedId(data.id);
            // 클릭 시 해당 ID에 맞는 페이지로 이동
            router.push(`/analyze/${data.id}`);
          }}
        >
          {selectedId === data.id && (
            <SlArrowRightCircle
              className={styles.back}
              onClick={(e) => {
                e.stopPropagation(); // 클릭 이벤트 전파 방지
                router.push(`/analyze/${data.id}`);
              }}
            />
          )}
          <div className={styles.Info}>
            <div className={styles.top}>
              <span className={styles.category}>{data.id}</span>
              <span className={styles.name}>{data.name}</span>
            </div>
            {/* 날짜, 지역, 업종 나열 */}
            <div className={styles.mid}>
              <div className={styles.date}>날짜: {data.date}</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.region}>지역: {data.region}</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.industry}>업종: {data.industry}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
