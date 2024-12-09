import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5.scss";
import { Link } from "react-router-dom";

const AdminCont5_search = ({ Txtinput, setTxtinput }) => {
    const handleInput = e => {
        setTxtinput(e.target.value);
        console.log("검색단어", Txtinput);
    };
    return (
        <div className="search-container">
            <div className="cell">검색어</div>
            <input
                type="text"
                className="con"
                placeholder="제목을 입력하세요."
                onChange={handleInput}
            />
        </div>
    );
};

export default AdminCont5_search;
