
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Legend,
	PointElement,
	LineElement,
} from "chart.js";
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Legend,
	PointElement,
	LineElement
);

import React from 'react';

function AdminChart(props) {
    return (
        <div>
            <h2>이건 테스트내용</h2>
        </div>
    );
}

export default AdminChart;