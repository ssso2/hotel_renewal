import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const options = {
  responsive: true,
  interaction: {
    intersect: true,
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: [32, 42, 51, 60, 51, 95, 97, 72, 31, 86, 48, 68],
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "Angular",
      data: [37, 42, 41, 37, 31, 44, 42, 64, 81, 23, 75, 18],
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
  ]
};

const Chart2 = () => {
  return (
    <div>
      <h1>매출 현황</h1>
        <Bar options={options} data={data} />
    </div>
  );
};

export default Chart2;