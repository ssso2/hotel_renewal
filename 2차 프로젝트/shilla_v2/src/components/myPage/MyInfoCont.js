import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInfoCont = () => {

    const navigate = useNavigate();

    const myInfoText = [
        { title: "아이디", id: "userid", value: "center121212" },
        { title: "이름", id: "username", value: "박세라" },
        { title: "생년월일", id: "userbirth", value: "1991.08.31" },
        { title: "연락처", id: "contact", value: "010-0000-0000" },
        { title: "이메일", id: "mail", value: "endorphin@naver.com" },
    ];

    // pwChkGo 함수는 navigate를 호출하여 페이지 이동
    function pwChkGo() {
        navigate('/myPage/myPwChk');  // 페이지 이동
    }

    return (
        <div className="mypage-info user-info-wrap" id="user-info-wrap">
            <h2 className="title">회원정보</h2>
            {
                myInfoText.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type="text" id={item.id} value={item.value} readOnly />
                        </label>
                    );
                })
            }
            <input type="button" id="edit" value="회원정보 수정" onClick={pwChkGo} />  {/* 수정된 부분 */}
        </div>
    );
};

export default MyInfoCont;
