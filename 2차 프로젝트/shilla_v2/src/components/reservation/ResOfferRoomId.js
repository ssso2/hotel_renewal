import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useParams } from "react-router-dom";
import OfferDateRangePicker from "./OfferDateRangePicker";
import PackageRoomItem from "./PackageRoomItem"; // 패키지 컴포넌트
import OneRoomItem from "./OneRoomItem"; // 객실 컴포넌트
import "../../scss/res_search.scss";

function ResOfferRoomId(props) {
  const navigate = useNavigate();
  const { product_id } = useParams();
  // const { id } = useParams();
  console.log("product_id : ", product_id);

  // 상태 관리
  const [checkInDate, setCheckInDate] = useState(null); // 체크인 날짜
  const [checkOutDate, setCheckOutDate] = useState(null); // 체크아웃 날짜
  const [availablePackages, setAvailablePackages] = useState([]); // 예약 가능한 패키지 목록
  // const [availableRooms, setAvailableRooms] = useState([]); // 예약 가능한 객실 목록
  const [showPicker, setShowPicker] = useState(false); // 날짜 선택기 표시 여부
  // const [tab, setTab] = useState("package"); // 'package' or 'room' 탭 선택 상태
  const [popupAdultCount, setPopupAdultCount] = useState(0); // 팝업에서 사용하는 성인 수
  const [popupChildrenCount, setPopupChildrenCount] = useState(0); // 팝업에서 사용하는 어린이 수
  const [confirmedAdultCount, setConfirmedAdultCount] = useState(0); // 확인버튼을 누를 때의 성인 수
  const [confirmedChildrenCount, setConfirmedChildrenCount] = useState(0); // 확인버튼을 누를 때의 어린이 수
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [offerData, setOfferData] = useState({});

  const togglePicker = () => setShowPicker(!showPicker);
  // 팝업 상태 토글
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // 팝업이 열릴 때 현재 확인된 값을 팝업 초기 값으로 설정
    if (!isPopupVisible) {
      setPopupAdultCount(confirmedAdultCount);
      setPopupChildrenCount(confirmedChildrenCount);
    }
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

  const incrementCount = (type) => {
    if (type === "adult") setPopupAdultCount((prev) => prev + 1);
    if (type === "children") setPopupChildrenCount((prev) => prev + 1);
  };

  const decrementCount = (type) => {
    if (type === "adult" && popupAdultCount > 0)
      setPopupAdultCount((prev) => prev - 1);
    if (type === "children" && popupChildrenCount > 0)
      setPopupChildrenCount((prev) => prev - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchOfferData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5002/bk/reserve/${product_id}`
        );
        if (response.status === 200) {
          setOfferData(response.data);
          console.log("setOfferData : ",response.data)
        }
      } catch (error) {
        console.log(" offer 데이터 조회 오류 ", error);
      }
    };
    fetchOfferData();
  }, [product_id]);

  if(!offerData) {
    return <div>offer data 로드가 되지 않음</div>
  }

  const handleSearch = async () => {
    if (!checkInDate || !checkOutDate) {
      alert("날짜를 선택해주세요");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5002/bk/reserve", {
        startDate: checkInDate.toISOString().split("T")[0],
        endDate: checkOutDate.toISOString().split("T")[0],
        product_id,
      });

      if (response.status === 200) {
        // const { availableRooms, availablePackages } = response.data;
        const { availablePackages } = response.data;
        // setAvailableRooms(availableRooms);
        setAvailablePackages(availablePackages);
      }
    } catch (error) {
      console.error("예약 가능 데이터 조회 오류:", error);
    }
  };

  return (
    
    <div className="container">
      <section className="reservation">
        <div className="center">
          <h2>날짜, 인원 선택</h2>
          <div className="reservation-wrap">
            <div className="date-wrap">
              <h4>CHECK IN / OUT</h4>
              <OfferDateRangePicker
                onDateChange={({ startDate, endDate }) => {
                  setCheckInDate(startDate);
                  setCheckOutDate(endDate);
                }}
                showPicker={showPicker}
                togglePicker={() => setShowPicker(!showPicker)}
                minDate={new Date(offerData.start_date)}
                maxDate={new Date(offerData.end_date)}
              />
            </div>
            <div className="room-wrap" onClick={togglePopup}>
              <div className="box room">
                <span className="tit">ROOM</span>
                <span className="num">1</span>
              </div>
              <div className="box adult">
                <span className="tit">ADULT</span>
                <span className="num">1</span>
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
          </div>
        </div>

        {/* 선택된 탭에 따라 콘텐츠 표시 */}
        <div className="content-list">
          <div className="package-list">
            <h3>패키지 </h3>
            {availablePackages.map((pkg) => (
              <PackageRoomItem
                key={pkg.offer_id}
                packageData={pkg}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResOfferRoomId;
