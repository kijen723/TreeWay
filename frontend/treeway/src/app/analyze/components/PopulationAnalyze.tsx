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
    activityStatus: string; //"활동인구"
    analysisData: string;
    gender: string;
  }[];
}

// API에서 데이터를 받아오는 것처럼 가정한 더미 데이터
const fetchData = () => {
  return [
    {
      SC: 0, // 전국
      GENDER: 0,
      CSI: 0,
      ISACT: 0,
      population: [
        29359, 29390, 29375, 29037, 28815, 28957, 28957, 28815, 29594, 29288,
        29578, 29764,
      ],
    },
    {
      SC: 11, // 서울
      GENDER: 0,
      CSI: 0,
      ISACT: 0,
      population: [
        29359, 29390, 29375, 29037, 28815, 28957, 28957, 28815, 29594, 29288,
        29578, 29764,
      ],
    },
    {
      SC: 11, // 서울
      GENDER: 0,
      CSI: 0,
      ISACT: 1, // 직장 인구
      population: [
        29359, 29390, 29375, 29037, 28815, 28957, 28957, 28815, 29594, 29288,
        29578, 29764,
      ],
    },
  ];
};

export default function PopulationAnalyze({
  populationAnalsis,
}: PopulationAnalyzeProps) {
  const data = fetchData();

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
        label: '전국',
        data: data[0].population,
        borderColor: 'blue',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        fill: true,
      },
      {
        label: '서울',
        data: data[1].population,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: true,
      },
    ],
  };

  // 2. 서울과 전국의 인구수 표 데이터
  const tableData = [
    { region: '전국', population: data[0].population },
    { region: '서울', population: data[1].population },
  ];

  // 3. 서울 직장 인구 추이
  const jobPopulationData = {
    labels: months,
    datasets: [
      {
        label: '서울 직장 인구',
        data: data[2].population,
        borderColor: 'sandybrown',
        backgroundColor: 'sandybrown',
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
        <div className={styles.unitLabel}>단위: 명</div>
        <div className={styles.chartSize}>
          <Line data={populationData} options={options} />
        </div>
      </div>

      {/* 두 번째 표: 서울과 전국의 인구수 */}
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 명</div>
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
          <p>가나다라 어쩌고 저쩌고...</p>
          <p>마바사아 어쩌고 저쩌고...</p>
        </div>
      </div>
    </div>
  );
}
