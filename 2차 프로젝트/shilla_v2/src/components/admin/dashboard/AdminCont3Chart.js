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

const AdminCont3Chart = () => {
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
            // {
            //   label: "침대 타입",
            //   data: beds,
            //   backgroundColor: "#aee123",
            //   borderColor: "#aee123",
            //   fill: false,
            //   tension: 0.1,
            // },
            {
              label: "판매 금액",
              data: prices,
              backgroundColor: "#7b31e4",
              borderColor: "#7b31e4",
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

export default AdminCont3Chart;