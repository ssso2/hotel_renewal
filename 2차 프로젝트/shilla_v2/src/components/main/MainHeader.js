import { useState } from "react";
import {Link} from 'react-router-dom';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/main.scss'




const MainHeader = () => {
    const gnbTitle = [
        {
            link : '/specialOffer', 
            title : '스페셜 오퍼',
            gnbMenu : [
                {link : '/specialOffer', text : '객실패키지'},
                {link : '/event', text : '이벤트'},
            ]
        },
        {
            link : '/room', 
            title : '객실',
            gnbMenu : [
                {link : '/standard', text : '스탠다드'},
                {link : '/executive', text : '이그제큐티브'},
                {link : '/sweet', text : '스위트'},
                {link : '/executiveLounge', text : '더 이그제큐티브 라운지'},
                {link : '/room', text : '전체 객실 보기'},
            ]
        },
        {
            link : '/dining', 
            title : '다이닝',
            gnbMenu : [
                {link : '/restaurant', text : '레스토랑'},
                {link : '/lounge', text : '라운지 & 바'},
                {link : '/bakery', text : '베이커리'},
        
            ]
        },
        {
            link : '/lifeStyle', 
            title : '라이프스타일',
            gnbMenu : [
                {link : '/urbanIsland', text : '야외수영장'},
                {link : '/fitness', text : '피트니스'},
                {link : '/walkingTrails', text : '산책로'},
                {link : '/jogging', text : '조깅코스'},
                {link : '/shopping', text : '쇼핑'},
            ]
        },
        {
            link : '/party', 
            title : '웨딩 & 연회',
            gnbMenu : [
                {link : '/wedding', text : '웨딩'},
                {link : '/corporateParty', text : '기업연회'},
                {link : '/familyParty', text : '가족연회'},
            ]
        },
        {
            link : '/info', 
            title : '고객센터',
            gnbMenu : [
                {link : '/info', text : '연락처'},
                {link : '/notice', text : '공지사항'},
                {link : '/faq', text : 'FAQ'},
                {link : '/board', text : '문의하기'},
                // {link : '/review', text : '리뷰'},
                {link : '/ocation', text : '오시는길'},
            ]
        },
    ]

    const [gnbMenu,gnbMenuSet] = useState(gnbTitle);

    return (
        <div class="main-header" id="MainHeader">
            <header className="active" >
                <div className="gnbbg" ></div>
                <div className="center">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src="img/common/logo.png" alt=""/>
                        </Link>
                    </h1>
                    <ul className="gnb"  >
                        {
                            gnbMenu.map((item,index)=>{
                                return  <li key={index} >
                                            <Link to={item.link}>{item.title}</Link>
                                            <ul className="depth2">
                                                {
                                                    item.gnbMenu.map((depth2,idx)=>{
                                                        return <li key={idx}><Link to={depth2.link}>{depth2.text}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                            })
                        }
                    </ul>
                    {/* <!-- 비로그인시 --> */}
                    <div className="btn-wrap on">
                        <Link to="/join" className="join-btn"><i className="fa-solid fa-user-plus"></i>회원가입</Link>
                        <Link to="/login" className="login-btn">로그인<i className="fa-solid fa-arrow-right-to-bracket"></i> </Link>
                    </div>
                    {/* <!-- 로그인시 --> */}
                    <div className="btn-wrap login">
                        <Link to="/mypage-new" className="user-name-btn" title="마이페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>손주혜<span>님</span></p>
                        </Link>
                        <Link to="/" className="logout-btn">로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </Link>
                    </div>
                    {/* <!-- 관리자 로그인시 --> */}
                    <div className="btn-wrap admin">
                        <Link to="/admin" className="user-name-btn" title="관리자페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>관리자<span>님</span></p>
                        </Link>
                        <Link to="/" className="logout-btn">로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </Link>
                    </div>
                    {/* <!-- 모바일 햄버거 버튼 --> */}
                    <div className="m_btn" >
                        <div className="menu">
                            <span className="line one"></span>
                            <span className="line two"></span>
                            <span className="line three"></span>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- 모바일 메뉴 --> */}
            <div className="m_wrap">
                <div className="m_top">
                    {/* <!-- 비로그인시 --> */}
                    <div className="btn-wrap on">
                        <Link href="/join" className="join-btn"><i className="fa-solid fa-user-plus"></i>회원가입</Link>
                        <Link href="/login" className="login-btn">로그인<i className="fa-solid fa-arrow-right-to-bracket"></i> </Link>
                    </div>
                    {/* <!-- 로그인시 --> */}
                    <div className="btn-wrap login">
                        <Link href="/mypage" className="user-name-btn" title="마이페이지로 이동">
                            <i className="fa-regular fa-user"></i>
                            <p>손주혜<span>님</span></p>
                        </Link>
                        <Link href="/" className="logout-btn">로그아웃
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </Link>
                    </div>
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
                <ul className="m_gnb">
                    {
                        gnbMenu.map((item,index)=>{
                            return  <li key={index} >
                                        <Link to='#self'>{item.title}</Link>
                                        <ul className="m_sub">
                                            {
                                                item.gnbMenu.map((depth2,idx)=>{
                                                    return <li key={idx}><Link to={depth2.link}>{depth2.text}</Link></li>
                                                })
                                            }
                                        </ul>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )

}

export default MainHeader


