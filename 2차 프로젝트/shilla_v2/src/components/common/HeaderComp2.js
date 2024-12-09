import React from "react";
import { Link,useNavigate } from 'react-router-dom';

const HeaderComp2 = ({user}) => {

    const navigate = useNavigate()

    function logout() {
        sessionStorage.clear() //한번에 다 지우는 방법. removeItem으로 하면 하나씩 지울 수도 있다.
        alert(`${user.name}님, 로그아웃되었습니다`);
        navigate('/login');
    }


    const LoginGroup = () => {
        if(user && user.grade == 1){
            return  <div className="btn-wrap admin">
                        <Link to="/admin" className="user-name-btn" title="관리자페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>관리자<span>님</span></p>
                        </Link>
                        <button className="logout-btn" onClick={logout}>로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
        }
        else if(user){
            return  <div className="btn-wrap on login">
                        <Link to="/mypage" className="user-name-btn" title="마이페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>{user.name}<span>님</span></p>
                        </Link>
                        <button className="logout-btn" onClick={logout}>로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                    </div>
        }
        else {
            return  <div className="btn-wrap on">
                        <Link to="/join" className="join-btn"><i className="fa-solid fa-user-plus"></i>회원가입</Link>
                        <Link to="/login" className="login-btn">로그인<i className="fa-solid fa-arrow-right-to-bracket"></i> </Link>
                    </div>
        }
    }

    
    return (
        <>
            <LoginGroup/>
        </>
    );
};

export default HeaderComp2;
