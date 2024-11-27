import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_btn = () => {
    return (
        <>
            <div className="pkg-btnbox">
                <input
                    type="button"
                    className="pkg-filter-resetbtn"
                    value="초기화"
                />
                <input
                    type="button"
                    className="pkg-filter-searchbtn"
                    value="검색"
                />
            </div>
        </>
    );
};

export default OfferMain2_btn;
