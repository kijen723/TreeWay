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
import styles from './SalesAnalyze.module.scss';

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
      region: '서울',
      category: '매출',
      monthlyData: [
        1325, 1435, 1230, 1540, 1445, 1550, 1655, 1748, 1765, 1770, 1860, 1880,
      ],
    },
    {
      region: '서울',
      category: '증감률',
      monthlyData: [0, 10, -5, 10, 5, 5, 5, -7, 17, 5, -10, 20],
    },
  ];
};
export default function SalesAnalyze() {
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
        label: '매출',
        data: fetchData()[0].monthlyData, // 전국 업소수 데이터
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
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
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 만원</div>
        <div className={styles.chartSize}>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 만원, %</div>
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
    </div>
  );
}
