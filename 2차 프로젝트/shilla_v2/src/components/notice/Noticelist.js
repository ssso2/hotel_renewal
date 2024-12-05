import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/notice.scss";
// import { useParams } from "react-router-dom";

const Noticelist = () => {
    // const { id } = req.params;
    const [Noticelists, setNoticelists] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5002/bk/notice");
            console.log("갔다오는지체크", res.data);
            setNoticelists(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };
    useEffect(() => {
        console.log("공지뜨나");
        document.title = "공지사항";
        fetchData();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="center">
                    <h2 className="Ntitle">공지사항</h2>
                    <ul className="Nboard-nav">
                        <li className="N-num">번호</li>
                        <li className="N-title">제목</li>
                        <li className="N-view">조회수</li>
                        <li className="N-date">작성일</li>
                    </ul>
                    <ul className="Nboard">
                        {Noticelists.map(data => (
                            <div key={data.notice_id} className="listwrap">
                                <li className="N-num">{data.notice_id}</li>
                                <li className="N-title">
                                    <Link
                                        to={`/notice/detail/${data.notice_id}`}
                                    >
                                        {data.title}
                                    </Link>
                                </li>
                                <li className="N-view"> {data.view_point}</li>
                                <li className="N-date">
                                    {" "}
                                    {data.reg_date.split("T")[0]}
                                </li>
                            </div>
                        ))}
                    </ul>
                    <div className="Nsearch-wrap">
                        {/* <div className="search" role="search"> */}
                        <form action="" className="Nform">
                            <select name="search" id="">
                                <option value="title">제목</option>
                                <option value="title">내용</option>
                            </select>
                            <input
                                type="text"
                                id="search"
                                placeholder="검색어를 입력해주세요."
                            />
                            <Link to="#" id="searchButton">
                                <span>검색</span>
                            </Link>
                        </form>
                        {/* </div> */}
                        {/* <div className="btn-wrap type4">
                            <div className="align">
                                <Link
                                    to="../sub/sub06_03_01.html"
                                    className="btn btn-01"
                                >
                                    문의하기
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noticelist;
