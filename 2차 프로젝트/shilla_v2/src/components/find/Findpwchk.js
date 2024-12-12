import React from "react";

const Findpwchk = ({ memberlist, setmemberlist, idchkhandle }) => {
    return (
        <div className="pw-chk" id="pw-chk">
            <h2 className="my-pw">비밀번호 변경</h2>
            <div className="comment">
                <div className="input-container">
                    <form name="myfrm">
                        <div className="title">아이디확인</div>
                        <div className="input-wrap">
                            <input
                                type="text"
                                id="pw"
                                name="id"
                                // minlength="12"
                                // maxlength="16"
                                placeholder="아이디를 입력해주세요."
                                required
                            />
                        </div>
                        <div className="title">패스워드</div>
                        <div className="input-wrap">
                            <input
                                type="password"
                                id="pw"
                                name="newpw"
                                // minlength="12"
                                // maxlength="16"
                                placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
                                required
                            />
                            <span
                                className="error-message"
                                id="pw-error"
                            ></span>
                        </div>
                        <div className="title">패스워드</div>
                        <div className="input-wrap">
                            <input
                                type="password"
                                id="pwchk"
                                name="newpwchk"
                                // minlength="12"
                                // maxlength="16"
                                placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
                                required
                            />
                            <span
                                className="error-message"
                                id="pwchk-error"
                            ></span>
                        </div>
                    </form>
                </div>
            </div>
            <button id="edit" onClick={idchkhandle}>
                변경완료
            </button>
        </div>
    );
};

export default Findpwchk;
