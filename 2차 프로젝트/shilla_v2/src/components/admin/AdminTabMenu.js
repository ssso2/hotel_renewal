import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminTabMenu = () => {

    const tabMenu = [
        {text : '대시보드', class : 'on', link : '/admin'},
        {text : '객실관리', class : '', link : '/admin/room'},
        {text : '회원관리', class : '', link : '/admin/member'},
        {text : '예약관리', class : '', link : '/admin/reservation'},
        {text : '고객센터', class : '', link : '/admin/cs'},
        {text : '매출현황', class : '', link : '/admin/sales'}
    ]
    const [menu,menuSet] = useState(tabMenu);
    return (
        <div class="admin-tab">
            <div class="tab-title">
                관리자 메뉴
                <i class="fa-solid fa-gear"></i>
            </div>
            <ul class="tab-menu">
                {
                    menu.map((item,index)=> (<li key={index} class={item.class}><Link to={item.link}></Link>{item.text}</li>))
                }
            </ul>
        </div>
    );
};

export default AdminTabMenu;
