import React from "react";
import {Link} from 'react-router-dom';
import Header from "../common/Header"
import Footer from "../common/Footer"
import '../../scss/header.scss'
import '../../scss/common.scss'
import '../../scss/footer.scss'
import '../../scss/login.scss'

const Login = () => {
    // function valuechk() {
    //     const userid = document.getElementById('id').value;
    //     const userpw = document.getElementById('pw').value;
    //     const errorMessage = document.getElementById('error-message');
    //     const errorMessage2 = document.getElementById('error-message2');
    //     const errorMessage3 = document.getElementById('error-message3');
    //     const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/; // 비밀번호 유효성 검사 정규식
    //     const idtype = /^[A-Za-z0-9]{6,}$/; // 아이디 유효성 검사 정규식

    //     // 모든 에러 메시지 숨기고 시작
    //     errorMessage.style.display = 'none';
    //     errorMessage2.style.display = 'none';
    //     errorMessage3.style.display = 'none';

    //     // 아이디 또는 비밀번호가 비어 있는지 확인
    //     if (userid === '' || userpw === '') {
    //         errorMessage.style.display = 'block'; // 공란일 때 에러 메시지 표시
    //         return; // 함수 종료
    //     }

    //     // 비밀번호 유효성 검사 실패 시
    //     if (!pwtype.test(userpw)) {
    //         errorMessage2.style.display = 'block'; // 비밀번호 에러 메시지 표시
    //         return; // 함수 종료
    //     }

    //     // 아이디 유효성 검사 실패 시
    //     if (!idtype.test(userid)) {
    //         errorMessage3.style.display = 'block'; // 아이디 에러 메시지 표시
    //         return; // 함수 종료
    //     }

    //     // 위 조건 충족 시
    //     location.href = '../index-login.html'; // 페이지 이동
    // }


    return (
        <>
            <Header></Header>
            {/* <!-- 로그인 --> */}
            <div className="form-wrap">
                <div className="center">
                    <form id="shilla-login" method="post">
                        <div className="login-wrap" id="login-wrap">
                            <h2>로 그 인</h2>
                            <div className="hello">서울 신라호텔에 오신 것을 환영합니다.</div>
                            <div className="part-id">
                                <label for="id">아이디 </label>
                                <input type="text" id="id" autocomplete="none" />
                            </div>
                            <div className="part-pw">
                                <label for="pw">비밀번호 </label>
                                <input type="password" id="pw" maxlength="16" />
                            </div>
                            <div className="part-error">
                                <p id="error-message" className="error-message">아이디와 비밀번호를 확인해 주세요.</p>
                                <p id="error-message2" className="error-message">패스워드는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다.</p>
                                <p id="error-message3" className="error-message">아이디는 영문자와 숫자만(6글자 이상) 사용 가능합니다.</p>
                            </div>
                            <button type="button" className="btn-login"  >로그인</button>

                            <div className="link-wrap">
                                <Link to="join">회원가입</Link>
                                <Link to="findid">ID/PW찾기</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
