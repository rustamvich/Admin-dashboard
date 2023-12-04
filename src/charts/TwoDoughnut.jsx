import React from "react";
import "../style/Chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";

function DoughnutChart() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  let data = {
    datasets: [
      {
        // label: "",
        data: [40,60],
        backgroundColor: ["blue", "#888"],
        borderRadius: 5,
        spacing: 4,
      },
    ],
  };
  return (
    <div className="container">
      <ResponsiveContainer>
        <Doughnut data={data}></Doughnut>
      </ResponsiveContainer>
    </div>
  );
}

export default DoughnutChart;