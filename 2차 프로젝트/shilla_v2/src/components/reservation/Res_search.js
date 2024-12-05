import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "./DateRangePicker";
import PackageRoomItem from "./PackageRoomItem";
import OneRoomItem from "./OneRoomItem";
import "../../scss/res_search.scss";

function Res_search() {
  const navigate = useNavigate();

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
  const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
  const [availablePackages, setAvailablePackages] = useState([]); // 예약 가능한 패키지 목록
  const [availableRooms, setAvailableRooms] = useState([]); // 예약 가능한 객실 목록
  const [showPicker, setShowPicker] = useState(false); // 날짜 선택기 표시 여부
  const [tab, setTab] = useState("package"); // 탭 상태
  const [popupAdultCount, setPopupAdultCount] = useState(0); // 팝업 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(0); // 확인된 성인 수
  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인된 어린이 수
  const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 표시 여부

  const togglePicker = () => setShowPicker(!showPicker);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    if (!isPopupVisible) {
      setPopupAdultCount(confirmedAdultCount);
      setPopupChildrenCount(confirmedChildrenCount);
    }
  };

  const handleDateChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  const handleConfirm = () => {
    setConfirmedAdultCount(popupAdultCount);
    setConfirmedChildrenCount(popupChildrenCount);
    setIsPopupVisible(false);
  };

  const incrementCount = (type) => {
    if (type === "adult") setPopupAdultCount((prev) => prev + 1);
    if (type === "children") setPopupChildrenCount((prev) => prev + 1);
  };

  const decrementCount = (type) => {
    if (type === "adult" && popupAdultCount > 0) setPopupAdultCount((prev) => prev - 1);
    if (type === "children" && popupChildrenCount > 0) setPopupChildrenCount((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className="reservation">
        <div className="center">
          <h2>날짜, 인원 선택</h2>
          <div className="reservation-wrap">
            <div className="date-wrap">
              <h4>CHECK IN / OUT</h4>
              <DateRangePicker
                onDateChange={handleDateChange}
                showPicker={showPicker}
                togglePicker={togglePicker}
              />
            </div>
            <div className="room-wrap" onClick={togglePopup}>
              <div className="box room">
                <span className="tit">ROOM</span>
                <span className="num">1</span>
              </div>
              <div className="box adult">
                <span className="tit">ADULT</span>
                <span className="num">{confirmedAdultCount}</span>
              </div>
              <div className="box children">
                <span className="tit">CHILDREN</span>
                <span className="num">{confirmedChildrenCount}</span>
              </div>
            </div>
            <button
              type="button"
              className="reservation-search-btn"
              onClick={() => alert("검색 기능")}
            >
              검색
            </button>
          </div>

          {/* 팝업 */}
          {isPopupVisible && (
            <div className="reservation-popup">
              <form action="">
                <ul className="popup-left">
                  <li>
                    <div className="tit">객실 1</div>
                    <div className="count-wrap adult">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() => decrementCount("adult")}
                      >
                        -
                      </button>
                      <p className="adult">
                        성인 <span className="num">{popupAdultCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => incrementCount("adult")}
                      >
                        +
                      </button>
                    </div>
                    <div className="count-wrap children">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() => decrementCount("children")}
                      >
                        -
                      </button>
                      <p className="children">
                        어린이 <span className="num">{popupChildrenCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => incrementCount("children")}
                      >
                        +
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="popup-right">
                  <p className="desc">* 어린이 기준 : 37개월 - 12세</p>
                  <button type="button" onClick={handleConfirm}>
                    확인
                  </button>
                </div>
              </form>
              <button className="close-btn" onClick={() => setIsPopupVisible(false)}>
                X
              </button>
            </div>
          )}
        </div>

        <div className="tabs">
          <button onClick={() => setTab("package")}>
            패키지 {availablePackages.length > 0 ? `(${availablePackages.length})` : ""}
          </button>
          <button onClick={() => setTab("room")}>
            객실 {availableRooms.length > 0 ? `(${availableRooms.length})` : ""}
          </button>
        </div>

        <div className="content-list">
          {tab === "package" ? (
            <div className="package-list">
              <h3>패키지</h3>
              {availablePackages.map((pkg) => (
                <PackageRoomItem key={pkg.offer_id} packageData={pkg} />
              ))}
            </div>
          ) : (
            <div className="room-list">
              <h3>객실</h3>
              {availableRooms.map((room) => (
                <OneRoomItem key={room.room_id} roomData={room} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Res_search;
