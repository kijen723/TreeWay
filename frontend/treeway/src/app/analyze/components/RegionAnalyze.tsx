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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// API에서 데이터를 받아오는 것처럼 가정한 데이터
const fetchData = () => {
  return [
    {
      region: '서울',
      category: '시설',
      monthlyData: [9, 13, 4, 6, 13],
    },
  ];
};

export default function SalesAnalyze() {
  const data = {
    labels: ['자동차', '의료', '학교', '문화', '체육'],
    datasets: [
      {
        label: '개수',
        data: fetchData()[0].monthlyData, // 전국 업소수 데이터
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

  const tableData = fetchData();

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

        <div className={styles.analysisBox}>
          <h2 className={styles.title}>분석결과 해설</h2>
          <div className={styles.content}>
            <p>가나다라 어쩌고 저쩌고...</p>
            <p>마바사아 어쩌고 저쩌고...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
