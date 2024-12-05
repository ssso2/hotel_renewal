import React from "react";
import { Link } from "react-router-dom";
import '../../scss/welcome.scss'

const Welcome = () => {
    return  <div class="welcome-wrap">
                <div class="center">
                    <form id="shilla-login" action="#" method="post">
                        <div class="login-wrap" id="login-wrap">
                            <h2 class="welcome">가 입 완 료</h2>
                            <div class="hello">
                                <p>호텔신라의 회원이 되신 것을 축하드립니다.</p>
                                <p>고객님의 편안한 휴식에 호텔신라가 함께 하겠습니다.</p>
                            </div>

                            <div class="btn-wrap btn-200">
                                <Link to="/" class="btn btn-01">홈으로 가기</Link>
                                <Link to="/login" class="btn btn-02">로그인 하기</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
};

export default Welcome;
