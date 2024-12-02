import React from "react";
import '../../scss/admin.scss'

const AdminCont1 = () => {
    return (
        <div className="cont cont1 on">
            <h2>대시보드</h2>
            <div className="chart-group">
                <div className="chart-wrap">
                    <h3>방문자 현황(월별 비교)</h3>
                    <div className="chart">(차트, 그래프 들어갈 자리)</div>
                </div>
                <div className="chart-wrap">
                    <h3>매출 현황(월별 비교)</h3>
                    <div className="chart">(차트, 그래프 들어갈 자리)</div>
                </div>
                <div className="chart-wrap">
                    <h3>객실별 판매 현황(월별 비교)</h3>
                    <div className="chart">(차트, 그래프 들어갈 자리)</div>
                </div>
                <div className="chart-wrap">
                    <h3>객실별 취소 현황(월별 비교)</h3>
                    <div className="chart"></div>
                </div>
            </div>
        </div>
    );
};

export default AdminCont1;
