import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { title, commentpw } from "./Finddata";
import "../../scss/findpw.scss";
import { Form, Link } from "react-router-dom";
import Findpwchk from "./Findpwchk";
import axios from "axios";

const Findpw = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => {
        setclick(true);
    };

    const [memberlist, setmemberlist] = useState([]);
    const [id, setid] = useState("");
    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:5002/bk/find");
            console.log("받아옴", res.data);
            setmemberlist(res.data);
        } catch (error) {
            console.error("에러메세지", error);
        }
    };
    useEffect(() => {
        fetchdata();
    }, []);

    const idchkhandle = async e => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(document.myfrm)));

        const frmdata = new FormData(document.myfrm);
        const mydata = Object.fromEntries(frmdata);
        const res = await axios.put("http://localhost:5002/bk/idchk", mydata);
        try {
            console.log("폼데이터", frmdata);
            console.log("마이데이터", mydata);
            console.log("갔다옴", res.data);
            if (res.data.exists) {
                alert("아이디를 확인했습니다.");
            } else alert("없는 아이디입니다.");
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
                            <Findpwchk
                                memberlist={memberlist}
                                setmemberlist={setmemberlist}
                                idchkhandle={idchkhandle}
                                id={id}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Findpw;
