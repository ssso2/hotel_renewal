import React from "react";
import AdminCont1Chart from './AdminCont1Chart'
import AdminCont2Chart from './AdminCont2Chart'
import AdminCont3Chart from './AdminCont3Chart'
import AdminCont4Chart from './AdminCont4Chart'
import '../../../scss/admin.scss'

const AdminCont1 = () => {
    return (
        <div className="cont cont1 on">
            <h2>대시보드</h2>
            <div className="chart-group">
                <div className="chart-wrap">
                    <h3>방문자 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont1Chart />
                        (차트, 그래프 들어갈 자리)
                    </div>
                </div>
                <div className="chart-wrap">
                    <h3>매출 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont2Chart />
                        (차트, 그래프 들어갈 자리)
                    </div>
                </div>
                <div className="chart-wrap">
                    <h3>객실별 판매 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont3Chart />
                        (차트, 그래프 들어갈 자리)
                    </div>
                </div>
                <div className="chart-wrap">
                    <h3>객실별 취소 현황(월별 비교)</h3>
                    <div className="chart">
                        <AdminCont4Chart />
                        (차트, 그래프 들어갈 자리)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCont1;