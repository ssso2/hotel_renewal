import React, { useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import AdminTabMenu from "../AdminTabMenu";
import AdminCont4 from "./AdminCont4";
import "../../../scss/admin.scss";

const AdminReservation = () => {
  const [todayReservations, setTodayReservations] = useState([]);

  // 날짜에 하루를 더하는 함수
  const addOneDay = (date) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1); // 하루를 더함
    return newDate; // 날짜 객체를 반환
  };
  useEffect(() => {
    document.title = "신라호텔:관리자";

    // 오늘 날짜 구하기
    const today = addOneDay(new Date().toISOString().split('T')[0]);
    
    fetch()
  }, []);

  return (
    <>
      <Header />
      <div className="admin-wrap">
        <div className="center">
          <AdminTabMenu />
          <div className="tab-contents">
            <AdminCont4 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminReservation;
