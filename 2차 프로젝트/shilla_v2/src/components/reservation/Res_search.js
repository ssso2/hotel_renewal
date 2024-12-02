import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./res_search.scss";
import {useNavigate} from 'react-router-dom'

function Res_search(props) {

  const navigate = useNavigate()
  // 체크인, 체크아웃, 어른, 어린이 수 상태 관리
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [calState, setCalState] = useState('')
  

  // 상태 관리
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 팝업 상태 토글 핸들러
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    console.log("togglePopup 호출")
  };



  // 인원 수 증가 핸들러
  const incrementCount = (type) => {
    if (type === "adult") setAdultCount(adultCount + 1);
    if (type === "children") setChildrenCount(childrenCount + 1);
  };

  // 인원 수 감소 핸들러
  const decrementCount = (type) => {
    if (type === "adult" && adultCount > 0) setAdultCount(adultCount - 1);
    if (type === "children" && childrenCount > 0) setChildrenCount(childrenCount - 1);
  };

  // 날짜 변경 핸들러
  const handleDateChange = (item) => {
    setCheckInDate([item.selection]);
    setCheckOutDate([item.selection]);
  };

  // 검색 핸들러
  const handleSearch = () => {
    console.log("검색 ", adultCount, childrenCount);
  }

  return (
    <div className="container">
        <section className="reservation">
            <div className="center">
                <h2>날짜, 인원 선택</h2>
                <div className="reservation-wrap">
                    <div className="date-wrap">
                        <span className="tit">CHECK IN / OUT</span>
                        <input className="date" type="text" name="daterange2" value=""/>
                    </div>
                    <div className="room-wrap" onClick={togglePopup}>
                        <div className="box room">
                            <span className="tit">ROOM</span>
                            <span className="num">1</span>
                        </div>
                        <div className="box adult">
                            <span className="tit">ADULT</span>
                            <span className="num">0</span>
                        </div>
                        <div className="box children">
                            <span className="tit">CHILDREN</span>
                            <span className="num">0</span>
                        </div>
                    </div>
                    <button type="button" className="reservation-search-btn">검색</button>
                    {isPopupVisible && (
                    <div className="reservation-popup">
                        <form action="">
                            <ul className="popup-left">
                                <li>
                                    <div className="tit">객실 1</div>
                                    <div className="count-wrap adult">
                                        <button type="button" className="btn-down"><span className="blind">숫자 내리기</span></button>
                                        <p className="adult">성인 <span className="num">0</span></p>
                                        <button type="button" className="btn-up"><span className="blind">숫자 올리기</span></button>
                                    </div>
                                    <div className="count-wrap children">
                                        <button type="button" className="btn-down"><span className="blind">숫자 내리기</span></button>
                                        <p className="children">어린이 <span className="num">0</span></p>
                                        <button type="button" className="btn-up"><span className="blind">숫자 올리기</span></button>
                                    </div>
                                </li>
                            </ul>
                            <div className="popup-right">
                                <p className="desc">* 어린이 기준 : 37개월 - 12세</p>
                                <button type="button">확인</button>
                            </div>
                        </form>

                        <button className="close-btn"><span className="blind">닫기</span></button>
                    </div> )}
                </div>
                <div className="no-select on">예약을 원하시는 날짜, 인원을 선택해주세요.</div>
                <div className="search-results-wrap">
                    <div className="tab-wrap">
                        <ul className="tab">
                            {/* <!-- <li className="on">회원전용 (<em className="num">2</em>)</li> --> */}
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
                    <div className="keyword-box">
                        <form action="">
                            <div className="top-wrap">
                                <span>키워드 검색</span>
                                <button type="reset">선택해제</button>
                            </div>
                            <div className="bottom-wrap">
                                <ul className="chk-boxs">
                                    <li>
                                        <input type="checkbox" name="keyword" id="breakfast" value="breakfast"/>
                                        <label for="breakfast">조식</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="lounge"/>
                                        <label for="lounge">라운지 혜택</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="special-day"/>
                                        <label for="special-day">기념일</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="outdoor-pool"/>
                                        <label for="outdoor-pool">야외수영장</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="adults-3"/>
                                        <label for="adults-3">성인3인</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="more-than-2day"/>
                                        <label for="more-than-2day">2박이상</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" name="keyword" id="kids"/>
                                        <label for="kids">키즈</label>
                                    </li>
                                </ul>
                                <button type="button">적용</button>
                            </div>
                        </form>
                    </div>
                    <div className="tab-cont-wrap">
                        <ul className="tab-cont package on">
                            <li>
                                <div className="box-wrap">
                                    <div className="l-box">
                                        <div className="img-wrap">
                                            <img src="../../img/sub/cabana-01.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <div className="context">
                                                <span className="badge">추천</span>
                                                <h3 className="tit">Member Exclusive</h3>
                                                <p className="desc">리워즈 회원 전용 객실 할인</p>
                                                <button type="button" className="pop-btn" data-lybtn="pop-benefit-guide" title="혜택 및 이용 안내 상세내용 팝업 열림">혜택 및 이용 안내 +</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="r-box">
                                        <div className="price"><em></em> 468,000원 ~</div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn">예약하기<i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="room-type-select">
                                    <li>
                                        <div className="tit">[standard]Deluxe</div>
                                        <div className="bed-type">
                                            <div className="box">
                                                <div>
                                                    <input type="radio" name="standars-deluxe" id="standars-deluxe-double"/>
                                                    <label for="standars-deluxe-double">Double</label>
                                                </div>
                                                <button type="button" className="cart-btn" onclick="location.href='../sub/payment.html'">보관함 담기</button>
                                            </div>
                                            <div className="box twin">
                                                <div>
                                                    <input type="radio" name="standars-deluxe" id="standars-deluxe-twin"/>
                                                    <label for="standars-deluxe-twin">Twin</label>
                                                </div>
                                                <button type="button" className="cart-btn" onclick="location.href='../sub/payment.html'">보관함 담기</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="tab-cont room">
                            <li>
                                <div className="box-wrap">
                                    <div className="l-box">
                                        <div className="img-wrap">
                                            <img src="../../img/sub/cabana-02.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <div className="context">
                                                <span className="badge">추천</span>
                                                <h3 className="tit">Member Exclusive</h3>
                                                <p className="desc">리워즈 회원 전용 객실 할인</p>
                                                <button type="button" className="pop-btn" data-lybtn="pop-benefit-guide" title="혜택 및 이용 안내 상세내용 팝업 열림">혜택 및 이용 안내 +</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="r-box">
                                        <div className="price"><em></em> 468,000원 ~</div>
                                        <div className="btn-wrap">
                                            <button type="button" className="btn">예약하기<i className="fa-solid fa-chevron-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <ul className="room-type-select">
                                    <li>
                                        <div className="tit">[standard]Deluxe</div>
                                        <div className="bed-type">
                                            <div className="box">
                                                <div>
                                                    <input type="radio" name="standars-deluxe" id="standars-deluxe-double"/>
                                                    <label for="standars-deluxe-double">Double</label>
                                                </div>
                                                <button type="button" className="cart-btn" onclick="location.href='../sub/payment.html'">보관함 담기</button>
                                            </div>
                                            <div className="box twin">
                                                <div>
                                                    <input type="radio" name="standars-deluxe" id="standars-deluxe-twin"/>
                                                    <label for="standars-deluxe-twin">Twin</label>
                                                </div>
                                                <button type="button" className="cart-btn" onclick="location.href='../sub/payment.html'">보관함 담기</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Res_search;
