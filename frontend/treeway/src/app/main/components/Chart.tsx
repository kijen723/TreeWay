"use client";

import styles from "./Chart.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Store } from "@/types/MapType";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ shopData }: { shopData: Store }) {
  const data = {
    labels: ["재료비", "인건비", "관리비", "월세", "공과금", "기타경비", "월수익"],
    datasets: [
      {
        label: "매출 정보",
        data: [
          shopData.materialCost,
          shopData.personnelExpense,
          shopData.monthlyRent,
          shopData.administrationCost,
          shopData.utilityBill,
          shopData.otherExpenses,
          shopData.monthlyEarnings,
        ],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(3, 204, 3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(3, 204, 3, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${Math.round(tooltipItem.raw / 10000)}만원`;
          },
        },
      },
    },
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.chart}>
          <Doughnut data={data} options={options} />
          <div className={styles.center}>
            <span className={styles.total}>{Math.round(shopData.monthlySales / 10000)}만원</span>
            <span className={styles.monthSale}>월 매출</span>
          </div>
        </div>
        <div className={styles.legend}>
          <div className={styles.left}>
            {data.labels.slice(0, 3).map((label: string, index: number) => (
              <div key={index} className={styles.legendItem}>
                <span
                  className={styles.legendColor}
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                ></span>
                <span className={styles.legendLabel}>{label}</span>
                <span>{Math.floor(data.datasets[0].data[index] / 10000)}만원</span>
                <span style={{ color: data.datasets[0].backgroundColor[index] }}>{Math.round(data.datasets[0].data[index] / shopData.monthlySales * 100)}%</span>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            {data.labels.slice(3, 6).map((label: string, index: number) => (
              <div key={index} className={styles.legendItem}>
                <span
                  className={styles.legendColor}
                  style={{ backgroundColor: data.datasets[0].backgroundColor[index + 3] }}
                ></span>
                <span className={styles.legendLabel}>{label}</span>
                <span>{Math.floor(data.datasets[0].data[index + 3] / 10000)}만원</span>
                <span style={{ color: data.datasets[0].backgroundColor[index + 3] }}>{Math.round(data.datasets[0].data[index+3] / shopData.monthlySales * 100)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.dnjftndlr}>
        <span></span>
        <span>월 수익</span>
        <span>+{Math.round(shopData.monthlyEarnings) / 10000}만원</span>
        <span>{Math.round(shopData.monthlyEarnings / shopData.monthlySales * 100)}%</span>
      </div>
    </>
  );
}
