'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './SalesAnalyze.module.scss';
import { useEffect, useState } from 'react';

interface RegionAnalyzeProps {
  regionAnalysis: {
    id: number;
    regionId: number;
    regionName: string;
    facility: string;
    analysisData: string;
  }[];
}

const analysisComments = [
  '지역이 고르게 분포되어 있어 다양한 시장 기회를 균등하게 누릴 수 있습니다.',
  '골고루 분포된 지역 현황은 균형 잡힌 경제 성장을 뒷받침해줍니다.',
  '지역 간 분포가 고르게 되어 있어, 시장 접근과 자원의 활용이 효율적입니다.',
  '지역 분포가 균형을 이루어, 특정 지역에 집중된 부담 없이 안정적인 발전이 가능합니다.',
  '골고루 분포된 지역은 다양한 소비층을 아우를 수 있어, 시장 확장성이 큽니다.',
  '지역별로 고르게 분포되어 있어, 다양한 지역에서 경제 활동이 활발히 이루어지고 있습니다.',
  '균등하게 분포된 지역 현황은 시장의 안정성과 성장을 촉진하는 중요한 요소입니다.',
  '지역의 분포가 고르게 되어, 특정 지역에 의존하지 않고 안정적인 경제 흐름을 유지할 수 있습니다.',
  '골고루 분포된 지역은 시장의 다양성과 균형 잡힌 성장을 가능하게 합니다.',
  '지역 현황이 고르게 분포되어 있어, 특정 지역의 경제적 충격을 완화하는 데 유리합니다.',
  '지역이 고르게 분포되어 있어, 자원의 효율적인 분배와 균형 잡힌 경제 성장이 가능합니다.',
  '지역별 분포가 고르게 되어 있어, 모든 지역에서 경제적 기회를 균등하게 누릴 수 있습니다.',
  '균형 잡힌 지역 분포는 시장의 불균형을 방지하고, 장기적인 안정성을 제공합니다.',
  '지역이 고르게 분포되어 있어, 전체 시장의 활성화와 균형 잡힌 성장을 기대할 수 있습니다.',
  '다양한 지역에 고르게 분포된 경제 활동은 시장의 다각화를 돕고 안정적인 성장을 이끕니다.',
  '지역 분포가 균형을 이루어, 경제적 변동성이 적고 안정적인 발전이 가능합니다.',
  '학교가 지역별로 잘 분포돼 있어, 교육과 관련된 시장에서도 균형 잡힌 접근이 가능합니다.',
  '지역과 학교가 고루 분포되어 있어, 각 지역마다 경제적, 교육적 가능성이 잘 분포된 상태입니다.',
  '골고루 분포된 지역 현황은 시장의 안정성과 지속적인 성장을 보장합니다.',
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesAnalyze({ regionAnalysis }: RegionAnalyzeProps) {
  const [selectedComments, setSelectedComments] = useState<string[]>([]);

  useEffect(() => {
    const shuffledComments = [...analysisComments].sort(
      () => 0.5 - Math.random()
    );
    setSelectedComments(shuffledComments.slice(0, 3));
  }, []);

  const facilities = ['자동차', '의료', '학교', '문화', '체육']; // 시설 리스트

  // 분석 데이터에서 마지막 값을 추출하여 차트 데이터로 사용
  const monthlyData = facilities.map((facility) => {
    const item = regionAnalysis.find((r) => r.facility === facility);
    const analysisData = item?.analysisData
      .split(',')
      .map((value) => parseInt(value.trim(), 10));
    return analysisData ? analysisData[analysisData.length - 1] : 0; // 시설이 없으면 0으로 처리
  });

  const data = {
    labels: facilities, // 시설 라벨
    datasets: [
      {
        label: '시설',
        data: monthlyData, // 마지막 값만으로 데이터를 채움
        borderColor: 'sandybrown',
        backgroundColor: 'sandybrown',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '주요시설 현황',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '개',
        },
      },
      x: {
        title: {
          display: true,
          text: '시설',
        },
      },
    },
  };

  const tableData = regionAnalysis;

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 개</div>
        <div className={styles.chartSize}>
          <Bar data={data} options={options} />
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 개</div>
        <br />
        <br />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>지역</th>
              <th>구분</th>
              {['2024. 04', '2024. 05', '2024. 06', '2024. 07', '2024. 08'].map(
                (label) => (
                  <th key={label}>{label}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.region}>{row.regionName}</td>
                <td className={styles.category}>{row.facility}</td>
                {row.analysisData.split(',').map((value, colIndex) => (
                  <td key={colIndex}>{value.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <hr className={styles.hr} />

        <div className={styles.analysisBox}>
          <h2 className={styles.title}>분석결과 해설</h2>
          <div className={styles.content}>
            {selectedComments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
