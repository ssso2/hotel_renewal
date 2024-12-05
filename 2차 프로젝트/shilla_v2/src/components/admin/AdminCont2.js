import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../sub/Pagination";
import "./AdminCont2.scss";


const AdminCont2 = () => {
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수
    const navigate = useNavigate();

    // 객실 목록 가져오는 함수
    const fetchRooms = () => {
        axios
            .get("http://localhost:5002/bk/roomManagement")
            .then((response) => {
                setRooms(response.data);
            })
            .catch((error) => {
                console.error("객실 데이터를 가져오는 중 오류 발생:", error);
            });
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    // 현재 페이지에 해당하는 데이터 계산
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRooms = rooms.slice(startIndex, startIndex + itemsPerPage);

    // 페이지 변경 핸들러
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // 호수 클릭 시 RoomManDetail로 이동
    const navigateToDetail = (roomId) => {
        navigate(`/roomManDetail/${roomId}`);
    };

    return (
        <div className="cont cont2">
            <h2>객실 관리</h2>
            <div className="table">
                <div className="table-header">
                    <div className="table-row">
                        <div className="cell">호수</div>
                        <div className="cell">특이사항</div>
                        <div className="cell">체크인</div>
                        <div className="cell">타입</div>
                        <div className="cell">침대</div>
                        <div className="cell">금액</div>
                        <div className="cell">최대인원</div>
                    </div>
                </div>
                <div className="table-body">
                    {currentRooms.map((room) => (
                        <div key={room.room_id} className="table-row">
                            <div
                                className="cell clickable"
                                onClick={() => navigateToDetail(room.room_id)}
                            >
                                <button>{room.room_id}</button>
                            </div>
                            <div className="cell">{room.description}</div>
                            <div className="cell">{room.check_in ? "체크인" : "체크아웃"}</div>
                            <div className="cell">{room.room_type}</div>
                            <div className="cell">{room.bed_type}</div>
                            <div className="cell">{room.day_price}</div>
                            <div className="cell">{room.max_occupancy}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 페이지네이션 */}
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(rooms.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default AdminCont2;
