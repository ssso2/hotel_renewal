import React, { useState } from "react";

const AdminTabMenu = () => {

    const tabMenu = [
        {text : '대시보드', class : 'on'},
        {text : '객실관리', class : ''},
        {text : '회원관리', class : ''},
        {text : '예약관리', class : ''},
        {text : '고객센터', class : ''},
        {text : '매출현황', class : ''}
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
                    menu.map((item,index)=> (<li key={index} class={item.class}>{item.text}</li>))
                }
            </ul>
        </div>
    );
};

export default AdminTabMenu;
