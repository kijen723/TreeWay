"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { trendData } from "@/types/TrendDataType";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RestaurantChart({ trendData }: { trendData: trendData }) {
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: trendData.trendAnalysis.map((data) => {
      return {
        label: data.trendType,
        data: data.trendCount.split(",").map((value) => Number(value)),
        borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )})`,
        backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, 0.2)`,
        fill: false,
      };
    }),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "강릉시",
      },
    },
  };
  return <Line data={data} options={options} />;
}
