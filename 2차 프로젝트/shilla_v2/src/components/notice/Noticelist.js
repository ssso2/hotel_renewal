import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/notice.scss";
import Noticesearch from "./Noticesearch";
// import { useParams } from "react-router-dom";

const Noticelist = () => {
    const [Noticelists, setNoticelists] = useState([]);
    const [Ntype, setNtype] = useState("all");
    const [Ntext, setNtext] = useState("");

    //공지사항 전체
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5002/bk/notice");
            console.log("전체데이터", res.data);
            setNoticelists(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };

    useEffect(() => {
        document.title = "공지사항";
        fetchData();
    }, []);

    //검색
    const handleSearch = async e => {
        e.preventDefault();

        const frmData = new FormData(document.myFrm);
        const myData = Object.fromEntries(frmData);

        try {
            console.log("폼데이터", myData);
            const res = await axios.put(
                "http://localhost:5002/bk/notice",
                myData
            );
            console.log("필터데이터", res.data);
            alert("검색완료");
            setNoticelists(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="center">
                    <h2 className="Ntitle">공지사항</h2>
                    <ul className="Nboard-nav">
                        <li className="N-num">번호</li>
                        <li className="N-option">분류</li>
                        <li className="N-title">제목</li>
                        <li className="N-view">조회수</li>
                        <li className="N-date">작성일</li>
                    </ul>
                    <ul className="Nboard">
                        {Noticelists.map(data => (
                            <li className="listwrap" key={data.notice_id}>
                                <div className="N-num">{data.notice_id}</div>
                                <div className="N-option">{data.category}</div>
                                <div className="N-title">
                                    <Link
                                        to={`/notice/detail/${data.notice_id}`}
                                        className="Nlink"
                                    >
                                        {data.title}
                                    </Link>
                                </div>
                                <div className="N-view"> {data.view_point}</div>
                                <div className="N-date">
                                    {
                                        new Date(data.reg_date)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Noticesearch
                        Noticelists={Noticelists}
                        setNoticelists={setNoticelists}
                        Ntype={Ntype}
                        setNtype={setNtype}
                        Ntext={Ntext}
                        setNtext={setNtext}
                        handleSearch={handleSearch}
                    />
                </div>
            </div>
        </div>
    );
};

export default Noticelist;
