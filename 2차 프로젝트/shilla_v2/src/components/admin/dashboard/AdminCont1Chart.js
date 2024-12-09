import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// Chart.js import 불러오기


// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
};


// chart1
const AdminCont1Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/person')
        console.log(response.data)

        const labels =  response.data.map((item) => item.dateCalc)
        console.log("labels" , labels)
        
        const personCnt = response.data.map((item) => item.personCnt)
        

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "방문자 수",
              data: personCnt,
              backgroundColor: "#0CD3FF",
              borderColor: "#0CD3FF",
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
      <h2>방문자 현황</h2>
      <Line options={options} data={chartData} />
    </div>
  )
}

export default AdminCont1Chart;