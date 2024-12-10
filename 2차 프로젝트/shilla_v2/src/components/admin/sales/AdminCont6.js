import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminCont6 = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    const [rooms, setRooms] = useState([]);

    // 연도, 월, 호수 데이터를 불러오는 함수
    useEffect(() => {
        const fetchFilterData = async () => {
            try {
                const response = await axios.get("http://localhost:5002/bk/sales/filters");
                setYears(response.data.years);
                setMonths(response.data.months);
                setRooms(response.data.rooms);
            } catch (error) {
                console.error("필터 데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchFilterData();
    }, []);

    // 선택된 필터에 맞는 매출 데이터를 불러오는 함수
    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await axios.get("http://localhost:5002/bk/sales", {
                    params: {
                        year: selectedYear,
                        month: selectedMonth,
                        room: selectedRoom,
                    },
                });
                setFilteredData(response.data);
                setTotalPrice(response.data.reduce((acc, curr) => acc + curr.tot_price, 0));
            } catch (error) {
                console.error("매출 데이터를 불러오는 중 오류 발생:", error);
            }
        };

        fetchSalesData();
    }, [selectedYear, selectedMonth, selectedRoom]);

    return (
        <div className="cont cont6">
            <h2>매출현황</h2>

            {/* 필터링 드롭다운 */}
            <div>
                <label>연도 선택:</label>
                <select onChange={(e) => setSelectedYear(e.target.value)} value={selectedYear}>
                    <option value="">전체</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}년</option>
                    ))}
                </select>

                <label>월 선택:</label>
                <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth} disabled={!selectedYear}>
                    <option value="">전체</option>
                    {months.map((month) => (
                        <option key={month} value={month}>{month}월</option>
                    ))}
                </select>

                <label>호수 선택:</label>
                <select onChange={(e) => setSelectedRoom(e.target.value)} value={selectedRoom} disabled={!selectedMonth}>
                    <option value="">전체</option>
                    {rooms.map((room) => (
                        <option key={room} value={room}>{room}호</option>
                    ))}
                </select>
            </div>

            {/* 매출 데이터 표 */}
            <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>예약 ID</th>
                        <th>호수</th>
                        <th>시작 날짜</th>
                        <th>종료 날짜</th>
                        <th>취소 여부</th>
                        <th>금액</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.reservation_id}</td>
                            <td>{data.room_id}</td>
                            <td>{data.start_date}</td>
                            <td>{data.end_date}</td>
                            <td>{data.cancel === '0' ? 'N' : 'Y'}</td>
                            <td>{data.tot_price.toLocaleString()}원</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5"><strong>합계</strong></td>
                        <td><strong>{totalPrice.toLocaleString()}원</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default AdminCont6;
