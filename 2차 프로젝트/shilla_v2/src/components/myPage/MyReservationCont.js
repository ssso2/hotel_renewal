import React, { useEffect, useState } from "react";
import axios from "axios";

const MyReservationCont = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null); // 에러 상태 추가
  const today = new Date();

  const memberId = sessionStorage.getItem("id"); // 세션에서 member_id 가져오기

  useEffect(() => {
    if (memberId) {
      console.log("memberId : ", memberId);

      const fetchReservations = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5002/bk/myPage/myReservation",
            { params: { member_id: memberId } }
          );
          console.log("API 응답 데이터:", response.data); // 응답 데이터 확인
          setReservations(response.data); // 예약 내역 설정
        } catch (error) {
          console.error("예약 데이터를 가져오지 못했습니다.", error);
          setError("예약 데이터를 가져오지 못했습니다.");
        }
      };

      fetchReservations();
    }
  }, [memberId]);

  const handleCancel = (reservationId) => {
    alert(`예약 ID ${reservationId}가 취소되었습니다.`);
    // 추가적으로 서버에 예약 취소 요청을 보낼 수 있습니다.
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!reservations.length) {
    return <div>예약 내역이 없습니다</div>;
  }


  return (
    <div className="reservate-info" id="reservate-info">
      <div className="reservation">
        <div className="info-title">나의 예약내역</div>
        {reservations.map((res) => {
          const today = new Date(); // 현재 날짜
          const endDate = new Date(res.end_date); // 예약 종료 날짜

          return (
            <div className="reser-room" key={res.reservation_id}>
              <div className="contents-wrap">
                <div className="room">
                  <img
                    src={`/img/sub/${res.offer_name || res.room_type}.jpg`}
                    alt={res.offer_name || res.room_type}
                  />
                </div>
                <div className="reservation-info">
                  <div className="info-item">
                    패키지명 : {res.offer_name || "N/A"}
                  </div>
                  <div className="info-item">
                    객실 타입 : {res.room_type || "N/A"}
                  </div>
                  <div className="info-item">
                    예약일자 : {new Date(res.start_date).toLocaleDateString()} ~{" "}
                    {new Date(res.end_date).toLocaleDateString()}
                  </div>
                  <div className="info-item">체크아웃 시간 : 11:00</div>
                  <div className="info-item">
                    이용 인원 : {res.adult_cnt}명(성인), {res.child_cnt}명(아동)
                  </div>
                  <div className="info-item">
                    결제 금액 : {res.tot_price.toLocaleString()}원
                  </div>
                </div>
              </div>
              {/* 예약취소 버튼 조건 */}
              {endDate > today && (
                <button className="cancle-btn">예약취소</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReservationCont;
