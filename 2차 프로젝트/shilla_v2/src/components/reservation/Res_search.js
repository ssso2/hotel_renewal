import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // react-date-range 메인 스타일
import "react-date-range/dist/theme/default.css"; // react-date-range 테마 파일
import { useNavigate } from "react-router-dom";
import DateRangePicker from "./DateRangePicker";
import "./res_search.scss";

function Res_search() {
  const navigate = useNavigate();

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [popupAdultCount, setPopupAdultCount] = useState(0); // 팝업에서 사용하는 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업에서 사용하는 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(0); // 확인버튼을 누를 때의 성인 수
  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인버튼을 누를 때의 어린이 수
  const [isDateRangePickerVisible, setIsDateRangePickerVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 팝업 상태 토글
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // 팝업이 열릴 때 현재 확인된 값을 팝업 초기 값으로 설정
    if (!isPopupVisible) {
      setPopupAdultCount(confirmedAdultCount);
      setPopupChildrenCount(confirmedChildrenCount);
    }
  };

  // DateRangePicker 상태 토글
  const toggleDateRangePicker = () => {
    setIsDateRangePickerVisible(!isDateRangePickerVisible);
  };

  // 날짜 변경 핸들러
  const handleDateChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  // 확인 버튼 핸들러
  const handleConfirm = () => {
    setConfirmedAdultCount(popupAdultCount);
    setConfirmedChildrenCount(popupChildrenCount);
    setIsPopupVisible(false); // 팝업 닫기
  };

  // 검색 핸들러
  const handleSearch = () => {
    console.log("검색 ", {
      checkInDate,
      checkOutDate,
      confirmedAdultCount,
      confirmedChildrenCount,
    });
  };

  return (
    <div className="container">
      <section className="reservation">
        <div className="center">
          <h2>날짜, 인원 선택</h2>
          <div className="reservation-wrap">
            <div className="date-wrap">
              CHECK IN/OUT
              <DateRangePicker
                onDateChange={handleDateChange}
                showPicker={isDateRangePickerVisible}
                togglePicker={toggleDateRangePicker}
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
              onClick={handleSearch}
            >
              검색
            </button>
            <div
              className={`reservation-popup ${isPopupVisible ? "on" : ""}`}
            >
              <form action="">
                <ul className="popup-left">
                  <li>
                    <div className="tit">객실 1</div>
                    <div className="count-wrap adult">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() =>
                          setPopupAdultCount((prev) => Math.max(prev - 1, 0)) // 0 보다 작지 않도록
                        }
                      >
                        <span className="blind">숫자 내리기</span>
                      </button>
                      <p className="adult">
                        성인 <span className="num">{popupAdultCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => setPopupAdultCount((prev) => prev + 1)}
                      >
                        <span className="blind">숫자 올리기</span>
                      </button>
                    </div>
                    <div className="count-wrap children">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() =>
                          setPopupChildrenCount((prev) => Math.max(prev - 1, 0))
                        }
                      >
                        <span className="blind">숫자 내리기</span>
                      </button>
                      <p className="children">
                        어린이 <span className="num">{popupChildrenCount}</span>
                      </p>
                      <button
                        type="button"
                        className="btn-up"
                        onClick={() => setPopupChildrenCount((prev) => prev + 1)}
                      >
                        <span className="blind">숫자 올리기</span>
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
              <button
                className="close-btn"
                onClick={() => setIsPopupVisible(false)}
              >
                <span className="blind">닫기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Res_search;
