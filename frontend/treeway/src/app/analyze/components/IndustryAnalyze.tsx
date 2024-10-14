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
import styles from './IndustryAnalyze.module.scss';
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

interface IndustryAnalyzeProps {
  industryAnalysis: {
    id: number;
    analysisData: string;
    dataType: string;
    regionId: number;
    regionName: string;
    industryDetailname: string;
  }[];
}

const analysisComments = [
  '현재 성장세는 둔화되었지만, 꾸준한 시장 수요와 변화하는 트렌드를 고려하면 새로운 기회를 창출할 가능성이 높습니다.',
  '일시적인 하락세 속에서도, 향후 환경 변화와 기술 도입에 따라 상승세로 전환될 여지가 큽니다.',
  '최근 성장은 더딘 편이나, 소비 패턴 변화에 따라 꾸준히 주목받을 수 있는 잠재력을 지니고 있습니다.',
  '안정적인 시장 기반을 바탕으로, 새로운 비즈니스 모델을 도입하면 성장 가능성은 충분합니다.',
  '단기적으로는 약세를 보였으나, 장기적으로 변화하는 고객 니즈에 대응할 수 있는 기회가 많습니다.',
  '당장의 증감률은 낮지만, 틈새시장을 공략하면 꾸준한 수익을 기대할 수 있습니다.',
  '외부 요인으로 인해 성장률이 둔화되었으나, 정책적 지원과 환경 변화로 인해 회복 가능성이 높습니다.',
  '최근 통계는 다소 부진하지만, 시장 트렌드를 반영한 혁신적인 접근이 이뤄지면 긍정적인 결과를 기대할 수 있습니다.',
  '수익성은 다소 감소했으나, 장기적인 관점에서 보면 여전히 매력적인 시장입니다.',
  '경쟁이 치열해지면서 다소 둔화된 성장세를 보였지만, 차별화 전략을 통해 반등할 가능성이 큽니다.',
  '현재는 보합세에 머물러 있지만, 고객층 확장과 맞춤형 서비스로 새로운 수익원을 발굴할 수 있습니다.',
  '성장률이 낮긴 하지만, 소비 트렌드 변화를 반영하면 재도약할 기회가 충분합니다.',
  '일시적인 침체에도 불구하고, 적절한 투자와 전략으로 향후 성장 가능성을 확보할 수 있습니다.',
  '당장 큰 성장은 아니지만, 꾸준한 수요와 변화하는 환경 속에서 장기적인 안정성을 보일 것으로 예상됩니다.',
  '성장률 둔화에도 불구하고, 지속적인 고객 니즈와 새로운 기회 요인들이 존재합니다.',
  '현재의 지표는 다소 부진하나, 미래 시장의 변화에 따라 다시 활기를 띨 가능성이 충분합니다.',
  '약간의 하락세를 보이고 있으나, 시장 구조가 안정적이므로 혁신적인 접근법으로 성장을 이끌 수 있습니다.',
  '단기적인 수치는 만족스럽지 않지만, 전략적 포지셔닝을 통해 차후 이익을 극대화할 수 있는 여지가 큽니다.',
  '성장이 둔화되었지만, 시장의 특성과 트렌드 변화에 맞춰 재정비하면 긍정적인 성과가 기대됩니다.',
  '현재는 다소 약세지만, 신기술 도입과 차별화된 서비스로 충분히 시장 내 입지를 다질 수 있습니다.',
];

// 전년도 대비 증감률 계산 함수
const calculateGrowthRate = (data: number[]) => {
  const growthRates = [0]; // 첫 번째 달은 비교 데이터가 없으므로 0
  for (let i = 1; i < data.length; i++) {
    const rate = ((data[i] - data[i - 1]) / data[i - 1]) * 100;
    growthRates.push(rate);
  }
  return growthRates;
};

export default function IndustryAnalyze({
  industryAnalysis,
}: IndustryAnalyzeProps) {
  const [selectedComments, setSelectedComments] = useState<string[]>([]);

  useEffect(() => {
    const shuffledComments = [...analysisComments].sort(
      () => 0.5 - Math.random()
    );
    setSelectedComments(shuffledComments.slice(0, 3));
  }, []);

  const regionData = industryAnalysis[0].analysisData.split(',').map(Number);
  const nationwideData = industryAnalysis[1].analysisData
    .split(',')
    .map(Number); // 전국 업소수 데이터
  const newIndustryData = industryAnalysis[2].analysisData
    .split(',')
    .map(Number); // 전국 신규업종 데이터

  // 증감률 계산
  const regionGrowthRates = calculateGrowthRate(regionData);
  const nationwideGrowthRates = calculateGrowthRate(nationwideData);

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
        label: industryAnalysis[0].regionName,
        data: regionData,
        borderColor: 'rgba(255, 99, 132, 1)', // 빨간색
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: '전국 업종 수',
        data: nationwideData,
        borderColor: 'rgba(54, 162, 235, 1)', // 파란색
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: '전국 신규 업종 수',
        data: newIndustryData,
        borderColor: 'rgba(75, 192, 192, 1)', // 청록색
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
            <tr>
              <td>{industryAnalysis[0].regionName}</td>
              <td>업종 수</td>
              {regionData.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
            <tr>
              <td>{industryAnalysis[0].regionName}</td>
              <td>증감률 (%)</td>
              {regionGrowthRates.map((rate, colIndex) => (
                <td key={colIndex}>{rate.toFixed(2)}%</td>
              ))}
            </tr>
            <tr>
              <td>전국</td>
              <td>업종 수</td>
              {nationwideData.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
            <tr>
              <td>전국</td>
              <td>증감률 (%)</td>
              {nationwideGrowthRates.map((rate, colIndex) => (
                <td key={colIndex}>{rate.toFixed(2)}%</td>
              ))}
            </tr>
            <tr>
              <td>전국</td>
              <td>신규 업종 수</td>
              {newIndustryData.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
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
