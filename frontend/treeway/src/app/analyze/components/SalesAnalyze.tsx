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
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IndustryAnalyzeProps {
  industryAnalysis: {
    id: number;
    analysisData: string;
    dataType: string;
    regionId: number;
    regionName: string;
    industryDetailname: string;
    industryDetailId: number;
  }[];
}

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
export default function SalesAnalyze({
  industryAnalysis,
}: IndustryAnalyzeProps) {
  const realRegionId = useSelector(
    (state: RootState) => state.analyzeDetailSlice.regionId
  );
  const sumMonthlyDataByRegion = (regionId: number) => {
    const monthlyData = Array(12).fill(0); // 12개월 초기화

    // regionId가 같은 데이터를 찾고 분석 데이터를 콤마로 분리해서 더함
    industryAnalysis.forEach((item) => {
      if (item.regionId === regionId) {
        const analysisData = item.analysisData
          .split(',')
          .map((value) => parseFloat(value.trim()));
        // analysisData의 각 월 데이터를 더함
        analysisData.forEach((value, index) => {
          monthlyData[index] += value;
        });
      }
    });
    console.log(regionId);
    console.log(monthlyData);
    return monthlyData;
  };

  const dataAll = sumMonthlyDataByRegion(1);
  const dataRegion = sumMonthlyDataByRegion(realRegionId);

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
        label: '매출 (전국)',
        data: dataAll, // 전국 데이터
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: '매출 (지역)',
        data: dataRegion, // 해당 지역 데이터
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

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <div className={styles.unitLabel}>단위: 만원</div>
        <div className={styles.chartSize}>
          <Line data={data} options={options} />
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.unitLabel}>단위: 만원</div>
        <br />
        <br />
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
            {[
              { region: '전국', category: '매출', data: dataAll },
              { region: '지역', category: '매출', data: dataRegion },
            ].map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.region}>{row.region}</td>
                <td className={styles.category}>{row.category}</td>
                {row.data.map((value, colIndex) => (
                  <td key={colIndex}>{value.toFixed(0)}</td>
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
