import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../scss/noticedetail.scss";
import NoticedetailOther from "./NoticedetailOther";

const Noticedetail = () => {
    const [Noticedetails, setNoticedetails] = useState([]);
    const { id } = useParams();
    if (Noticedetails == undefined) {
        return <div>로딩중</div>;
    }
    if (!Noticedetails || !id) {
        return <div>로딩중</div>;
    }
    const fetchData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5002/bk/notice/detail/${id}`
            );
            console.log("갔다옴 : ", res.data);
            setNoticedetails(res.data);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        document.title = "공지사항";
        fetchData();
    }, [id]);
    const imgurl = Noticedetails.system_name
        ? `http://localhost:5002/bk/files/${Noticedetails.system_name}`
        : "";

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
    const context = Noticedetails.context || ""; // 빈문자열 경우의 수 처리
    console.log("내용", typeof context);

    return (
        <div className="container board">
            <div className="center">
                <h2 className="ask">공지사항</h2>
                <div className="text-container">
                    <div className="title-wrap">
                        <div className="title">
                            <div className="N_maintitle">
                                <p className="titlecategory">
                                    {/* Noticedetails가 null 또는 undefined일 경우 허용 조건*/}
                                    {Noticedetails?.category
                                        ? `[${Noticedetails.category}]`
                                        : ""}
                                    {/* [{Noticedetails.category || " "}] */}
                                </p>
                                <p className="subject">{Noticedetails.title}</p>
                            </div>

                            <div className="writer-wrap">
                                {/* 초기값 undefinded 처리작업 필요*/}
                                {/* {Noticedetails.reg_date &&
                                    Noticedetails.reg_date.split("T")[0]} */}
                                {Noticedetails.reg_date &&
                                    formatter
                                        .format(
                                            new Date(Noticedetails.reg_date)
                                        )
                                        .replace(/\. /g, "-")
                                        .replace(
                                            /(\d{4}-\d{2}-\d{2})-(\d{2}:\d{2}:\d{2})/,
                                            "$1 $2"
                                        )}
                            </div>
                        </div>
                    </div>
                    <div className="content ncontent">
                        {imgurl && <img src={imgurl} className="imgstyle" />}
                        <div className="Ntext">
                            {/* {Noticedetails.context} */}
                            {/* 줄바꿈해결 */}
                            {context.split("\\n").map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="button-container notice">
                    <Link to="/notice" className="listgo">
                        목록으로
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Noticedetail;
