import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { title, commentpw } from "./Finddata";
import "../../scss/findpw.scss";
import { Form, Link, Navigate, useNavigate } from "react-router-dom";
import Findpwchk from "./Findpwchk";
import axios from "axios";

const Findpw = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => {
        setclick(true);
    };

    const navigate = useNavigate();

    const idchkhandle = async e => {
        e.preventDefault();
        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        console.log("폼입력데이터", mydata);

        if (!mydata.id) {
            console.log("아이디를 입력하세요.");
        } else if (!mydata.newpw) {
            console.log("비밀번호를 입력하세요.");
        } else if (!mydata.newpwchk) {
            console.log("비밀번호를 확인하세요.");
        }

        const res = await axios.put(
            "http://localhost:5002/bk/find/newpw",
            mydata
        );

        try {
            // console.log("res.data", res.data, "값", res.data.success);
            if (res.data.success) {
                // console.log("갔다옴", res.data);
                alert("아이디를 확인했습니다.");
                navigate("/login");
            } else alert("일치하는 아이디가 없습니다.");
        } catch (error) {
            console.log("에러메세지", error);
        }
    };
    return (
        <>
            <Header />
            <div className="container">
                <div className="center">
                    <div className="depth3-tab-wrap">
                        <ul className="tab">
                            <li className="tab1">
                                <Link to="/findid">아이디 찾기</Link>
                            </li>
                            <li className="tab2 on findchk">
                                <span>비밀번호 찾기</span>
                            </li>
                        </ul>

                        {!click ? (
                            <div className="lost-info" id="lost-info">
                                <h2 className="lost-pw">{title[1]}</h2>
                                <div className="comment">
                                    {commentpw.map((des, i) => (
                                        <p key={i}>{des}</p>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className={
                                        click ? "id-chk" : "indentity-confirm"
                                    }
                                    onClick={handleclick}
                                >
                                    본인인증
                                </button>
                            </div>
                        ) : (
                            <Findpwchk idchkhandle={idchkhandle} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Findpw;
