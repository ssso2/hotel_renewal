import { Link } from 'react-router-dom';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const dining = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="center">
                <div className="sub-title column">
                    <div>
                        <h2>참 미식으로의 초대</h2>
                        <p className="sub-desc">정통을 뛰어넘는 하이엔드 스타일의 다이닝, 라운지에서 맛보는 스위트 트리트, 눈을 행복하게 하는 감각적인 패스트리까지</p>
                    </div>
                    <ul className="location">
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="javascrip:void();">다이닝</Link></li>
                    </ul>
                </div>

                <div className="sub-list-wrap">
                    <ul className="sub-list">
                        <li>
                            <h3>한식</h3>
                            <Link to="/restaurant">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-1-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>라연</h4>
                                    <p className="desc">전통과 품격의 한식 레스토랑</p>
                                    <p className="position">위치 : 23층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3367</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>프렌치</h3>
                            <Link to="/restaurant2">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-2-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>콘티넨탈</h4>
                                    <p className="desc">전통 프렌치 정찬과 와인</p>
                                    <p className="position">위치 : 23층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3369</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>일식</h3>
                            <Link to="/restaurant3">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-3-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>아리아께</h4>
                                    <p className="desc">오감 만족의 정통 일식당</p>
                                    <p className="position">위치 : 2층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3356</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>중식</h3>
                            <Link to="/restaurant4">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-4-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>팔선</h4>
                                    <p className="desc">중식 명가의 품격</p>
                                    <p className="position">위치 : 2층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3366</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                    </ul>
                    <ul className="sub-list">
                        <li>
                            <h3>올 데이 다이닝</h3>
                            <Link to="/restaurant5">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-5-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>더 파크뷰</h4>
                                    <p className="desc">자연을 닮은 레스토랑</p>
                                    <p className="position">위치 : 1층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3374</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>라운지 & 바</h3>
                            <Link to="/lounge">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-6-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>더 라이브러리</h4>
                                    <p className="desc">신개념의 고품격 사교 공간</p>
                                    <p className="position">위치 : 1층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3388</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>라운지 & 바</h3>
                            <Link to="/lounge2">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-7-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>더 디스틸러스 라이브러리</h4>
                                    <p className="desc">진귀한 고숙성 위스키 경험</p>
                                    <p className="position">위치 : 1층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3389</p>
                                </div>
                                <p className="view-more">자세히보기</p>
                            </Link>
                        </li>
                        <li>
                            <h3>베이커리</h3>
                            <Link to="/bakery">
                                <div className="img-wrap">
                                    <img src="../../img/sub/dining-8-01.jpg" alt=""/>
                                </div>
                                <div className="txt-wrap">
                                    <h4>패스트리 부티크</h4>
                                    <p className="desc">명품 베이커리의 진수</p>
                                    <p className="position">위치 : 1층</p>
                                    <p className="tel">예약 및 문의 : 02.2230.3377</p>
                                </div>
                                <p className="view-more">자세히보기</p>
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

export default dining;