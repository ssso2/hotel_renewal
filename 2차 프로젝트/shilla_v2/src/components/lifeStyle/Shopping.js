import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Tab3 from './Tab3';
// import SubTitle from './SubTitle';
// import Gallery2 from './Gallery2';
// import Location from './Location';
// import Desc from './Desc';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Shopping() {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab3/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <div className="sub-title">
                                <h2>아케이드</h2>
                                <ul className="location">
                                    <li><Link to="../index.html">홈</Link></li>
                                    <li><Link to="../sub/sub04.html">라이프스타일</Link></li>
                                    <li><Link to="#self">아케이드</Link></li>
                                </ul>
                            </div>
                            <div className="gallery no-slide">
                                <img src="../../img/sub/R0000000V56F_KR.jpg" alt=""/>
                            </div>
                            <div className="context">
                                <div className="Introduction pb-0 bd-none">
                                    <h3>서울신라호텔에서 럭셔리 브랜드들의 최신 트렌드를 가장 가까이에서 만나보실 수 있습니다.</h3>
                                    <p className="txt">
                                        신라 명품 아케이드는 서울신라호텔만의 라이프스타일이 살아 숨쉬는 공간입니다.<br/>
                                        고객 모두에게 만족을 드릴 최고급 쇼핑 공간으로서 엄선된 20여 개의 최고급 브랜드만 입점되어 있습니다.<br/>
                                        프라이빗한 구조의 매장 구성으로 럭셔리 브랜드들의 최신 트렌드를 가장 가까이에서 만나보실 수 있습니다.
                                    </p>
                                </div>
                                <div className="info-wrap mt-0">
                                    <ul className="info flex">
                                        <li className="list">
                                            <h4>위치</h4>
                                            <p className="txt">서울신라호텔 1층, B1층</p>
                                        </li>
                                        <li className="list">
                                            <h4>운영시간</h4>
                                            <p className="txt">10:00 ~19:00(월~금), 11:00 ~ 19:00(토,일 공휴일)</p>
                                        </li>
                                    </ul>
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

export default Shopping