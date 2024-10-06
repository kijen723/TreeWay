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
export default function SalesAnalyze() {
  const data = {
    labels: ['00~06시', '06~11시', '11~14시', '14~17시', '17~21시', '21~24시'],
    datasets: [
      {
        label: '전국 매출 건수',
        data: fetchData()[0].monthlyData, // 전국 업소수 데이터
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: '지역 매출 건수',
        data: fetchData()[1].monthlyData, // 서울 업소수 데이터
        borderColor: 'rgba(255, 99, 132, 1)', // 빨간색
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
