import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminTabMenu = () => {
    const tabMenu = [
        {text : '대시보드', class : 'on', link : '/admin'},
        {text : '객실관리', class : '', link : '/admin/room'},
        {text : '회원관리', class : '', link : '/admin/member'},
        {text : '예약관리', class : '', link : '/admin/reservation'},
        {text : '고객센터:공지사항', class : '', link : '/admin/notice'},
        {text : '고객센터:문의게시판', class : '', link : '/admin/cs'},
        {text : '매출현황', class : '', link : '/admin/sales'}
    ];

    // 현재 위치 정보를 기반으로 활성화된 메뉴를 추적
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(() => {
        // 초기 activeIndex를 location.pathname에 맞게 설정
        return tabMenu.findIndex(item => item.link === location.pathname);
    });

    useEffect(() => {
        // 페이지 이동 시, activeIndex를 location.pathname에 맞게 업데이트
        const currentIndex = tabMenu.findIndex(item => item.link === location.pathname);
        setActiveIndex(currentIndex);
    }, [location, tabMenu]); // location이 변경될 때마다 activeIndex를 업데이트

    return (
        <div className="admin-tab">
            <div className="tab-title">
                관리자 메뉴
                <i className="fa-solid fa-gear"></i>
            </div>
            <ul className="tab-menu">
                {tabMenu.map((item, index) => (
                    <li key={index} className={index === activeIndex ? "on" : ""}>
                        <Link to={item.link} >{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminTabMenu;
