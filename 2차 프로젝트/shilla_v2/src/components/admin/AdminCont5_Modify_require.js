import React from "react";

const AdminCont5_Modify_require = () => {
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
                        <input type="text" />
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="N-title">내용</td>
                    <td className="N-con areabox">
                        <textarea className="area" />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default AdminCont5_Modify_require;
