import React from 'react'

const MyPwChkCont = () => {
    return (
        <div className="change-info-chk" id="change-info-chk">
            <h2 className="title">비밀번호 확인</h2>
            <div className="pwdiv">
                <label><input type="password" id="pw-chk" /></label>
                <p id="error-message1"></p>
                <input type="button" id="btn-confirm" value="확인" />
            </div>
        </div>
    )
}

export default MyPwChkCont
