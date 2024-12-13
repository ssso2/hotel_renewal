import React from "react";
import '../../scss/oneRoomItem.scss'
import { useNavigate } from "react-router-dom";

function OneRoomItem({ roomData, checkInDate, checkOutDate }) {
  const navigate = useNavigate()
  const memberId = sessionStorage.getItem("id");

  console.log(roomData, checkInDate, checkOutDate)
  
  const handleReservation = () => {

    if (!memberId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }
    
    // 예약하기 버튼 클릭 시, ResMainAllRoomDetail.js 페이지로 전달
    if (checkInDate && checkOutDate) {
      navigate("/reserve/detailallroom", {
        state: {
          checkInDate,
          checkOutDate,
          dayPrice: roomData.day_price,
          roomType: roomData.room_type,
          productId: roomData.product_id,
        },
      });
      console.log(checkInDate, checkOutDate, roomData.day_price, roomData.room_type, roomData.product_id)
    }else{
      alert("체크인 및 체크아웃 날짜를 선택해주세요")
    }
  }
  
  return (
    <div className="room-item">
      <h4>{roomData.room_type}</h4>
      <p>가격: {roomData.day_price}원</p>
      <div className="room-details">
      <button onClick={handleReservation}>예약하기</button>
      </div>
    </div>
  );
}

export default OneRoomItem;