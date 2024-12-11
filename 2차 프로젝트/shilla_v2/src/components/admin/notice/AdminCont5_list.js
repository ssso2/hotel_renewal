import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminCont5_list = ({ Noticelists, setNoticelists }) => {
    // const [Noticelists, setNoticelists] = useState([]);
    const navigate = useNavigate();
    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get("http://localhost:5002/bk/notice");
    //         console.log("갔다옴", res.data);
    //         setNoticelists(res.data);
    //     } catch (error) {
    //         console.error("에러메세지", error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);
    console.log(new Date("2024-10-27").toISOString());

    const delGo = async id => {
        console.log("삭제요청 id:", id);
        const targetNotice = Noticelists.find(item => item.notice_id === id);
        // console.log("targetNotice", targetNotice);
        if (!targetNotice) {
            alert("공지사항을 찾을 수 없습니다.");
            return;
        }
        console.log("파일이름", targetNotice.system_name);
        try {
            const res = await axios.delete(
                `http://localhost:5002/bk/notice/delete/${id}`,
                {
                    data: { delUPfile: targetNotice.system_name },
                    headers: {
                        "Content-Type": "application/json", // JSON 본문
                    },
                }
            );
            console.log("삭제성공", res.data);
            alert("삭제되었습니다.");

            setNoticelists(prev => prev.filter(item => item.id !== id));
            navigate("/admin/notice");
        } catch (error) {
            console.error("삭제실패", error);
        }
    };
    // 날짜출력
    const formatter = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Seoul",
    });

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
                                    {formatter
                                        .format(new Date(data.reg_date))
                                        .replace(/\. /g, "-")
                                        .replace(
                                            /(\d{4}-\d{2}-\d{2})-(\d{2}:\d{2}:\d{2})/,
                                            "$1 $2"
                                        )}
                                </div>
                                <div className="N-date">
                                    {formatter
                                        .format(new Date(data.edit_date))
                                        .replace(/\. /g, "-")
                                        .replace(
                                            /(\d{4}-\d{2}-\d{2})-(\d{2}:\d{2}:\d{2})/,
                                            "$1 $2"
                                        )}
                                </div>
                                <div className="MDbtn">
                                    <Link
                                        to={`/admin/notice/modify/${data.notice_id}`}
                                        className="modify"
                                    >
                                        수정
                                    </Link>
                                    <span>/</span>
                                    <button
                                        className="delete"
                                        onClick={() => delGo(data.notice_id)}
                                    >
                                        삭제
                                    </button>
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
