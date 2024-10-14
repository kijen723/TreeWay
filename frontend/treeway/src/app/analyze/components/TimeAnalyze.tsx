'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './TimeAnalyze.module.scss';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// API에서 데이터를 받아오는 것처럼 가정한 데이터
const fetchData = () => {
  return [
    {
      region: '전국',
      category: '매출 건수',
      monthlyData: [132, 212, 452, 123, 223, 123],
    },
    {
      region: '서울',
      category: '매출 건수',
      monthlyData: [15, 23, 43, 21, 32, 15],
    },
  ];
};

interface IndustryAnalyzeProps {
  industryAnalysis: {
    id: number;
    analysisData: string;
    dataType: string;
    regionId: number;
    regionName: string;
    industryDetailname: string; //
  }[];
}

const analysisComments = [
  '매출이 안정적으로 유지되며, 외부 변수에 크게 흔들리지 않는 견고한 구조를 보입니다.',
  '변동성이 적고 꾸준한 매출 흐름이 이어져, 예측 가능한 수익 모델을 제공합니다.',
  '일정한 매출을 유지하며, 안정적인 수익 기반을 다지는 모습이 인상적입니다.',
  '꾸준한 매출 성장이 이어지며, 시장 내 입지가 더욱 탄탄해지고 있습니다.',
  '매출 흐름이 일정해 예측 가능한 경영 계획 수립에 적합한 환경을 제공합니다.',
  '지속적인 매출 유지로, 안정성과 수익성을 동시에 확보하고 있습니다.',
  '꾸준한 매출 흐름을 통해, 장기적으로 신뢰할 수 있는 수익 구조를 형성하고 있습니다.',
  '매출 변동이 적어, 안정적인 재정 운영이 가능하며, 지속적인 성장이 기대됩니다.',
  '일정한 매출을 바탕으로, 장기적인 경영 전략 수립에 있어 유리한 조건을 갖추고 있습니다.',
  '안정적인 매출 성장세가 유지되며, 외부 충격에 대한 대응력이 뛰어납니다.',
  '매출의 꾸준함이 지속되며, 장기적인 투자 관점에서 안정성을 확보하고 있습니다.',
  '일정한 매출 성장은 비즈니스의 견고한 기반을 보여주며, 안정적인 운영이 가능합니다.',
  '꾸준한 매출 흐름을 유지함으로써, 리스크를 최소화한 안정적 수익 모델을 제공합니다.',
  '시장 변동에도 불구하고 매출이 안정적으로 이어져, 예측 가능한 수익 흐름을 보입니다.',
  '변동성이 낮은 매출 패턴은 장기적인 성장 가능성을 뒷받침하는 중요한 요소입니다.',
  '꾸준한 매출 성장은 외부 요인에 대한 강한 내성을 보여주며, 안정성을 강화합니다.',
  '매출이 일정하게 유지되어 재정 계획 수립에 있어 예측 가능성을 높여줍니다.',
  '안정적인 매출 흐름이 이어지며, 지속 가능한 비즈니스 모델을 구현하고 있습니다.',
  '매출 변동이 적어, 시장의 불확실성 속에서도 안정적인 수익을 기대할 수 있습니다.',
  '꾸준한 매출 성장은 향후 지속적인 성장을 위한 탄탄한 기반을 제공합니다.',
];

export default function SalesAnalyze({
  industryAnalysis,
}: IndustryAnalyzeProps) {
  const [selectedComments, setSelectedComments] = useState<string[]>([]);

  useEffect(() => {
    const shuffledComments = [...analysisComments].sort(
      () => 0.5 - Math.random()
    );
    setSelectedComments(shuffledComments.slice(0, 3));
  }, []);

  const extractDataAfterComma = (analysisData: string) => {
    return analysisData.split(',').map((data) => parseInt(data.trim())); // 문자열을 ,로 나누고 숫자로 변환
  };

  const data = {
    labels: ['00~06시', '06~11시', '11~14시', '14~17시', '17~21시', '21~24시'],
    datasets: [
      {
        label: '전국 매출 건수',
        data: industryAnalysis.map((analysis) => {
          // 각 analysisData에서 콤마 뒤에 있는 숫자를 추출
          const extractedData = extractDataAfterComma(analysis.analysisData);
          return extractedData[1]; // 각 시간대별 데이터
        }),
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  console.log(data.datasets[0].data);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: '업소 매출 추이',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '매출',
        },
      },
      x: {
        title: {
          display: true,
          text: '월',
        },
      },
    },
  };

  const tableData = fetchData();

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 개</div>
        <br></br>
        <br></br>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>지역</th>
              <th>구분</th>
              {data.labels.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <td>전국</td>
            <td>매출건수</td>
            {data.datasets[0].data.map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tbody>
        </table>
        <hr className={styles.hr} />
      </div>

      <div className={styles.analysisBox}>
        <h2 className={styles.title}>분석결과 해설</h2>
        <div className={styles.content}>
          {selectedComments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}{' '}
        </div>
      </div>
    </div>
  );
}
