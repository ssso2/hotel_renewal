import React, { useEffect, useState } from "react";
import axios from "axios";

const MyReservationCont = () => {
  const [reservations, setReservations] = useState([]);
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
          console.log("API 응답 데이터:", response.data);  // 응답 데이터 확인
          setReservations(response.data);  // 예약 내역 설정
          setLoading(false);  // 로딩 완료
        } catch (error) {
          console.error("예약 데이터를 가져오지 못했습니다.", error);
          setError("예약 데이터를 가져오지 못했습니다.");
          setLoading(false);
        }
      };

      fetchReservations();
    }
  }, [memberId]);

  return (
    <div className="reservate-info" id="reservate-info">
      <div className="reservation">
        <div className="info-title">나의 예약내역</div>
        {reservations.length > 0 ? (
          reservations.map((res) => (
            <div className="reser-room" key={res.reservation_id}>
              <div className="contents-wrap">
                <div className="room">
                  {/* <img
                    src={`../../img/sub/${
                      res.offer_name || res.room_type
                    }.jpg`}
                    alt={res.offer_name || res.room_type}
                  /> */}
                </div>
                <div className="reservation-info">
                  <div className="info-item">
                    패키지명: {res.offer_name || "N/A"}
                  </div>
                  <div className="info-item">
                    객실명: {res.room_type || "N/A"}
                  </div>
                  <div className="info-item">
                    예약일자: {res.start_date} ~ {res.end_date}
                  </div>
                  <div className="info-item">체크아웃 시간: 11:00</div>
                  <div className="info-item">
                    이용 인원: {res.adult_cnt}명(성인), {res.child_cnt}명(아동)
                  </div>
                </div>
              </div>
              <button className="cancle-btn">예약취소</button>
            </div>
          ))
        ) : (
          <p>예약 내역이 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default MyReservationCont;