import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import AdminTabMenu from "../AdminTabMenu";
import AdminCont4 from "./AdminCont4";
import "../../../scss/admin.scss";

const AdminReservation = () => {
  const [todayReservations, setTodayReservations] = useState([]);

  useEffect(() => {
    document.title = "신라호텔: 관리자";

    // 오늘 날짜 가져오기
    const today = new Date().toISOString().split("T")[0];  // 오늘 날짜만 사용

    // DB에서 오늘 예약 정보를 가져오는 API 호출
    axios
      .get(`http://192.168.0.13:5002/bk/admin/reservation?date=${today}`)
      .then((response) => {
        setTodayReservations(response.data);  // 서버 응답 데이터 설정
      })
      .catch((error) => {
        console.error("오늘 예약 fetching x :", error);
      });
  }, []);

  return (
    <> 
      <Header />
      <div className="admin-wrap">
        <div className="center">
          <AdminTabMenu />
          <div className="tab-contents">
            <AdminCont4 todayReservations={todayReservations} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminReservation;
