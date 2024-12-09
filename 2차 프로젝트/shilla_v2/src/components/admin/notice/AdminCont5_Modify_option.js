import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_Modify_option = () => {
    return (
        <div className="listwrap option">
            <div className="header">
                <h3>기타</h3>
            </div>
            <table className="r-table">
                <tr className="r-row">
                    <td className="N-title">분류</td>
                    <td className="N-type">
                        <input type="radio" name="ntype" />
                        공지
                        <input type="radio" name="ntype" className="radio" />
                        안내
                        <input type="radio" name="ntype" className="radio" />
                        이벤트
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="fileup">첨부파일</td>
                    <td className="N-con">
                        <input type="file" />
                    </td>
                </tr>
            </table>
            <div className="button-container">
                <button type="reset" className="cancel">
                    <Link to="/admin/notice">취소</Link>
                </button>
                <button type="submit" className="submit">
                    저장
                </button>
            </div>
        </div>
    );
};

export default AdminCont5_Modify_option;
