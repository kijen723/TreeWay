"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { trendData } from "@/types/TrendDataType";

// Chart.js에서 사용하는 요소들을 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function KeyWordChart({location, data} : {location : string, data : trendData}) {
  const data1 = {
    labels: data.keywordAnalysis.map((value)=>{
        return value.keyword
    }),
    datasets: [
      {
        label: "검색 수",
        data: data.keywordAnalysis.map((value)=>{
            return value.count
        }),
        backgroundColor: "rgb(247, 247, 149, 0.7)",
        borderColor: "rgb(247, 247, 149)",
        borderWidth: 1,
      },
    ],
  };

  // 옵션 설정 (타입 지정)
  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  return <Bar data={data1} options={options} />;
}
