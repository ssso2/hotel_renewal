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
  type: 'line',
  options: {
    responsive: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month',
          color: '#911',
          // padding: {top: 20, left: 0, right: 0, bottom: 0}
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
          color: '#191',
          // padding: {top: 10, left: 0, right: 0, bottom: 0}
        }
      }
    }
  },
};

const AdminCont3Chart = () => {
  const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/sell')
        
        const labels =  response.data.map((item) => item.room_type)
        console.log("labels" , labels)
        
        const roomSell = response.data.map((item) => item.total_price)
        console.log(roomSell)

        const monthly = response.data.map((item) => item.month)
        console.log(monthly)

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "객실별 매출 현황",
              data: roomSell,
              backgroundColor: "#ffb1c1",
              borderColor: "#ff6384",
              fill: false,
              tension: 0.1,
            },
            // {
            //   label: "월별 현황",
            //   data: monthly,
            //   backgroundColor: "#ffb1c1",
            //   borderColor: "#ff6384",
            //   fill: false,
            //   tension: 0.1,
            // },
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