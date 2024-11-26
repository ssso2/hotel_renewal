import React from 'react'
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/main.scss'

const MainCont2 = () => {
  return (
    <>
        {/* <!-- s:// cont2. 메인 예약 폼 --> */}
        <section className="cont2">
            <div className="center">
                <div className="reservation-wrap">
                    <div className="date-wrap">
                        <span className="tit">CHECK IN / OUT</span>
                        <input className="date" type="text" name="daterange" value=""/>
                    </div>
                    <div className="room-wrap">
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
                            <span className="num">1</span>
                        </div>
                    </div>
                    <button type="submit" onclick="location.href='../html/sub/reservation.html'" className="search" title="예약페이지로 이동">검색</button>
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
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- e:// cont2. 메인 예약 폼 --> */}
    </>
  )
}

export default MainCont2
