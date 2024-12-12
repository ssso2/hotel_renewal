import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Contents from './Contents';

import "../../scss/common.scss";
import "../../scss/header.scss";
import "../../scss/footer.scss";
import "../../scss/sub-list.scss";
import "../../scss/sub-detail.scss";

const lifeStyleData = [
  {
    heading: "야외수영장",
    items: [
      {
        title: "어번 아일랜드",
        imgSrc: "../../img/sub/life-01.jpg",
        link: "../sub/sub04_01_01.html",
        desc: "탁 트인 전망과 편안한 휴식을 취할 수 있는 완벽한 장소를 경험하실 수 있습니다."
      },
      {
        title: "카바나",
        imgSrc: "../../img/sub/life-02.jpg",
        link: "../sub/sub04_01_02.html",
        desc: "프라이빗하고 여유로운 휴식과 함께 낭만적인 시간을 만들어 드립니다."
      }
    ]
  },
  {
    heading: "피트니스",
    items: [
      {
        title: "실내 수영장",
        imgSrc: "../../img/sub/life-03.jpg",
        link: "../sub/sub04_02_01.html",
        desc: "수영과 휴식을 한번에!"
      },
      {
        title: "실내 체육관",
        imgSrc: "../../img/sub/life-04.jpg",
        link: "../sub/sub04_02_02.html",
        desc: "체력 관리를 위한 기능별 공간"
      },
      {
        title: "실내 골프장",
        imgSrc: "../../img/sub/life-05.jpg",
        link: "../sub/sub04_02_03.html",
        desc: "실전 라운딩과 같은 공간"
      },
      {
        title: "사우나",
        imgSrc: "../../img/sub/life-06.jpg",
        link: "../sub/sub04_02_04.html",
        desc: "여유로운 공간의 실내 사우나"
      }
    ]
  },
  {
    heading: "산책로",
    items: [
      {
        title: "서울신라호텔만의 고풍스러운 성곽길",
        imgSrc: "../../img/sub/life-07.jpg",
        link: "../sub/sub04_03.html",
        desc: "아름다운 경관과 맑은 공기가 가득한 휴식 장소"
      },
      {
        title: "조깅코스",
        imgSrc: "../../img/sub/life-08.jpg",
        link: "../sub/sub04_04.html",
        desc: "서울신라호텔에서 남산으로 이어지는 조깅코스"
      }
    ]
  },
  {
    heading: "쇼핑",
    items: [
      {
        title: "아케이드",
        imgSrc: "../../img/sub/life-09.jpg",
        link: "../sub/sub04_05_01.html",
        desc: "서울신라호텔만의 라이프스타일이 살아 숨쉬는 공간입니다."
      },
      {
        title: "신라면세점",
        imgSrc: "../../img/sub/life-10.jpg",
        link: "../sub/sub04_05_02.html",
        desc: "신라면세점은 최고의 면세쇼핑 서비스를 제공하고 있습니다."
      }
    ]
  }
];

function LifeStyle() {
  return (
    <>
      <Header />
      <Contents sections={lifeStyleData} />
      <Footer />
    </>
  );
}

export default LifeStyle;
