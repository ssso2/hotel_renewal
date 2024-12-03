import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "./DateRangePicker";
import "./res_search.scss";
import TabContentItem from "./TabContentItem";

function Res_search() {
  const navigate = useNavigate();

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
  const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
  const [popupAdultCount, setPopupAdultCount] = useState(0); // 팝업에서 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업에서 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(0); // 확인된 성인 수

  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인된 어린이 수
  const [isDateRangePickerVisible, setIsDateRangePickerVisible] = useState(false); // 날짜 선택기 표시 여부
  const [isPopupVisible, setIsPopupVisible] = useState(false); // 팝업 표시 여부
  const [isSearchClicked, setIsSearchClicked] = useState(false);  // 검색 버튼 클릭 여부 (탭 필터 표시)

  // tab 상태관리
  const [selectedTab, setSelectedTab] = useState("package"); // 현재 선택된 탭
  const [selectedSort, setSelectedSort] = useState("낮은 가격 순"); // 선택된 정렬 기준
  const [selectedKeywords, setSelectedKeywords] = useState([]); // 선택된 키워드 목록

   // 팝업 상태 토글 팝업을 열고 닫는 함수
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    if (!isPopupVisible) {
      setPopupAdultCount(confirmedAdultCount);
      setPopupChildrenCount(confirmedChildrenCount);
    }
  };

  // 날짜 범위 선택기 상태 토글
  const toggleDateRangePicker = () => {
    setIsDateRangePickerVisible(!isDateRangePickerVisible);
  };

  // 날짜 변경 핸들러 (날짜 범위가 변경되면 호출)
  const handleDateChange = ({ startDate, endDate }) => {
    setCheckInDate(startDate);
    setCheckOutDate(endDate);
  };

  // 확인 버튼 핸들러 (성인/어린이 수를 확정하고 팝업을 닫음)
  const handleConfirm = () => {
    setConfirmedAdultCount(popupAdultCount);
    setConfirmedChildrenCount(popupChildrenCount);
    setIsPopupVisible(false);
  };

  // 검색 버튼 핸들러 (검색 버튼을 클릭하면 검색 내용을 콘솔에 출력하고 필터를 표시)
  const handleSearch = () => {
    console.log("검색 ", {
      checkInDate,
      checkOutDate,
      confirmedAdultCount,
      confirmedChildrenCount,
    });
    setIsSearchClicked(true); // 검색 후 필터를 보이도록 설정
  };

  // 탭 전환 핸들러 (탭을 클릭할 때 호출되어 선택된 탭을 설정)
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // 정렬 변경 핸들러 (정렬 기준을 변경)
  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  // 키워드 변경 핸들러 (체크박스를 클릭하여 선택된 키워드 목록을 갱신)
  const handleKeywordChange = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword) ? prev.filter((item) => item !== keyword) : [...prev, keyword]
    );
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
            <div className={`reservation-popup ${isPopupVisible ? "on" : ""}`}>
              <form>
                <ul className="popup-left">
                  <li>
                    <div className="tit">객실 1</div>
                    <div className="count-wrap adult">
                      <button
                        type="button"
                        className="btn-down"
                        onClick={() => setPopupAdultCount((prev) => Math.max(prev - 1, 0))}
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
                        onClick={() => setPopupChildrenCount((prev) => Math.max(prev - 1, 0))}
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

        {/* 검색 결과 */}
        <div className={`search-results-wrap ${isSearchClicked ? "on" : ""}`}>
          <div className="tab-wrap">
            <ul className="tab">
              <li className="on">패키지 (<em className="num">5</em>)</li>
              <li>객실 (<em className="num">6</em>)</li>
            </ul>
            <div className="keyword-sorting">
              <div className="keyword-wrap">
                <button className="keyword-btn">키워드</button>
              </div>
              <div className="sorting-wrap">
                <div className="selected">낮은 가격 순</div>
                <ul className="select-sort">
                  <li className="on">낮은 가격 순</li>
                  <li>높은 가격 순</li>
                  <li>최신 순</li>
                  <li>인기 순</li>
                  <li>추천 순</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 키워드 필터 */}
          <div className="keyword-box">
            <form>
              <div className="top-wrap">
                <span>키워드 검색</span>
                <button type="reset">선택해제</button>
              </div>
              <div className="bottom-wrap">
                <ul className="chk-boxs">
                  <li>
                    <input type="checkbox" name="keyword" id="breakfast" value="breakfast" />
                    <label htmlFor="breakfast">조식</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="lounge" />
                    <label htmlFor="lounge">라운지 혜택</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="special-day" />
                    <label htmlFor="special-day">기념일</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="outdoor-pool" />
                    <label htmlFor="outdoor-pool">야외수영장</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="adults-3" />
                    <label htmlFor="adults-3">성인3인</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="more-than-2day" />
                    <label htmlFor="more-than-2day">2박이상</label>
                  </li>
                  <li>
                    <input type="checkbox" name="keyword" id="kids" />
                    <label htmlFor="kids">키즈</label>
                  </li>
                </ul>
                <button type="button">적용</button>
              </div>
            </form>
          </div>

          {/* 탭 내용 */}
          <TabContentItem/>
          <TabContentItem/>
        </div>
      </section>
    </div>
  );
}

export default Res_search;
