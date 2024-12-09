import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminCont5_Modify_require = () => {
    const { id } = useParams();
    console.log(id);
    const [modify, setmodify] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5002/bk/notice/detail/${id}`
            );
            console.log("갔다옴", res.data);
            setmodify(res.data);
        } catch (error) {
            console.error("에러메세지", error);
        }
    };

    useEffect(() => {
        if (!id) {
            console.log("id없음");
            return;
        }
        fetchData();
    }, [id]);

    if (!modify) {
        return <div>id 없음</div>;
    }

    return (
        <div className="listwrap">
            <div className="header">
                <h3>공지사항 수정 - 기본 정보</h3>
            </div>
            <table className="r-table">
                <tr className="r-row">
                    <td className="N-title">제목</td>
                    <td className="N-con">
                        {" "}
                        <input type="text" value={modify.title} />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">내용</td>
                    <td className="N-con areabox">
                        <textarea className="area" value={modify.context} />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AdminCont5_Modify_require;
