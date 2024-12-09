import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminCont5_register_require = () => {
    return (
        <table className="r-table">
            <tr className="r-row">
                <td className="N-title">제목</td>
                <td className="N-con">
                    {" "}
                    <input type="text" name="title" />
                </td>
            </tr>
            <tr className="r-row">
                <td className="N-title">내용</td>
                <td className="N-con areabox">
                    <textarea className="area" name="context" />
                </td>
            </tr>
        </table>
    );
};

export default AdminCont5_register_require;
