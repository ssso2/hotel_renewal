import '../../scss/reset.scss';
import '../../scss/common.scss';
import '../../scss/sub02.scss';
import React from 'react';

const StandardCont1 = () => {
    return (
        <>
            <ul className="tab tab-long">
                <li className="tab1 on"><Link to="/room/standard">디럭스</Link></li>
                <li className="tab2"><Link to="/room/business">비즈니스 디럭스</Link></li>
                <li className="tab3"><Link to="/room/barrierfree">베리어프리 비즈니스 디럭스</Link></li>
                <li className="tab4"><Link to="/room/grand">그랜드 코너 디럭스</Link></li>
            </ul>
            <div className="tab-contents">
                <div className="tab-cont cont1 on">
                    <div className="sub-title">
                        <h2>디럭스</h2>
                        <ul className="location">
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/room/">객실</Link></li>
                            <li><Link to="/room/standard">디럭스</Link></li>
                        </ul>
                    </div>

                    

                    <div className="gallery">
                        <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" className="swiper mySwiper2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux01.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux02.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux03.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux04.jpg" />
                                </div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                        <div thumbsSlider="" className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux01.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux02.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux03.jpg" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="../../img/sub/roomStandardDelux04.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-cont cont2">
                    <div className="sub-title">
                        <h2>비즈니스 디럭스</h2>
                        <ul className="location">
                            <li><Link to="../../html/index.html">홈</Link></li>
                            <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                            <li><Link to="#self">비즈니스 디럭스</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="tab-cont cont3">
                    <div className="sub-title">
                        <h2>배리어프리 비즈니스 디럭스</h2>
                        <ul className="location">
                            <li><Link to="../../html/index.html">홈</Link></li>
                            <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                            <li><Link to="#self">배리어프리 비즈니스 디럭스</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="tab-cont cont4">
                    <div className="sub-title">
                        <h2>그랜드 코너 디럭스</h2>
                        <ul className="location">
                            <li><Link to="../../html/index.html">홈</Link></li>
                            <li><Link to="../../html/sub/sub02.html">객실</Link></li>
                            <li><Link to="#self">그랜드 코너 디럭스</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StandardCont1;