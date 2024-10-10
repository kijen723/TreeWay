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

interface RegionAnalyzeProps {
  regionAnalysis: {
    id: number;
    regionId: number;
    regionName: string;
    facility: string;
    analysisData: string;
  }[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesAnalyze({ regionAnalysis }: RegionAnalyzeProps) {
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
            <p>가나다라 어쩌고 저쩌고...</p>
            <p>마바사아 어쩌고 저쩌고...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
