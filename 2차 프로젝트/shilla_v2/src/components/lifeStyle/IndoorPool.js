import React from 'react';
import Header from '../common/Header';
import Tab2 from './Tab2';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function indoorPool() {
    
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab2/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <div className="sub-title">
                                <h2>실내 수영장</h2>
                                <ul className="location">
                                    <li><Link to="../index.html">홈</Link></li>
                                    <li><Link to="../sub/sub04.html">라이프스타일</Link></li>
                                    <li><Link to="#self">실내 수영장</Link></li>
                                </ul>
                            </div>
                            <div className="gallery no-slide">
                                <img src="../../img/sub/R00000009M89_KR.jpg" alt="" />
                            </div>
                            <div className="context">
                                <div className="Introduction">
                                    <h3>서울신라호텔의 실내 수영장은 신라 피트니스 회원과 투숙객만을 위한 공간으로<br/>사계절 내내 쾌적하고 여유로운 수영을 즐길 수 있습니다.</h3>
                                    <p className="txt">
                                        '자연과 하나되는 Relaxatuon 공간'<br/>
                                        유리돔을 통해 보이는 남산의 전경을 만끽하며 수영과 휴식을 함께 즐길 수 있는 공간입니다.<br/>
                                        길이 25m, 너비 6m의 풀로 이루어져 있으며, 건식 사우나와 실내 및 야외 자쿠지를 갖추고 있습니다. <br/>
                                        회원과 투숙객을 위해 별도의 락커룸을 제공합니다.
                                    </p>
                                    <div className="tel">
                                        <span>문의전화</span>
                                        <p>02-2230-3521</p>
                                    </div>
                                </div>
                                <div className="info-wrap mt-0">
                                    <ul className="info flex">
                                        <li className="list">
                                            <h4>위치</h4>
                                            <p className="txt">서울신라호텔 3층 피트니스</p>
                                        </li>
                                        <li className="list">
                                            <h4>운영시간</h4>
                                            <p className="txt">06:00 ~ 22:00</p>
                                        </li>
                                        <li className="list">
                                            <h4>정기휴일</h4>
                                            <p className="txt">매월 세 번째 수요일</p>
                                        </li>
                                    </ul>
                                    <div className="desc-wrap">
                                        <p className="desc">
                                            2024년 9월 세 번째 수요일(9/18)인 추석(공휴일)은 정상 영업하며, 피스니스 정기 휴무일은 9월 25일로 변경됩니다.
                                        </p>
                                        <p className="desc">
                                            고객 여러분의 안전을 위하여 다음과 같이 실내 수영장 이용 규정을 준수해 주시기 바랍니다.
                                        </p>
                                        <ul className="rule">
                                            <li>실내 수영장과 릴렉세이션 존(실내 자쿠지, 야외 자쿠지, 건식 사우나)은 성인 고객 전용 시설로서, 안전을 위해 만 13세 이상인 고객에 한해 이용 가능합니다.<br/>
                                                (단, 주말 및 공휴일에는 성인 보호자의 보호 하에 만 13세 미만인 고객이 이용 가능하며,<br/>신장 140cm 미만인 고객은 성인 보호자의 보호 하에 구명 조끼 착용 시 이용 가능합니다.)

                                            </li>
                                            <li>수영장에서 다이빙은 금지되어 있습니다.</li>
                                            <li>샤워실 및 탈의실 이용 시 만 4세 이상 어린이는 혼성 입장이 불가합니다.</li>
                                            <li>적정 인원 초과 시 이용을 위해 대기하실 수 있습니다.</li>
                                            <li>고객 여러분의 안전을 위하여 음주 후 체육관, 사우나, 실내 수영장 등의 피트니스 시설 이용은 제한될 수 있습니다.</li>
                                            <li>목 튜브를 포함한 모든 종류의 튜브, 스노클 장비, 오리발, 수중 프로펠러 등은 사용하실 수 없습니다.</li>
                                            <li>수영복 착용 시에만 이용 가능하며 풀(Pool) 내에서의 체육복 및 평상복 착용은 불가합니다.</li>
                                            <li>실내 수영장과 어번 아일랜드는 별도로 운영되고 있습니다.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default indoorPool