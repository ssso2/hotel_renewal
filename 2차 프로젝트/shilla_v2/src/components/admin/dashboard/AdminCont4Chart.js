import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
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

// 차트 옵션 설정
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
    y: {
      beginAtZero: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
}

const AdminCont4Chart = () => {
  const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/cancel')
        console.log(response.data)

        const lastCancel = response.data.lastCancel
        const nowCancel = response.data.nowCancel

        const labels = lastCancel.map((item) => item.room_type)
        const roomCancel = lastCancel.map((item) => item.cancel)
        const roomNowCancel = nowCancel.map((item) => item.cancel)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "객실별 지난 달 현황",
              data: roomCancel,
              backgroundColor: "#ffb1c1",
              borderColor: "#ff6384",
              fill: false,
              tension: 0.1,
            },
            {
              label: "객실별 이번 달 현황",
              data: roomNowCancel,
              backgroundColor: "#63ce2a",
              borderColor: "#63ce2a",
              fill: false,
              tension: 0.1,
            },
          ],
        })
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    }

    fetchData()
  }, []);

  return (
    <div>
      <h2>객실별 취소 현황</h2>
      <Bar options={options} data={chartData} />
    </div>
  )
}

export default AdminCont4Chart;