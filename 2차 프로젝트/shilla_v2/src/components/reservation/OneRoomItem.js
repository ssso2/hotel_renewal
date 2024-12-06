import React from "react";
import '../../scss/oneRoomItem.scss'

function OneRoomItem({ roomData }) {
  return (
    <div className="room-item">
      <h4>{roomData.room_type}</h4>
      <p>가격: {roomData.day_price}원</p>
      {/* <p>최대 수용 인원: {roomData.max_occupancy}명</p> */}
      <div className="room-details">
        {/* <p>체크인: {roomData.check_in}</p>
        <p>청소 상태: {roomData.clean}</p> */}
      </div>
    </div>
  );
}

export default OneRoomItem;