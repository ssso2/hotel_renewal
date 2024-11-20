import { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom';
import '../../scss/header.scss'
import '../../scss/common.scss'
import '../../scss/reset.css'


const Header = () => {

   // 태그 선택 시 참조할 대상을 담을 공간
    const header = useRef(null);
    const gnb = useRef(null);
    const gnbBg = useRef(null);
    const gnb1Depth = useRef([]);
    // 모바일메뉴
    const mBtn = useRef(null);  
    const mWrap = useRef(null); 
    const depth1 = useRef([]);

    const gnbTitle = [
        {
            link : '/sub/sub01_01', 
            title : '스페셜 오퍼',
            gnbMenu : [
                {link : '/sub/sub01_01', text : '객실패키지'},
                {link : '/sub/sub01_02', text : '이벤트'},
            ]
        },
        {
            link : '/sub/sub02', 
            title : '객실',
            gnbMenu : [
                {link : '/sub/sub02_01_01', text : '스탠다드'},
                {link : '/sub/sub02_02_01', text : '이그제큐티브'},
                {link : '/sub/sub02_03_01', text : '스위트'},
                {link : '/sub/sub02_04', text : '더 이그제큐티브 라운지'},
                {link : '/sub/sub02', text : '전체 객실 보기'},
            ]
        },
        {
            link : '/sub/sub03', 
            title : '다이닝',
            gnbMenu : [
                {link : '/sub/sub03_01_01', text : '레스토랑'},
                {link : '/sub/sub03_02_01', text : '라운지 & 바'},
                {link : '/sub/sub03_03', text : '베이커리'},
        
            ]
        },
        {
            link : '/sub/sub04', 
            title : '라이프스타일',
            gnbMenu : [
                {link : '/sub/sub04_01_01', text : '야외수영장'},
                {link : '/sub/sub04_02_01', text : '피트니스'},
                {link : '/sub/sub04_03', text : '산책로'},
                {link : '/sub/sub04_04', text : '조깅코스'},
                {link : '/sub/sub04_05_01', text : '쇼핑'},
            ]
        },
        {
            link : '/sub/sub05', 
            title : '웨딩 & 연회',
            gnbMenu : [
                {link : '/sub/sub05_01_01', text : '웨딩'},
                {link : '/sub/sub05_02_01', text : '기업연회'},
                {link : '/sub/sub05_03_01', text : '가족연회'},
            ]
        },
        {
            link : '/sub/sub06_1', 
            title : '고객센터',
            gnbMenu : [
                {link : '/sub/sub06_01', text : '연락처'},
                {link : '/sub/sub06_02', text : 'FAQ'},
                {link : '/sub/sub06_03', text : '문의하기'},
                {link : '/sub/sub06_04', text : '공지사항'},
                {link : '/sub/sub06_05', text : '리뷰'},
                {link : '/sub/sub06_06', text : '오시는길'},
            ]
        },
    ]

    const [gnbMenu,gnbMenuSet] = useState(gnbTitle);

    // 함수 부분 시작 -----------------------------------------------------------------------------------------------------------------------

    // 스크롤 이벤트 관련 함수
    // 과거의 스크롤바 위치값
    let lastScrollTop = 0;
    function scrollHeader() {
        // 스크롤바의 위치값
        let scTop = window.scrollY;

        //스크롤바 내리면 헤더는 사라지고 스크롤바 올리면 헤더 나타남
        if(scTop == 0){
            header.current.classList.add("active");
            mWrap.current.style.paddingTop = 80 + "px"
        }
        if(scTop > lastScrollTop) {
            header.current.classList.remove("active");
            mWrap.current.style.paddingTop = 0 + "px"
        }
        else{
            header.current.classList.add("active");
            mWrap.current.style.paddingTop = 80 + "px"
        }
        lastScrollTop = scTop;
    }


    function resizeGo() {
        if(window.innerWidth > 1500){
            mWrap.current.classList.remove("move");
        }
    }

    // 함수 부분 끝 -----------------------------------------------------------------------------------------------------------------------

    useEffect(()=>{


        gnb.current.addEventListener("mouseover",()=>{
            // console.log("gnb mouseover 진입");
            
            gnbBg.current.classList.add("on");
        });
        
        gnb.current.addEventListener("mouseleave",()=>{
            gnbBg.current.classList.remove("on");
        });
        for(let i = 0; i < gnb1Depth.current.length; i++){
            gnb1Depth.current[i].addEventListener("mouseleave",function(){
                gnb1Depth.current[i].classList.remove("on");
            });
            gnb1Depth.current[i].addEventListener("mouseover",function(){
                gnb1Depth.current[i].classList.add("on");
            });
        }
        

        // 스크롤 했을 때 header 변경 함수 호출
        window.addEventListener("scroll",scrollHeader);
        // 창 크기 1500 이하일 때 모바일 메뉴 닫기 함수 호출
        window.addEventListener("resize",resizeGo);
        

        // 모바일 햄버거 버튼
        mBtn.current.addEventListener("click",()=>{
            // console.log('모바일버튼 클릭 진입');
            
            if(!mBtn.current.classList.contains("move")){
                // console.log('move 없을때');
                mWrap.current.classList.add("move");
                mBtn.current.classList.add("move");
                // console.log(mBtn.current.classList)
            }
            else{
                // console.log('move 있을때');
                mWrap.current.classList.remove("move");
                mBtn.current.classList.remove("move");
                // console.log(mBtn.current.classList)

            }
        });
        
        
        console.log(depth1.current.length);
        
        // 모바일 GNB
        for(let i = 0; i < depth1.current.length; i++){
            depth1.current[i].addEventListener("click",()=>{
                console.log('모바일 GNB 클릭 이벤트 진입');
                
                if(depth1.current[i].classList.contains("on")){
                    depth1.current[i].classList.remove("on");
                }
                else{
                    const depth1On = document.querySelectorAll(".m_gnb > li.on");
                    for(let j = 0; j < depth1On.length; j++){
                        depth1On[j].classList.remove("on");
                    }
                    depth1.current[i].classList.add("on");
                }
            });
        }
    })



    return (
        <>
            <header className="active" ref={header}>
                <div className="gnbbg" ref={gnbBg}></div>
                <div className="center">
                    <h1 className="logo">
                        <Link to='/'>
                            <img src="img/common/logo.png" alt=""/>
                        </Link>
                    </h1>
                    <ul className="gnb" ref={gnb} >
                        {
                            gnbMenu.map((item,index)=>{
                                return  <li key={index} ref={el => gnb1Depth.current[index] = el}>
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
                    <div className="m_btn" ref={mBtn} >
                        <div className="menu">
                            <span className="line one"></span>
                            <span className="line two"></span>
                            <span className="line three"></span>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- 모바일 메뉴 --> */}
            <div className="m_wrap" ref={mWrap}>
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
                            return  <li key={index} ref={el => depth1.current[index] = el}>
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
        </>
    )
}

export default Header


