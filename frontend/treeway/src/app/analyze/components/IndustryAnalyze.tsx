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
import styles from './IndustryAnalyze.module.scss';

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
      category: '업소수',
      monthlyData: [30, 45, 40, 50, 55, 65, 70, 60, 80, 75, 85, 90],
    },
    {
      region: '전국',
      category: '신규업종',
      monthlyData: [1, 3, 5, 4, 25, 14, 5, -10, 20, -3, 4, 6],
    },
    {
      region: '전국',
      category: '증감률',
      monthlyData: [0, 15, -5, 10, 5, 10, 5, -10, 20, -5, 10, 5],
    },
    {
      region: '서울',
      category: '업소수',
      monthlyData: [25, 35, 30, 40, 45, 50, 55, 48, 65, 70, 60, 80],
    },
    {
      region: '서울',
      category: '신규업종',
      monthlyData: [5, 2, 3, 2, 21, 4, 6, -13, 15, -6, 3, 2],
    },
    {
      region: '서울',
      category: '증감률',
      monthlyData: [0, 10, -5, 10, 5, 5, 5, -7, 17, 5, -10, 20],
    },
  ];
};

export default function IndustryAnalyze() {
  const data = {
    labels: [
      '22.1',
      '22.2',
      '22.3',
      '22.4',
      '22.5',
      '22.6',
      '22.7',
      '22.8',
      '22.9',
      '22.10',
      '22.11',
      '22.12',
    ],
    datasets: [
      {
        label: '전국 업종 수',
        data: fetchData()[0].monthlyData, // 전국 업소수 데이터
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: '서울 업종 수',
        data: fetchData()[3].monthlyData, // 서울 업소수 데이터
        borderColor: 'rgba(255, 99, 132, 1)', // 빨간색
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: '전국 신규 업종 수',
        data: fetchData()[1].monthlyData,
        borderColor: 'rgba(75, 192, 192, 1)', // 청록색
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: '서울 신규 업종 수',
        data: fetchData()[4].monthlyData,
        borderColor: 'rgba(255, 159, 64, 1)', // 오렌지색
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
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
        text: '업소 수 추이',
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '업소 수',
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
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 개</div>
        <div className={styles.chartSize}>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className={styles.tableContainer}>
        <hr className={styles.hr} />
        <div className={styles.unitLabel}>단위: 개, %</div>
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
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.region}>{row.region}</td>
                <td className={styles.category}>{row.category}</td>
                {row.monthlyData.map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <hr className={styles.hr} />
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
