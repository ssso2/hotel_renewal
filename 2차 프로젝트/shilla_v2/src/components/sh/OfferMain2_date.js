import React, { useState } from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_date = () => {
    return (
        <>
            <div className="pkg-datepicker-box">
                <label for="daterange3" className="kw-title">
                    기간조회
                </label>
                <span className="pkg-date">
                    <input
                        type="text"
                        className="date"
                        name="daterange3"
                        id="daterange3"
                        value=""
                        autocomplete="off"
                        placeholder="예약기간을 선택하세요."
                    />
                </span>
            </div>
        </>
    );
};

export default OfferMain2_date;
