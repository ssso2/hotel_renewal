import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const options = {
  responsive: true,
  scales: {
    x: {
      title: {
        display: true,
        text: "월별",
        font: {
          size: 14,
        },
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        // context.chart.data.labels를 사용하여 해당 데이터의 레이블을 가져옵니다.
        return context.chart.data.labels[context.dataIndex];
      },
      color: '#000', // 데이터 라벨 색상 설정
      // anchor: 'end',
      // align: 'start',
      offset: 25,
    },
    legend: {      
      display: false,
    },
  },
};

const AdminCont2Chart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/bk/admin/dashboard/price');
        const labels = response.data.map((item) => item.dateCalc);
        const prices = response.data.map((item) => item.totalPrice);
        
        // 다양한 색상 배열 생성
        const backgroundColors = [
          "#ECEBDE", "#D7D3BF", "#C9C19F", "#FDDBBB", "#B6A28E", "#E4E0E1",
          "#ECEBDE", "#D7D3BF", "#C9C19F", "#FDDBBB", "#B6A28E", "#E4E0E1",
        ];

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "매출금액 판매 현황",
              data: prices,
              backgroundColor: backgroundColors,
              borderColor: "#fff",
              fill: true,
              tension: 0.2,
            },
          ],
        });
      } catch (error) {
        console.error("데이터 가져오기 실패", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Doughnut options={options} data={chartData} width={350} height={350} />
    </div>
  );
};

export default AdminCont2Chart;
