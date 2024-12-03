import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminCont2.scss";

const AdminCont2 = () => {
    const [rooms, setRooms] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false); // 업데이트 중 여부.(무한루프 방지)

    const fetchRooms = () => {
        axios.get("http://localhost:5002/bk/roomManagement")
            .then(response => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error("객실관리 데이터를 가져오는 중 오류 발생:", error);
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
                            <div className="cell">{room.room_id}</div>
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
        </div>
    );
};

export default AdminCont2;
