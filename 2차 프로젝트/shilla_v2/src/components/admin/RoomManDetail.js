import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomManDetail = () => {
    const { id } = useParams(); // URL에서 room_id 가져오기
    const [roomDetails, setRoomDetails] = useState(null); // 방 정보 상태
    const [reservations, setReservations] = useState([]); // 예약 정보 상태
    const [error, setError] = useState(""); // 오류 메시지 상태

    // 방 상세 정보 가져오기
    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5002/bk/roomManagement/detail/${id}` // 방 정보 API 호출
                );
                setRoomDetails(response.data);
            } catch (err) {
                console.error("방 정보 가져오는 중 오류 발생:", err);
                setError("방 정보를 가져올 수 없습니다.");
            }
        };

        fetchRoomDetails();
    }, [id]);

    // 예약 정보 가져오기
    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5002/bk/roomManagement/reservations/${id}` // 예약 정보 API 호출
                );
                setReservations(response.data);
            } catch (err) {
                console.error("예약 정보 가져오는 중 오류 발생:", err);
                setError("예약 정보를 가져올 수 없습니다.");
            }
        };

        fetchReservations();
    }, [id]);

    if (error) {
        return <div>{error}</div>; // 오류 메시지 출력
    }

    if (!roomDetails) {
        return <div>방 정보를 불러오는 중입니다...</div>; // 로딩 상태
    }

    return (
        <div>
            <h2>방 상세 정보</h2>
            <p><strong>ID:</strong> {roomDetails.room_id}</p>
            <p><strong>설명:</strong> {roomDetails.description}</p>
            <p><strong>타입:</strong> {roomDetails.room_type}</p>
            <p><strong>금액:</strong> {roomDetails.day_price}</p>
            <p><strong>최대 인원:</strong> {roomDetails.max_occupancy}</p>

            <h2>예약 정보</h2>
            {reservations.length > 0 ? (
                reservations.map((reservation) => (
                    <div key={reservation.reservation_id}>
                        <p><strong>예약 ID:</strong> {reservation.reservation_id}</p>
                        <p><strong>시작일:</strong> {reservation.start_date}</p>
                        <p><strong>종료일:</strong> {reservation.end_date}</p>
                        <p><strong>취소 여부:</strong> {reservation.Cancel === "0" ? "N" : "Y"}</p>
                        <p><strong>가격:</strong> {reservation.prod_price}</p>
                        <br />
                    </div>
                ))
            ) : (
                <p>예약 정보가 없습니다.</p>
            )}
        </div>
    );
};

export default RoomManDetail;
