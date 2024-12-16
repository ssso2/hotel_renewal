import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function LifeStyle() {
    return (
        <>
        <Header/>
        <div class="container">
            <div class="center">
                <div class="sub-title column">
                    <div>
                        <h2>품격이 다른 편안함으로 당신의 휴식을 책임집니다.</h2>
                        <p class="sub-desc">
                            넓은 야외 테라스와 아름다운 옥상 정원(Rooftop Garden)에서의 휴식은 물론, 다양한 문화 프로그램과 개인별 취미를 즐기실 수 있습니다.
                        </p>
                    </div>
                    <ul class="location">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="#self">라이프스타일</Link></li>
                    </ul>
                </div>

                <div class="sub-list-wrap">
                    <ul class="sub-list line-2 max-height">
                        <li>
                            <h3>야외수영장</h3>
                            <Link to="/outdoorPool">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-01.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>어번 아일랜드</h4>
                                    <p class="desc">탁 트인 전망과 편안한 휴식을 취할 수 있는 완벽한 장소를 경험하실 수 있습니다.</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/outdoorPool2">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-02.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>카바나</h4>
                                    <p class="desc">프라이빗하고 여유로운 휴식과 함께 낭만적인 시간을 만들어 드립니다.</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                    </ul>
                    <ul class="sub-list">
                        <li>
                            <h3>피트니스</h3>
                            <Link to="/fitness">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-03.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>실내 수영장</h4>
                                    <p class="desc">수영과 휴식을 한번에!</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/fitness2">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-04.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>실내 체육관</h4>
                                    <p class="desc">체력 관리를 위한 기능별 공간</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/fitness3">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-05.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>실내 골프장</h4>
                                    <p class="desc">실전 라운딩과 같은 공간</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/fitness4">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-06.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>사우나</h4>
                                    <p class="desc">여유로운 공간의 실내 사우나</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                    </ul>
                    <ul class="sub-list line-2">
                        <li>
                            <h3>산책로</h3>
                            <Link to="/walkingTrails">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-07.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>서울신라호텔만의 고풍스러운 성곽길</h4>
                                    <p class="desc">아름다운 경관과 맑은 공기가 가득한 휴식 장소</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jogging">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-08.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>조깅코스</h4>
                                    <p class="desc">서울신라호텔에서 남산으로 이어지는 조깅코스</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                    </ul>
                    <ul class="sub-list line-2">
                        <li>
                            <h3>쇼핑</h3>
                            <Link to="/shopping">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-09.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>아케이드</h4>
                                    <p class="desc">서울신라호텔만의 라이프스타일이 살아 숨쉬는 공간입니다.</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shopping2">
                                <div class="img-wrap">
                                    <img src="../../img/sub/life-10.jpg" alt="" />
                                </div>
                                <div class="txt-wrap">
                                    <h4>신라면세점</h4>
                                    <p class="desc">신라면세점은 최고의 면세쇼핑 서비스를 제공하고 있습니다.</p>
                                </div>
                                <p class="view-more">자세히보기</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default LifeStyle;