import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_list = () => {
    const [Noticelists, setNoticelists] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5002/bk/notice");
            console.log("갔다옴", res.data);
            setNoticelists(res.data);
        } catch (error) {
            console.error("에러메세지", error);
        }
    };
    useEffect(() => {
        document.title = "관리자 - 공지사항";
        fetchData();
    }, []);
    return (
        <div className="list">
            <div className="listwrapper">
                <div className="header">
                    <h3>공지사항리스트 </h3>
                    <Link to="/admin/notice/register" className="submit">
                        공지사항 등록
                    </Link>
                </div>
                <div className="list-container">
                    <ul className="Nboard-nav">
                        <li className="N-num">번호</li>
                        <li className="N-option">분류</li>
                        <li className="N-title">제목</li>
                        <li className="N-view">조회수</li>
                        <li className="N-date">작성일</li>
                        <li className="N-date">수정일</li>
                        <li className="add">비고</li>
                    </ul>
                    <ul className="Nboard">
                        {Noticelists.map(data => (
                            <li className="listwrap" key={data.notice_id}>
                                <div className="N-num">{data.notice_id}</div>
                                <div className="N-option">{data.category}</div>
                                <div className="N-title">
                                    <span className="Nlink">{data.title}</span>
                                </div>
                                <div className="N-view"> {data.view_point}</div>
                                <div className="N-date">
                                    {
                                        new Date(data.reg_date)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                </div>
                                <div className="N-date">
                                    {
                                        new Date(data.reg_date)
                                            .toISOString()
                                            .split("T")[0]
                                    }
                                </div>
                                <div className="MDbtn">
                                    <Link
                                        to={`/admin/notice/modify/${data.notice_id}`}
                                        className="modify"
                                    >
                                        수정
                                    </Link>
                                    <span>/</span>
                                    <Link to="" className="delete">
                                        삭제
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminCont5_list;
