import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MyPageTab = () => {
    const myPageTabTit = [
        {link : "/myPage" , class : 'on', title : "회원정보"},
        {link : "/myPage/myInfoChg" , class : '', title : "회원정보 수정"},
        {link : "/myPage/myReservation" , class : '', title : "예약내역 확인"},
        {link : "/myPage/myInquiry" , class : '', title : "문의내역 확인"},
    ]

    // 현재 위치 정보를 기반으로 활성화된 메뉴를 추적
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(() => {
        // 초기 activeIndex를 location.pathname에 맞게 설정
        return myPageTabTit.findIndex(item => item.link === location.pathname);
    });

    useEffect(() => {
        // 페이지 이동 시, activeIndex를 location.pathname에 맞게 업데이트
        const currentIndex = myPageTabTit.findIndex(item => item.link === location.pathname);
        setActiveIndex(currentIndex);
    }, [location, myPageTabTit]); // location이 변경될 때마다 activeIndex를 업데이트
    
    return (
      <ul className="tab tab-long">
          {myPageTabTit.map((item, index) => (
              <li key={index} className={index === activeIndex ? "on" : ""}>
                  <Link to={item.link} >{item.title}</Link>
              </li>
          ))}
      </ul>
    )
}

export default MyPageTab
