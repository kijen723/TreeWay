'use client';

import { useRouter } from 'next/navigation';
import styles from './AnalyzeList.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useAnalyzeTotalResullt } from '@/hooks/useAnalyzeHistory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setAnalyzeDetail } from '@/redux/slice/analyzeDetailSlice';

interface idData {
  analysisDate: number;
  cost: number;
  id: number;
  industryDetail: string;
  industryDetailId: number;
  memberId: number;
  region: string;
  regionId: number;
}

export default function SideDetailItem() {
  const router = useRouter();
  const dispatch = useDispatch();

  const memberId = useSelector((state: RootState) => state.auth.memberId);

  const { data: data, isLoading: Loading } = useAnalyzeTotalResullt(memberId);

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const targetRef = useRef<HTMLDivElement | null>(null);

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
      {data?.map((data: idData, index: number) => (
        <div
          key={index}
          className={styles.item}
          ref={selectedId === data.id ? targetRef : null}
          style={selectedId === data.id ? { background: '#ECF4DD' } : {}}
          onClick={() => {
            setSelectedId(data.id);
            // 클릭 시 해당 ID에 맞는 페이지로 이동
            dispatch(
              setAnalyzeDetail({
                regionId: data.regionId,
                industryDetailId: data.industryDetailId,
              })
            );

            router.push(`/analyze/${data.id}`);
          }}
        >
          <div className={styles.Info}>
            <div className={styles.top}>
              <span className={styles.category}>{index + 1}</span>
              <span className={styles.name}>점수/100점</span>
            </div>
            {/* 날짜, 지역, 업종 나열 */}
            <div className={styles.mid}>
              <div className={styles.date}>
                날짜: {new Date(data.analysisDate).toLocaleDateString()}
              </div>
            </div>
            <div className={styles.mid}>
              <div className={styles.region}>지역: {data.region}</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.industry}>업종: {data.industryDetail}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
