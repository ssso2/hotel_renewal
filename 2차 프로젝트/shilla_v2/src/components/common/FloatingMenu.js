import React from "react";
import { Link } from "react-router-dom";


const FloatingMenu = () => {
    return (
        <article className="floating-menu">
            <div className="menu">
                <Link to="../../html/sub/reservation.html" className="circle-btn" title="예약 페이지로 이동">예약</Link>
                <Link to="../../html/sub/sub06_03.html" className="circle-btn" title="고객문의 게시판으로 이동">문의</Link>
            </div>
            <Link to="#" className="top-btn" title="최상단으로 이동">TOP</Link>
        </article>
    );
};

export default FloatingMenu;
