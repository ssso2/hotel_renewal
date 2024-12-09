import React from 'react'

const MyInfoChgCont = () => {
    return (
        <div className="mypage-info" id="mypage-info">
            <h2 className="title">회원정보 수정</h2>
            <label className="my-info">
                <p>이름</p>
                <input type="text" id="id" value="center121212" readonly />
            </label>
            <label className="my-info">
                <p>생년월일</p>
                <input type="text" id="birth" value="1991.08.31" readonly />
            </label>
            <label className="my-info">
                <p>연락처</p>
                <input type="text" id="contact" value="010-0000-0000" />
            </label>
            <label className="my-info">
                <p>이메일</p>
                <input type="text" id="mail" value="endorphin@naver.com" />
            </label>
            <label className="my-info">
                <div className="pwcheck">
                    <p>비밀번호 확인</p>
                    <input type="password" id="pw-chk2" />
                </div>
            </label>
            <label className="my-pw">
                <p id="error-message2"></p>
            </label>
            <input type="button" id="edit" value="수정완료" />
        </div>
    )
}

export default MyInfoChgCont
