import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminCont2.scss";

const AdminCont2 = () => {
    const [rooms, setRooms] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false); // 업데이트 중 여부(무한루프방지)
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기
    const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 방 예약 정보

    // 객실 목록을 가져오는 함수
    const fetchRooms = () => {
        axios.get("http://localhost:5002/bk/roomManagement")
            .then(response => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error("객실관리 데이터를 가져오는 중 오류 발생:", error);
            });
    };

    const fetchReservation = (roomId) => {
        axios.get(`http://localhost:5002/bk/roomManagement/reservations/${roomId}`)
            .then(response => {
                console.log('Fetched reservation:', response.data);  
                setSelectedRoom(response.data.length ? response.data : null); 
                setIsModalOpen(true);  
            })
            .catch(error => {
                console.error("예약 정보를 가져오는 중 오류 발생:", error);
                setSelectedRoom(null);  
                setIsModalOpen(true); 
            });
    };

    useEffect(() => {
        fetchRooms(); 
    }, []);

    const handleUpdate = (roomId, updatedField) => {
        if (isUpdating) return;

        setIsUpdating(true);

        axios
            .post(`http://localhost:5002/bk/roomManagement/update`, { roomId, ...updatedField })
            .then(() => {
                alert("수정되었습니다.");
                fetchRooms();
            })
            .catch(error => {
                console.error("수정 요청 중 오류 발생:", error);
            })
            .finally(() => {
                setIsUpdating(false);
            });
    };

    const openModal = (room) => {
        console.log('Selected room:', room);  
        setSelectedRoom(null);  
        fetchReservation(room.room_id);  
        setIsModalOpen(true);  
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRoom(null); 
    };

    const handleModalBackgroundClick = (e) => { // 바깥 영역 클릭하면 모달 닫기
        if (e.target === e.currentTarget) {
            closeModal(); 
        }
    };

    return (
        <div className="cont cont2">
            <h2>객실관리</h2>
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
                    {rooms.map((room, index) => (
                        <div key={index} className="table-row">
                            <div className="cell" onClick={() => openModal(room)}>
                                <button> {room.room_id} </button>
                            </div>
                            <div className="cell">
                                <input
                                    type="text"
                                    defaultValue={room.description}
                                    onBlur={(e) =>
                                        handleUpdate(room.room_id, { description: e.target.value })
                                    }
                                />
                            </div>
                            <div className="cell">
                                <select
                                    defaultValue={room.check_in}
                                    onChange={(e) =>
                                        handleUpdate(room.room_id, { check_in: e.target.value })
                                    }
                                >
                                    <option value="0">체크아웃</option>
                                    <option value="1">체크인</option>
                                </select>
                            </div>
                            <div className="cell">{room.room_type}</div>
                            <div className="cell">{room.bed_type}</div>
                            <div className="cell">{room.day_price}</div>
                            <div className="cell">{room.max_occupancy}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 모달 팝업 */}
            {isModalOpen && (
                <div className="modal" onClick={handleModalBackgroundClick}>
                    <div className="modal-content">
                        {selectedRoom === null ? (
                            <p>예약 내역이 없습니다.</p> 
                        ) : (
                            <>
                                <h2>{selectedRoom[0].room_id}호 예약 내역</h2>
                                {selectedRoom.map((reservation, index) => (
                                    <div key={index}>
                                        <p><strong>예약 ID:</strong> {reservation.reservation_id}</p>
                                        <p><strong>예약 시작일:</strong> {formatDate(reservation.start_date)}</p> {/* 날짜 형식 변환 */}
                                        <p><strong>예약 종료일:</strong> {formatDate(reservation.end_date)}</p> {/* 날짜 형식 변환 */}
                                        <p><strong>예약취소여부:</strong> {reservation.Cancel === '0' ? 'N' : 'Y'}</p>
                                        <br />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// 날짜 포맷
const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 9); // 한국 시간 (UTC+9)
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`; 
};

export default AdminCont2;
