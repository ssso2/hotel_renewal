import React from 'react';
import Header from '../common/Header';
import Tab2 from "./Tab2";
import SubTitle from './SubTitle';
// import Gallery from './Gallery';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function CorporateParty2() {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="depth3-tab-wrap">
                    <Tab2/>
                    <div className="tab-contents">
                        <div className="tab-cont cont1 on">
                            <SubTitle/>
                            <div className="gallery no-slide">
                                <img src="../../img/sub/gbRoom-2.jpg" alt=""/>
                            </div>
                            <div className="context">
                                <div className="Introduction">
                                    <h3>Yeong Bin Gwan</h3>
                                    <p className="txt">
                                        1967년에 준공된 영빈관은 정부의 국가적인 손님을 영접하기 위해 설립되었습니다.<br/>
                                        1973년에 삼성그룹이 인수한 후 서울신라호텔의 오픈과 함께 일반에 공개되어 격조 높은 회의와 연회를 위한 장소로 사용되고 있습니다.
                                    </p>
                                    <div className="tel">
                                        <span>예약 / 문의</span>
                                        <p>Tel&#41; 02-2230-3320</p>
                                    </div>
                                    <div className="btn-wrap btn-250">
                                        <button type="button" className="btn btn-02" data-lybtn="pop-floor-plan02">입체도면보기</button>
                                        <button type="button" className="btn btn-03" data-lybtn="pop-floor-plan03">Yeong Bin Gwan Floor Map</button>
                                    </div>
                                </div>
                                <div className="info-wrap flex">
                                    <div className="card">
                                        <strong>루비</strong>
                                        <div className="img-wrap">
                                            <img src="../../img/sub/ybgRubyImg.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <p className="main">은은한 고전미가 돋보이는 분위기로, 기품과 격조를 중시하는 행사에 깊은 만족을 드리는 공간입니다.</p>
                                            <p className="sub">칵테일 파티와 리셉션, 그리고 중소규모의 행사 장소로 인기 있으며,<br/> 초대받은 분들께 색다른 감동을 드립니다.</p>
                                        </div>
                                        <ul className="info">
                                            <li className="list">
                                                <h4>위치</h4>
                                                <p className="txt">서울신라호텔 영빈관 1층</p>
                                            </li>
                                            <li className="list">
                                                <h4>면적</h4>
                                                <p className="txt">300.7 m<sup>2</sup></p>
                                            </li>
                                            <li className="list">
                                                <h4>Size</h4>
                                                <p className="txt">
                                                    <em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                                    <em>Sub</em>9.8m x 7.8m / 층고 3.7m<br/>
                                                    <em>Stage</em>8.5m x 4.0m / 층고 3.8m
                                                </p>
                                            </li>
                                            <li className="list col">
                                                <h4 className="mb-10">수용인원</h4>
                                                <ul className="flex">
                                                    <li>
                                                        <img src="../../img/sub/reception.gif" alt=""/>
                                                        <p>Reception<br/>250</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/theater.gif" alt=""/>
                                                        <p>Theater<br/>250</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/classNameroom.gif" alt=""/>
                                                        <p>classNameroom<br/>180</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/round.gif" alt=""/>
                                                        <p>Round Table<br/>180</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap btn-250">
                                            <button type="button" className="btn btn-01" data-lybtn="pop-floor-plan01-1">도면보기</button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <strong>토파즈</strong>
                                        <div className="img-wrap">
                                            <img src="../../img/sub/ybgTopazImg.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <p className="main">우아한 고전미가 돋보이는 분위기로, 격조를 중시하는 행사를 위한 공간입니다.</p>
                                            <p className="sub">한국의 정서와 현대적인 모던함이 어우러져 고급스러우면서도 특색있는 행사를 연출하실 수 있습니다.</p>
                                        </div>
                                        <ul className="info">
                                            <li className="list">
                                                <h4>위치</h4>
                                                <p className="txt">서울신라호텔 영빈관 1층</p>
                                            </li>
                                            <li className="list">
                                                <h4>면적</h4>
                                                <p className="txt">255.7 m<sup>2</sup></p>
                                            </li>
                                            <li className="list">
                                                <h4>Size</h4>
                                                <p className="txt">
                                                    <em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                                    <em>Sub</em>5.1m x 7.8m / 층고 3.7m<br/>
                                                    <em>Stage</em>8.5m x 2.8m / 층고 3.8m
                                                </p>
                                            </li>
                                            <li className="list col">
                                                <h4 className="mb-10">수용인원</h4>
                                                <ul className="flex">
                                                    <li>
                                                        <img src="../../img/sub/reception.gif" alt=""/>
                                                        <p>Reception<br/>200</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/theater.gif" alt=""/>
                                                        <p>Theater<br/>200</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/classNameroom.gif" alt=""/>
                                                        <p>classNameroom<br/>150</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/round.gif" alt=""/>
                                                        <p>Round Table<br/>150</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap btn-250">
                                            <button type="button" className="btn btn-01" data-lybtn="pop-floor-plan01-2">도면보기</button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <strong>에메랄드</strong>
                                        <div className="img-wrap">
                                            <img src="../../img/sub/ybgErdImg.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <p className="main">전통 한옥에서 우러나오는 한국미가 돋보이는 공간으로 최첨단 시설을 완벽하게 갖추고 있습니다.</p>
                                            <p className="sub">에메랄드 룸과 연결되어 있는 영빈관 후정을 함께 이용할 수 있어 자연이 공존하는 색다른 분위기를 선사합니다.</p>
                                        </div>
                                        <ul className="info">
                                            <li className="list">
                                                <h4>위치</h4>
                                                <p className="txt">서울신라호텔 영빈관 1층</p>
                                            </li>
                                            <li className="list">
                                                <h4>면적</h4>
                                                <p className="txt">255.7 m<sup>2</sup></p>
                                            </li>
                                            <li className="list">
                                                <h4>Size</h4>
                                                <p className="txt">
                                                    <em>Main</em>17.8m x 12.3m / 층고 4.1m<br/>
                                                    <em>Stage</em>8.5m x 3.1m / 층고 3.2m
                                                </p>
                                            </li>
                                            <li className="list col">
                                                <h4 className="mb-10">수용인원</h4>
                                                <ul className="flex">
                                                    <li>
                                                        <img src="../../img/sub/reception.gif" alt=""/>
                                                        <p>Reception<br/>200</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/theater.gif" alt=""/>
                                                        <p>Theater<br/>200</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/classNameroom.gif" alt=""/>
                                                        <p>classNameroom<br/>160</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/round.gif" alt=""/>
                                                        <p>Round Table<br/>160</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap btn-250">
                                            <button type="button" className="btn btn-01" data-lybtn="pop-floor-plan01-3">도면보기</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="info-wrap flex mt-0">
                                    <div className="card">
                                        <strong>내정</strong>
                                        <div className="img-wrap">
                                            <img src="../../img/sub/ybgIgImg1.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <p className="main">수려한 남산을 배경으로 펼쳐진 아름다운 조각 작품과 넓은 잔디밭을 즐길 수 있는 가든 파티는 오직 서울신라호텔만이 드릴 수 있는 가장 멋진 선물입니다.</p>
                                            <p className="sub">자연의 숨결을 더욱 가까이 느끼면서 여유와 개성이 넘치는 행사를 경험해 보십시오.</p>
                                        </div>
                                        <ul className="info">
                                            <li className="list">
                                                <h4>위치</h4>
                                                <p className="txt">서울신라호텔 영빈관 1층</p>
                                            </li>
                                            <li className="list">
                                                <h4>면적</h4>
                                                <p className="txt">506.3 m<sup>2</sup></p>
                                            </li>
                                            <li className="list">
                                                <h4>Size</h4>
                                                <p className="txt">
                                                    22.5m x 22.5m 
                                                </p>
                                            </li>
                                            <li className="list col">
                                                <h4 className="mb-10">수용인원</h4>
                                                <ul className="flex">
                                                    <li>
                                                        <img src="../../img/sub/reception.gif" alt=""/>
                                                        <p>Reception<br/>300</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/round.gif" alt=""/>
                                                        <p>Round Table<br/>250</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap btn-250">
                                            <button type="button" className="btn btn-01" data-lybtn="pop-floor-plan01-4">도면보기</button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <strong>후정</strong>
                                        <div className="img-wrap">
                                            <img src="../../img/sub/ybgEgImg.jpg" alt=""/>
                                        </div>
                                        <div className="txt-wrap">
                                            <p className="main">자연의 숨결을 더욱 가까이 느끼면서 여유와 개성이 넘치는 행사를 경험해 보십시오.</p>
                                            <p className="sub">수려한 남산을 배경으로 펼쳐진 아름다운 조각 작품과 넓은 잔디밭을 즐길 수 있는 가든 파티는 오직 서울신라호텔만이 드릴 수 있는 가장 멋진 선물입니다.</p>
                                        </div>
                                        <ul className="info">
                                            <li className="list">
                                                <h4>위치</h4>
                                                <p className="txt">서울신라호텔 영빈관 2층</p>
                                            </li>
                                            <li className="list">
                                                <h4>면적</h4>
                                                <p className="txt">1,325.8 m<sup>2</sup></p>
                                            </li>
                                            <li className="list">
                                                <h4>Size</h4>
                                                <p className="txt">
                                                    66.0m x 25.7m 
                                                </p>
                                            </li>
                                            <li className="list col">
                                                <h4 className="mb-10">수용인원</h4>
                                                <ul className="flex">
                                                    <li>
                                                        <img src="../../img/sub/reception.gif" alt=""/>
                                                        <p>Reception<br/>1,000</p>
                                                    </li>
                                                    <li>
                                                        <img src="../../img/sub/round.gif" alt=""/>
                                                        <p>Round Table<br/>800</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap btn-250">
                                            <button type="button" className="btn btn-01" data-lybtn="pop-floor-plan01-5">도면보기</button>
                                        </div>
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

export default CorporateParty2;