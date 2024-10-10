'use client';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './SalesAnalyze.module.scss';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationAnalyzeProps {
  populationAnalsis: {
    id: number;
    regionId: number;
    regionName: string;
    trendIndex: number;
    activityStatus: string; //
    analysisData: string;
    gender: string;
  }[];
}

const analysisComments = [
  '활동인구가 비활동인구보다 많은 점은 경제 활력의 긍정적인 신호로, 잠재적인 성장 가능성을 보여줍니다.',
  '비록 주춤세가 보이지만, 활동인구가 여전히 다수여서 안정적인 소비 기반이 유지되고 있습니다.',
  '활동인구가 비활동인구보다 우세한 상황으로, 지속적인 경제 활동과 성장의 원동력이 충분합니다.',
  '인구 증감 속에서도 활동인구의 비율이 높아, 시장의 지속적인 활력을 기대할 수 있습니다.',
  '주춤세 속에서도 활동인구가 다수를 차지해 안정적인 시장 흐름이 예상됩니다.',
  '비활동인구보다 활동인구가 많아, 시장 내 소비력과 경제 활동이 활발하게 유지되고 있습니다.',
  '약간의 주춤세에도 불구하고 활동인구의 비율이 높아, 지역 경제의 견고한 기반을 형성하고 있습니다.',
  '활동인구의 지속적인 우위는 경제적 활력과 수익 창출의 가능성을 여전히 높이고 있습니다.',
  '주춤하는 가운데서도 활동인구의 비율이 높아, 시장의 안정성을 뒷받침합니다.',
  '비활동인구가 상대적으로 적어, 활동인구가 경제적 중심축으로서 역할을 지속하고 있습니다.',
  '다소 주춤한 추세 속에서도, 활동인구의 우위가 지역 경제 성장의 긍정적인 지표로 작용합니다.',
  '비활동인구보다 활동인구가 많아, 경제적 영향력이 꾸준히 유지되고 있습니다.',
  '약간의 하락세에도 불구하고 활동인구의 강세가 경제적 활력과 소비 기반을 유지하고 있습니다.',
  '활동인구가 여전히 다수로, 인구 구조 변화에도 불구하고 안정적인 경제 활동이 예상됩니다.',
  '활동인구의 비율이 높아, 경제적 안정성과 성장 잠재력이 지속적으로 이어질 것으로 보입니다.',
  '주춤한 양상에도 불구하고, 활동인구가 시장의 주도적 역할을 계속 유지하고 있습니다.',
  '활동인구의 높은 비율은 경제적 활력의 중요한 지표로 작용하며, 지속 가능한 성장을 뒷받침합니다.',
  '비활동인구보다 활동인구가 많아, 경제 구조가 여전히 건강하게 유지되고 있습니다.',
  '주춤하는 경향이 있으나 활동인구가 다수인 점은 향후 경제 회복 가능성을 높여줍니다.',
  '활동인구가 경제적 주체로서 자리잡고 있어, 주춤세 속에서도 긍정적인 성장 기회가 열려 있습니다.',
];

export default function PopulationAnalyze({
  populationAnalsis,
}: PopulationAnalyzeProps) {
  const [selectedComments, setSelectedComments] = useState<string[]>([]);

  useEffect(() => {
    const shuffledComments = [...analysisComments].sort(
      () => 0.5 - Math.random()
    );
    setSelectedComments(shuffledComments.slice(0, 3));
  }, []);
  const months = [
    '23.09',
    '23.10',
    '23.11',
    '23.12',
    '24.01',
    '24.02',
    '24.03',
    '24.04',
    '24.05',
    '24.06',
    '24.07',
    '24.08',
  ];

  // 1. 전국과 서울의 월별 인구수
  const populationData = {
    labels: months,
    datasets: [
      {
        label: populationAnalsis[6].regionName,
        data: populationAnalsis[6].analysisData.split(',').map(Number),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
    ],
  };

  // 2. 서울과 전국의 인구수 표 데이터
  const tableData = [
    {
      region: `${populationAnalsis[0].regionName}  ${populationAnalsis[0].activityStatus}`,
      population: populationAnalsis[0].analysisData.split(',').map(Number),
    },
    {
      region: `${populationAnalsis[1].regionName}  ${populationAnalsis[1].activityStatus}`,
      population: populationAnalsis[1].analysisData.split(',').map(Number),
    },
    {
      region: `${populationAnalsis[6].regionName}  ${populationAnalsis[6].activityStatus}`,
      population: populationAnalsis[6].analysisData.split(',').map(Number),
    },
    {
      region: `${populationAnalsis[7].regionName}  ${populationAnalsis[7].activityStatus}`,
      population: populationAnalsis[7].analysisData.split(',').map(Number),
    },
  ];

  // 3. 지역 직장 인구 추이
  const jobPopulationData = {
    labels: months,
    datasets: [
      {
        label: '전국 직장 인구',
        data: populationAnalsis[0].analysisData.split(',').map(Number),
        borderColor: 'sandybrown',
        backgroundColor: 'sandybrown',
        fill: true,
      },
      {
        label: `${populationAnalsis[6].regionName} 직장 인구`,
        data: populationAnalsis[6].analysisData.split(',').map(Number),
        borderColor: 'orange',
        backgroundColor: 'orange',
        fill: true,
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
        text: '인구수 추이',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '인구수',
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

  return (
    <div className={styles.container}>
      {/* 첫 번째 그래프: 전국과 서울의 월별 인구수 */}
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 천명</div>
        <div className={styles.chartSize}>
          <Line data={populationData} options={options} />
        </div>
      </div>

      {/* 두 번째 표: 서울과 전국의 인구수 */}
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 천명</div>
        <br></br>
        <br></br>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>지역</th>
              {months.map((label) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.region}>{row.region}</td>
                {row.population.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 세 번째 그래프: 서울 직장 인구 추이 */}
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 명</div>
        <div className={styles.chartSize}>
          <Bar data={jobPopulationData} options={options} />
        </div>
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
