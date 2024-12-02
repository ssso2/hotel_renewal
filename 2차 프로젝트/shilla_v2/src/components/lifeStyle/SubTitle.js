import { Link, useLocation } from 'react-router-dom';

const SubTitle = () => {
    const location = useLocation();

    const getTitleAndBreadcrumb = () => {
        if (location.pathname === '/urbanIsland') {
            return { title: "어번 아일랜드", breadcrumb: "어번 아일랜드" };
        } else if (location.pathname === '/cabana') {
            return { title: "카바나", breadcrumb: "카바나" };
        } else {
            return { title: "페이지 제목", breadcrumb: "현재 위치" }; 
        }
    };

    const { title, breadcrumb } = getTitleAndBreadcrumb();

    return (
        <div className="sub-title">
            <h2>{title}</h2>
            <ul className="location">
                <li><Link to="/">홈</Link></li>
                <li><Link to="../sub/sub04.html">라이프스타일</Link></li>
                <li><Link to="#self">{breadcrumb}</Link></li>
            </ul>
        </div>
    );
};

export default SubTitle;
