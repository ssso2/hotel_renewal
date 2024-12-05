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
        text: "인원",
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
        const response = await axios.get('http://localhost:5002/bk/admin')
        
        const labels = response.data.map((item) => item.room_id)
        const rooms = response.data.map((item) => item.room_type)
        const beds = response.data.map((item) => item.bed_type)
        const prices = response.data.map((item) => item.day_price)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "객실 유무",
              data: `${rooms}`,
              backgroundColor: "#9a01c3",
              borderColor: "#9a01c3",
              fill: false,
              tension: 0.1,
            },
            {
              label: "가격",
              data: `${prices}`,
              backgroundColor: "#2699a1",
              borderColor: "#2699a1",
              fill: false,
              tension: 0.1,
            },
            {
              label: "침대 유무",
              data: `${beds}`,
              backgroundColor: "#5c3dd1",
              borderColor: "#5c3dd1",
              fill: false,
              tension: 0.1,
            },
          ],
        })
      } catch (error) {
        console.error("데이터 가져오기 실패", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>객실별 매출 현황</h2>
        <Bar options={options} data={chartData} />
    </div>
  )
}

export default AdminCont4Chart;