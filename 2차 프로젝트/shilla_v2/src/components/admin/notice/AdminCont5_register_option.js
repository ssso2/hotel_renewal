import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_register_option = () => {
    return (
        <>
            <table className="r-table">
                <tr className="r-row">
                    <td className="N-title">분류</td>
                    <td className="N-type">
                        <input type="radio" name="category" value="공지" />
                        공지
                        <input
                            type="radio"
                            name="category"
                            className="radio"
                            value="안내"
                        />
                        안내
                        <input
                            type="radio"
                            name="category"
                            className="radio"
                            value="이벤트"
                        />
                        이벤트
                    </td>
                </tr>
                <tr className="r-row">
                    <td className="fileup">첨부파일</td>
                    <td className="N-con">
                        <input type="file" name="upfile" />
                    </td>
                </tr>
            </table>
            <div className="button-container">
                <button type="reset" className="cancel">
                    <Link to="/admin/notice">취소</Link>
                </button>
                <input type="submit" className="submit" value="등록" />
            </div>
        </>
    );
};

export default AdminCont5_register_option;
