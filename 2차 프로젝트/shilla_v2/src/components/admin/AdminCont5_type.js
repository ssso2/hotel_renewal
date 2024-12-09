import React, { useEffect, useState } from "react";
import "../../scss/AdminCont5.scss";
import { Link } from "react-router-dom";

const AdminCont5_type = ({ Ntype, setNtype }) => {
    const handleType = e => {
        setNtype(e.target.value);
        console.log("선택타입", Ntype);
    };
    return (
        <div className="search-container">
            <div className="cell">상세검색</div>
            <select
                name="type"
                id=""
                className="category"
                onChange={handleType}
            >
                <option value="all">분류</option>
                <option value="notice">공지</option>
                <option value="guide">안내</option>
                <option value="event">이벤트</option>
            </select>
        </div>
    );
};

export default AdminCont5_type;
