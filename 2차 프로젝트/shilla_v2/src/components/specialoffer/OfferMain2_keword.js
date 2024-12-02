import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_kewords = () => {
    const keword = [
        {
            id: "check1",
            name: "조식",
        },
        {
            id: "check2",
            name: "라운지혜택",
        },
        {
            id: "check3",
            name: "기념일",
        },
        {
            id: "check4",
            name: "야외수영장",
        },
        {
            id: "check5",
            name: "성인3인",
        },
        {
            id: "check6",
            name: "2박이상",
        },
        {
            id: "check7",
            name: "키즈",
        },
    ];
    return (
        <>
            <div className="pkg-filter-keyword">
                <div className="keword-wrap">
                    <p className="kw-title">키워드</p>
                    <ul className="keywords">
                        {keword.map((keworddata, i) => {
                            return (
                                <li className="check" key={i}>
                                    <input
                                        type="checkbox"
                                        id={keworddata.id}
                                        name="keyword"
                                        value={keworddata.name}
                                    />
                                    <label for={keworddata.id}>
                                        {keworddata.name}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default OfferMain2_kewords;
