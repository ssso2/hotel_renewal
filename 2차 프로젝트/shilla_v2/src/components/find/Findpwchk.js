import React from "react";

const Findpwchk = ({ memberlist, setmemberlist, id, idchkhandle }) => {
    console.log("아이디", id);
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
                                name="member_id"
                                minlength="12"
                                maxlength="16"
                                placeholder="아이디를 입력해주세요."
                            />
                            <button id="edit" onClick={idchkhandle}>
                                아이디확인
                            </button>
                        </div>
                        <div className="title">패스워드</div>
                        <div className="input-wrap">
                            <input
                                type="password"
                                id="pw"
                                minlength="12"
                                maxlength="16"
                                placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
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
                                minlength="12"
                                maxlength="16"
                                placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
                            />
                            <span
                                className="error-message"
                                id="pwchk-error"
                            ></span>
                        </div>
                    </form>
                </div>
            </div>
            <input type="button" id="edit" value="변경완료" />
        </div>
    );
};

export default Findpwchk;
