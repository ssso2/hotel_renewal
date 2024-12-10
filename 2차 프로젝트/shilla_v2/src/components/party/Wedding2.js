import React from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location from './Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Wedding2() {

    const galleryImages = [
        "../../img/sub/wd-2-01.jpg",
        "../../img/sub/wd-2-02.jpg",
        "../../img/sub/wd-2-03.jpg",
        "../../img/sub/wd-2-04.jpg",
        "../../img/sub/wd-2-05.jpg",
        "../../img/sub/wd-2-06.jpg",
        "../../img/sub/wd-2-07.jpg",
        "../../img/sub/wd-2-08.jpg",
    ];

    const introData = {
        description: `한국 전통의 아름다음과 현대적 감각이 어우러진 독립적인 공간으로 두 곳의 정원과 세 개의 별실로 구성되어 있습니다.<br>
                    차별화된 하우스 웨딩 및 야외 웨딩 연출이 가능합니다.`,
        tel: "Tel) 02-2230-3321",
    };

    const locationData = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '300.7 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                            <em>Sub</em>9.8m x 7.8m / 층고 3.7m<br/>
                                            <em>Stage</em>8.5m x 4.0m / 층고 3.8m` },
        { title: '수용인원', content: '정찬 (코스) 기준 150석' },
    ];

    return (
        <>
        <Header/>
        <div class="container">
            <div class="center">
                <div class="depth3-tab-wrap">
                    <Tab/>
                    <div class="tab-contents">
                        <div class="tab-cont cont1 on">
                            <SubTitle />
                            <Gallery propImages={galleryImages} />
                            <div class="context">
                                <Introduction {...introData} />
                                <div class="info-wrap">
                                    <strong>루비</strong>
                                    <Location propLocation = {locationData}/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Wedding2;