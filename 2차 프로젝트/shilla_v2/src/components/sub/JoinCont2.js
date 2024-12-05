import React, { useEffect } from "react";
import '../../scss/myinfo.scss'

const JoinCont2 = () => {

    useEffect(()=>{
        $(document).ready(function () {
            // 수정된 부분
            let today = new Date();
            let year = today.getFullYear();

            for (let i = year; i >= 1930; i--) {
                $('#year').append('<option value="' + i + '">' + i + '년 </option>');
            }

            for (let i = 1; i <= 12; i++) {
                $('#month').append('<option value="' + i + '">' + i + '월 </option>');
            }

            for (let i = 1; i <= 31; i++) {
                $('#day').append('<option value="' + i + '">' + i + '일 </option>');
            }

            let startnum = ['010', '02', '031', '032', '033', '041', '042', '043', '044', '051', '052', '053', '054', '055', '061', '062', '063', '064'];
            for (let t = 0; t < startnum.length; t++) {
                $('#start').append('<option value="' + startnum[t] + '">' + startnum[t] + '</option>');
            }
        });

        let idchk = false;
        let valid = false;

        document.getElementById('submit').addEventListener('click', function () {
            const koname = document.getElementById('ko-name').value.trim();
            const firstname = document.getElementById('firstname').value.trim();
            const lastname = document.getElementById('lastname').value.trim();
            const pid = document.getElementById('pid').value.trim();
            const pw = document.getElementById('pw').value.trim();
            const pwchk = document.getElementById('pwchk').value.trim();
            const startNum = document.getElementById('start').value.trim();
            const middleNum = document.getElementById('middle').value.trim();
            const lastNum = document.getElementById('last').value.trim();
            const mail = document.getElementById('mail').value.trim();

            // 오류 메시지 초기화
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(message => (message.textContent = ''));

            // 국문 이름 유효성 검사
            const konametype = /^[가-힣]{2,5}$/;
            if (!koname) {
                document.getElementById('koname-error').textContent = '국문 이름을 입력하세요.';
                valid = false;
            } else if (!konametype.test(koname)) {
                document.getElementById('koname-error').textContent = '국문 이름은 한글(2~5자)만 사용 가능합니다.';
                valid = false;
            } else if (konametype.test(koname)) {
                document.getElementById('koname-error').textContent = '';
                valid = true;
            }

            // 영문 이름 유효성 검사
            const ennametype = /^[A-Za-z]+$/;
            if (!(firstname && lastname)) {
                document.getElementById('enname-error').textContent = '영문 이름을 입력하세요.';
                valid = false;
            } else if (!(ennametype.test(firstname) && ennametype.test(lastname))) {
                document.getElementById('enname-error').textContent = '영문 이름은 영어만 사용 가능합니다.';
                valid = false;
            } else if (ennametype.test(firstname) && ennametype.test(lastname)) {
                document.getElementById('enname-error').textContent = '';
                valid = true;
            }

            // 아이디 유효성 검사는 모달(중복확인)에서 진행 -- 아이디 중복확인을 안했을때
            if (!idchk) {
                document.getElementById('id-error').textContent = '아이디 중복확인을 해주세요.';
                valid = false;
            } else {
                document.getElementById('id-error').textContent = '';
                valid = true;
            }

            // 패스워드 유효성 검사
            const pwtype = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%~]).{12,16}$/;
            if (!pw) {
                document.getElementById('pw-error').textContent = '패스워드를 입력하세요.';
                valid = false;
            } else if (!pwtype.test(pw)) {
                document.getElementById('pw-error').textContent = '패스워드는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다.';
                valid = false;
            } else if (pwtype.test(pw)) {
                document.getElementById('pw-error').textContent = '';
                valid = true;
            }

            if (!pwchk) {
                document.getElementById('pwchk-error').textContent = '패스워드를 입력하세요.';
                valid = false;
            } else if (pwchk !== pw) {
                document.getElementById('pwchk-error').textContent = '패스워드가 일치하지 않습니다.';
                valid = false;
            } else if (pwchk == pw) {
                document.getElementById('pwchk-error').textContent = '';
                valid = true;
            }

            // 연락처 유효성 검사
            if (!middleNum || !lastNum) {
                document.getElementById('tel-error').textContent = '연락처를 입력하세요.';
                valid = false;
            } else {
                const isStartNum010 = startNum === '010';
                const isMiddleValid = isStartNum010 ? /^\d{4}$/.test(middleNum) : /^\d{3,4}$/.test(middleNum);
                const isLastValid = /^\d{4}$/.test(lastNum);

                if (!isMiddleValid || !isLastValid) {
                    document.getElementById('tel-error').textContent = isStartNum010 ? '연락처의 자리수를 확인하세요.' : '연락처의 자리수를 확인하세요.';
                    valid = false;
                } else if (isMiddleValid && isLastValid) {
                    document.getElementById('tel-error').textContent = '';
                    valid = true;
                }
            }

            // 이메일 유효성 검사
            const mailtype = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            if (!mail) {
                document.getElementById('mail-error').textContent = '이메일을 입력하세요.';
                valid = false;
            } else if (!mailtype.test(mail)) {
                document.getElementById('mail-error').textContent = '정확한 이메일 주소를 입력하세요.';
                valid = false;
            } else if (mailtype.test(mail)) {
                document.getElementById('mail-error').textContent = '';
                valid = true;
            }

            // 모든 유효성 검사 통과 시
            if (valid) {
                setTimeout(function () {
                    window.location.href = 'welcome.html'; // 이동할 홈페이지 URL로 변경
                }, 100);
            }
        });

        // 아이디 유효성 검사
        const idtype = /^[A-Za-z0-9]{6,}$/;
        document.getElementById('id-chk').addEventListener('click', function () {
            if (document.getElementById('pid').value.trim() === 'gagaclub') {
                document.querySelector('.pop-using .modal-txt').innerHTML = '현재 사용중인 아이디 입니다.<br> 다른 아이디를 사용해주세요.';
                idchk = false;
                valid = false;
                return;
            } else if (!document.getElementById('pid').value.trim()) {
                document.querySelector('.pop-using .modal-txt').innerHTML = '아이디를 입력하세요.';
                document.getElementById('id-error').textContent = '아이디를 입력하세요.';
                idchk = false;
                valid = false;
                return;
            } else if (document.getElementById('pid').value.trim().length < 6) {
                document.querySelector('.pop-using .modal-txt').innerHTML = '아이디는 6글자 이상이어야 합니다.';
                document.getElementById('id-error').textContent = '아이디는 6글자 이상이어야 합니다.';
                idchk = false;
                valid = false;
                return;
            } else if (!idtype.test(document.getElementById('pid').value.trim())) {
                document.querySelector('.pop-using .modal-txt').innerHTML = '아이디는 영문자와 숫자만 사용 가능합니다.';
                document.getElementById('id-error').textContent = '아이디는 영문자와 숫자만 사용 가능합니다.';
                idchk = false;
                valid = false;
                return;
            } else {
                document.querySelector('.pop-using .modal-txt').innerHTML = '사용가능한 아이디입니다.';
                document.getElementById('id-error').textContent = '';
                document.getElementById('pid').setAttribute('readonly', true);
                valid = true;
                idchk = true;
            }
        });

        function maxLengthCheck(object) {
            object.value = object.value.replace(/[^0-9]/g, '');
        }
    })

    return (
        <>
            <div class="form-wrap">
                <div class="center">
                    <form id="shilla-join" method="post">
                        <div class="join-container">
                            <h3 class="info-title">개인정보 입력</h3>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="ko-name">국문 이름 <font color="#F00">*</font> </label>
                                    <div class="input-wrap">
                                        <input type="text" id="ko-name" minlength="2" maxlength="5" placeholder="홍길동" />
                                        <span class="error-message" id="koname-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="en-name">영문 이름 <font color="#F00">*</font> </label>
                                    <div class="input-wrap">
                                        <div class="eng">
                                            <input type="text" id="firstname" placeholder="First name" class="name-input" />
                                            <input type="text" id="lastname" placeholder="Last name" class="name-input" />
                                        </div>
                                        <span class="error-message" id="enname-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="birth">생년월일</label>
                                    <div class="input-wrap">
                                        <div class="birth">
                                            <select name="yy" id="year"></select>
                                            <select name="mm" id="month"></select>
                                            <select name="dd" id="day"></select>
                                        </div>
                                        <span class="error-message" id="birth-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="pid">아이디 <font color="#F00">*</font></label>
                                    <div class="input-wrap">
                                        <input type="text" id="pid" minlength="6" placeholder="영문자, 숫자로 구성 (6자 이상)" />
                                        <button type="button" id="id-chk" data-lybtn="pop-using">중복확인</button>
                                        <span class="error-message" id="id-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="pw">패스워드 <font color="#F00">*</font></label>
                                    <div class="input-wrap">
                                        <input type="password" id="pw" minlength="12" maxlength="16" placeholder="영문, 숫자, 특수문자 포함 12-16자" />
                                        <span class="error-message" id="pw-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="pwchk">패스워드확인 <font color="#F00">*</font></label>
                                    <div class="input-wrap">
                                        <input type="password" id="pwchk" minlength="12" maxlength="16" placeholder="영문, 숫자, 특수문자 포함 12-16자" />
                                        <span class="error-message" id="pwchk-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="tel">연락처 <font color="#F00">*</font></label>
                                    <div class="input-wrap">
                                        <div class="tel-num">
                                            <select name="start" id="start"></select>
                                            <input type="text" id="middle" maxlength="4" oninput="maxLengthCheck(this)" />
                                            <input type="text" id="last" maxlength="4" oninput="maxLengthCheck(this)" />
                                            <span class="error-message" id="tel-error"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <label for="mail">이메일 <font color="#F00">*</font></label>
                                    <div class="input-wrap">
                                        <input type="text" id="mail" placeholder="honggildong@naver.com" />
                                        <span class="error-message" id="mail-error"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="info-group">
                                <div class="input-container">
                                    <button type="button" id="submit">가입하기</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div class="lypop pop-using" data-lyOpen="pop-using" tabindex="0">
                <div class="lypop-wp min">
                    <div class="lypop-content">
                        <div class="lypop-title">
                            <strong>중복확인</strong>
                        </div>
                        <div class="lypop-ct">
                            <p class="modal-txt"></p>
                            <div class="btn-wrap type5">
                                <button class="btn btn-04" data-lyClose="pop-using"><span>확인</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinCont2;

