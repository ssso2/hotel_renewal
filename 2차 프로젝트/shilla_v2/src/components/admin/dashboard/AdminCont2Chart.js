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
  interaction: {
    intersect: true,
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "월별",
        font: {
          size: 14,
          style: 'italic',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "매출액",
        font: {
          size: 14,
          style: 'italic',
        },
      },
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

const AdminCont2Chart = () => {
  const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/price')
        console.log(response.data)

        const labels = response.data.map((item) => item.dateCalc)
        console.log("으흠", labels)

        const prices = response.data.map((item) => item.totalPrice)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "판매 현황",
              data: prices,
              backgroundColor: "#aee123",
              borderColor: "#aee123",
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
        <Bar options={options} data={chartData} width={350} height={300} />
    </div>
  )
}

export default AdminCont2Chart;