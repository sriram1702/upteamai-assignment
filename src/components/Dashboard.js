import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Dashboard = ({ report }) => {
if (!report || !report.barChart) return null;

  /* =========================
     DYNAMIC BAR DATA
  ========================== */

  const barData = {
    labels: report.barChart.labels,
    datasets: [
      {
        label: "In Process",
        data: report.barChart.inProcess,
        backgroundColor: "#6A5ACD",
      },
      {
        label: "Unacknowledged",
        data: report.barChart.unacknowledged,
        backgroundColor: "#8A2BE2",
      },
      {
        label: "On Watch",
        data: report.barChart.onWatch,
        backgroundColor: "#C4B5FD",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  /* =========================
     DYNAMIC DOUGHNUT DATA
  ========================== */

  const doughnutData = {
    labels: ["Open", "In Process", "Acknowledged", "On Watch"],
    datasets: [
      {
        data: [
          report.doughnutChart.open,
          report.doughnutChart.inProcess,
          report.doughnutChart.acknowledged,
          report.doughnutChart.onWatch,
        ],
        backgroundColor: [
          "#6A5ACD",
          "#8A2BE2",
          "#A78BFA",
          "#C4B5FD",
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    plugins: { legend: { position: "right" } },
    cutout: "60%",
  };

  return (
    <div className="dashboard">
      {/* OPTIONAL: Show report title */}
      <h2 style={{ marginBottom: "20px" }}>{report.title}</h2>

      <div className="chart-container">
        <div className="chart-card">
          <h4>Best Unit Operations</h4>
          <Bar data={barData} options={barOptions} />
        </div>

        <div className="chart-card">
          <h4>Alert Distribution</h4>
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

