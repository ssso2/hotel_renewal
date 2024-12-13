import React, { useState } from "react";

const Findpwchk = ({ id }) => {
    //유효성검사
    // const pw = document.getElementById("pw").value.trim();
    // if (!(pwtype.test(pw) || pwtype.test(pwchk))) {
    //     document.getElementById("pw-error").textContent =
    //         "패스워드는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다.";
    //     document.getElementById("pwchk-error").textContent =
    //         "패스워드는 영문, 숫자, 특수문자를 포함하여 12~16자여야 합니다.";
    //     valid = false;
    // } else if (pwtype.test(pw)) {
    //     document.getElementById("pw-error").textContent = "";
    //     valid = true;
    // }
    const [pwerr, setpwerr] = useState("");
    const [pwchkerr, setpwchkerr] = useState("");
    // console.log("아이디오나", id);

    const pwchkhandle = async e => {
        e.preventDefault();
        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        console.log("폼입력데이터", mydata);

        if (!mydata.pw && !mydata.newpw) {
            alert("내용을 모두 입력해주세요.");
            return;
        }
        if (!mydata.pw) {
            console.log("비밀번호 미입력");
            setpwerr("임시비밀번호를 입력하세요.");
        } else setpwerr("");
        if (!mydata.newpw) {
            console.log("비밀번호 미확인");
            setpwchkerr("새로운 비밀번호를 입력해주세요.");
        } else setpwchkerr("");
        try {
            const res = await axios.put(
                "http://localhost:5002/bk/find/pwchk",
                mydata,
                [id]
            );
            console.log("res.data", res.data, "값", res.data.success);
            if (res.data.success) {
                console.log("갔다옴", res.data);
                // setconfirmbtn(true);
                alert("비밀번호가 변경되었습니다.");
            } else if (!res.data.success)
                alert("임시비밀번호가 일치하지않습니다.");
        } catch (error) {
            console.log("에러메세지", error);
        }
    };

    return (
        <div className="pw-chk" id="pw-chk">
            <h2 className="my-pw">비밀번호 변경</h2>
            <div className="comment">
                <div className="input-container">
                    <form name="myfrm">
                        <div className="title">임시비밀번호</div>
                        <div className="input-wrap">
                            <input
                                type="password"
                                id="pw"
                                name="pw"
                                // minlength="12"
                                // maxlength="16"
                                placeholder="임시비밀번호를 입력하세요."
                                required
                            />
                            {setpwerr && <div>{pwerr}</div>}
                        </div>
                        <div className="title">새로운비밀번호</div>
                        <div className="input-wrap">
                            <input
                                type="password"
                                id="pwchk"
                                name="newpw"
                                // minlength="12"
                                // maxLength="16"
                                placeholder="영문, 숫자, 특수문자를 포함하여 12~16자"
                                required
                            />
                            {setpwchkerr && (
                                <div id="pwchk-error">{pwchkerr}</div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <button id="edit" onClick={pwchkhandle}>
                변경완료
            </button>
        </div>
    );
};

export default Findpwchk;
