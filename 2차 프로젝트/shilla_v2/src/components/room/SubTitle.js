import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const SubTitle = () => {
    const location = useLocation()
    
    const getSubTitle = () => {
        if (location.pathname == "/standard") {
            return { title: "디럭스", breadcrumb: "디럭스"}
        } else if (location.pathname == "/standard/businessDeluxe") {
            return { title: "비즈니스 디럭스", breadcrumb: "비즈니스 디럭스"}
        } else if (location.pathname == "/standard/barrierFreeDeluxe") {
            return { title: "배리어프리 비즈니스 디럭스", breadcrumb: "배리어프리 비즈니스 디럭스"}
        } else if (location.pathname == "/standard/grandCornerDeluxe") {
            return { title: "그랜드 코너 디럭스", breadcrumb: "그랜드 코너 디럭스"}
        }
    }
    
    const { title, breadcrumb } = getSubTitle()
    
    return (
        <div className="sub-title">
            <h2>{title}</h2>
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/room">객실</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
}

export default SubTitle;