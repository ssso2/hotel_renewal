import React from "react";
import { Link,useNavigate } from 'react-router-dom';

const HeaderComp4Admin = ({user}) => {

    const navigate = useNavigate()

    function logout() {
        sessionStorage.clear() //한번에 다 지우는 방법. removeItem으로 하면 하나씩 지울 수도 있다.
        alert(`${user.name}님, 로그아웃되었습니다`);
        navigate('/login');
    }

    
    return (
        <div className="m_top">
            {/* <!-- 관리자 로그인시 --> */}
            <div className="btn-wrap admin">
                <Link href="/admin" className="user-name-btn" title="관리자페이지로 이동">
                    <i className="fa-regular fa-user"></i>
                    <p>관리자<span>님</span></p>
                </Link>
                <Link href="/" className="logout-btn">로그아웃
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </div>
        </div>
    );
};

export default HeaderComp4Admin;
