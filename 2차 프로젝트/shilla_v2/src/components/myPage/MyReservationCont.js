import React from 'react'

const MyPwChkCont = () => {
    return (
        <div class="reservate-info" id="reservate-info">
            <div class="reservation">
                <div class="info-title">객실 예약내역</div>
                <div class="reser-room">
                    <div className='contents-wrap'>
                        <div class="room"><img src="../../img/sub/roomSuiteRoyal01.jpg" /></div>
                        <div class="reservation-info">
                            <div class="info-item">객실타입: 이그제큐티브</div>
                            <div class="info-item">예약일자: 2023-09-24 ~ 2023-09-25(1박)</div>
                            <div class="info-item">체크인 시간: 15:00</div>
                            <div class="info-item">체크아웃 시간: 11:00</div>
                            <div class="info-item">이용 인원: 2명</div>
                        </div>
                    </div>
                    <button className='cancle-btn'>예약취소</button>
                </div>
                <div class="reser-room">
                    <div className='contents-wrap'>
                        <div class="package"><img src="../../img/sub/urban-01.jpg" /></div>
                        <div class="reservation-info">
                            <div class="info-item">패키지명: [성인3인] 어번 아일랜드 All Day 입장 + 엑스트라베드 1대 제공</div>
                            <div class="info-item">예약일자: 2023-10-24 ~ 2023-10-25(1박)</div>
                            <div class="info-item">체크인 시간: 15:00</div>
                            <div class="info-item">체크아웃 시간: 11:00</div>
                            <div class="info-item">이용 인원: 2명</div>
                        </div>
                    </div>    
                    <button className='cancle-btn'>예약취소</button>
                </div>
            </div>
        </div>
    )
}

export default MyPwChkCont
