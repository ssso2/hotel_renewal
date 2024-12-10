import React from 'react';
import Header from '../common/Header';
import Tab from "./Tab";
import SubTitle from './SubTitle';
import Gallery from './Gallery';
import Introduction from './Introduction';
import Location1 from './Location'
import Location2 from '../lifeStyle/Location'
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

function Wedding3() {

    const galleryImages = [
        "../../img/sub/wd-3-01.jpg",
        "../../img/sub/wd-3-02.jpg",
        "../../img/sub/wd-3-03.jpg",
        "../../img/sub/wd-3-04.jpg",
        "../../img/sub/wd-3-05.jpg",
        "../../img/sub/wd-3-06.jpg",
        "../../img/sub/wd-3-07.jpg",
    ];

    const introData = {
        text: `The Shilla Look`,
        description: `고객의 라이프 스타일에 맞춰 전문 디렉터와 컨설턴트들이 제안하는 '디자인 웨딩', '스타일 웨딩'을 만나보실 수 있습니다.`,
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

    const locationData2 = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '255.7 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>15.6m x 12.3m / 층고 4.6m<br/>
                                <em>Sub</em>5.1m x 7.8m / 층고 3.7m<br/>
                                <em>Stage</em>8.5m x 2.8m / 층고 3.8m` },
        { title: '수용인원', content: '정찬 (코스) 기준 130석' },
    ];

    const locationData3 = [
        { title: '위치', content: '서울신라호텔 영빈관 2층' },
        { title: '면적', content: '244.4 m<sup>2</sup>' },
        { title: 'Size', content: `<em>Main</em>17.8m x 12.3m / 층고 4.1m<br>
                                <em>Stage</em>8.5m x 3.1m / 층고 3.2m` },
        { title: '수용인원', content: '정찬 (코스) 기준 120석' },
    ];

    const locationData4 = [
        { title: '위치', content: '서울신라호텔 영빈관 1층' },
        { title: '면적', content: '506.3 m<sup>2</sup>' },
        { title: 'Size', content: '22.5m x 22.5m' },
        { title: '수용인원', content: '정찬 (코스) 기준 200석' },
    ]

    const locationData5 = [
        { title: '위치', content: '서울신라호텔 영빈관 2층' },
        { title: '면적', content: '1325.8 m<sup>2</sup>' },
        { title: 'Size', content: '66.0m x 25.7m' },
        { title: '수용인원', content: '정찬 (코스) 기준 400석' },
    ]

    
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
                                    <Location1 propLocation = {locationData}/>
                                    <strong>토파즈</strong>
                                    <Location1 propLocation = {locationData2}/>
                                    <strong>에메랄드</strong>
                                    <Location1 propLocation = {locationData3}/>
                                    <strong>내정</strong>
                                    <Location2 propLocation = {locationData4}/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <strong>후정</strong>
                                    <Location2 propLocation = {locationData5}/>
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

export default Wedding3;