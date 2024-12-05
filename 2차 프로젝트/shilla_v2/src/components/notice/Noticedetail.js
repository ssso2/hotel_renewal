import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Noticedetail = () => {
    const [Noticedetail, setNoticedetail] = useState({});
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5002/bk/notice/detail/${id}`
            );
            console.log("갔다옴 : ", res.data);
            setNoticedetail(res.data);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        document.title = "공지사항";
        fetchData();
    }, []);

    return (
        <div className="container board">
            <div className="center">
                <h2 className="ask">공지사항 {id}</h2>
                <div className="text-container">
                    <div className="title-wrap">
                        <div className="title">
                            <p className="subject">{Noticedetail.title}</p>
                            <div className="writer-wrap">
                                <p className="writer">
                                    {Noticedetail.category}
                                </p>
                                <p className="submit-time">
                                    {Noticedetail.reg_date}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content">{Noticedetail.context}</div>
                </div>
                <div className="button-wrap">
                    <Link to={"/notice"} className="list">
                        목록으로
                    </Link>
                    <div className="button-container">
                        <button className="delete">
                            <span>삭제</span>
                        </button>
                        <Link
                            to={`/board/modify/${Noticedetail.id}`}
                            className="edit"
                        >
                            수정
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noticedetail;
