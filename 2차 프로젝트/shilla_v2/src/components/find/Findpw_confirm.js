import React from "react";
import Findpwchk from "./Findpwchk";

const Findpw_confirm = ({
    idchkhandle,
    iderr,
    id,
    // pwerr,
    // setpwerr,
    // pwchkerr,
    // setpwchkerr,
    confirmbtn,
}) => {
    return (
        <div className="pw-chk" id="pw-chk">
            {confirmbtn ? (
                <Findpwchk
                    id={id}
                    // pwerr={pwerr}
                    // setpwerr={setpwerr}
                    // pwchkerr={pwchkerr}
                    // setpwchkerr={setpwchkerr}
                />
            ) : (
                <>
                    <h2 className="my-pw">본인인증</h2>
                    <div className="comment">
                        <div className="input-container">
                            <form name="myfrm">
                                <div className="title">아이디확인</div>
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        id="pw"
                                        name="id"
                                        placeholder="아이디를 입력해주세요."
                                        required
                                    />
                                    {iderr && <div>{iderr}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <button id="edit" onClick={idchkhandle}>
                        확인완료
                    </button>
                </>
            )}
        </div>
    );
};

export default Findpw_confirm;
