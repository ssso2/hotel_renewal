import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminCont2.scss";

const AdminCont2 = () => {
    const [rooms, setRooms] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false); // 업데이트 중 여부
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열기/닫기
    const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 방

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

    const fetchReservation = (productId) => {
        axios.get(`http://localhost:5002/bk/reservations/${productId}`)
            .then(response => {
                console.log('Fetched reservation:', response.data);  // 예약 데이터 확인
                setSelectedRoom(response.data);  // 예약 정보를 모달에 저장
                setIsModalOpen(true);  // 모달 열기
            })
            .catch(error => {
                console.error("예약 정보를 가져오는 중 오류 발생:", error);
            });
    };
    

    useEffect(() => {
        fetchRooms();  // 컴포넌트가 마운트될 때 객실 목록을 가져옵니다.
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

    // 선택한 방을 모달에 표시하기 위한 함수
    const openModal = (room) => {
        console.log('Selected room:', room);  // 선택된 방 확인
        setSelectedRoom(null);  // 이전 방 정보 초기화
        fetchReservation(room.product_id);  // 예약 정보 가져오기
        setIsModalOpen(true);  // 모달 열기
    };
    

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
        setSelectedRoom(null);  // 선택된 방 초기화
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
                            <div className="cell">
                                <button onClick={() => openModal(room)}>
                                    {room.room_id}
                                </button>
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
            {isModalOpen && selectedRoom && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h3>예약 정보</h3>
                        <p><strong>예약 ID:</strong> {selectedRoom.reservation_id}</p>  {/* reservation_id 출력 */}
                        {/* <p><strong>예약자 이름:</strong> {selectedRoom.customer_name}</p>
                        <p><strong>예약 날짜:</strong> {selectedRoom.reservation_date}</p>
                        <p><strong>상태:</strong> {selectedRoom.status === 1 ? "사용중" : "취소"}</p>
                        <p><strong>체크인:</strong> {selectedRoom.check_in_date}</p>
                        <p><strong>체크아웃:</strong> {selectedRoom.check_out_date}</p> */}
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminCont2;
