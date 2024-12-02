import React, { useState } from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

const OfferMain2_type = () => {
    const [typeOpen, settypeOpen] = useState(false);
    const [select, setselect] = useState("전체");

    const type = [
        {
            filter: "all",
            name: "전체",
        },
        {
            filter: "couple",
            name: "커플",
        },
        {
            filter: "familly",
            name: "패밀리",
        },
        {
            filter: "friends",
            name: "친구",
        },
        {
            filter: "promotion",
            name: "프로모션",
        },
    ];
    return (
        <>
            <div className="pkg-filter-sort">
                <p className="kw-title">유형구분</p>
                <div className={`dropdown type ${typeOpen ? "on" : ""}`}>
                    <div
                        className="typebox"
                        data-type="all"
                        onClick={() => settypeOpen(prev => !prev)}
                    >
                        {select}
                    </div>
                    <ul className="dropdown-item-type">
                        {type.map((typedata, i) => {
                            return (
                                <li
                                    className="filter-type"
                                    data-type={typedata.filter}
                                    onClick={() => {
                                        setselect(typedata.name);
                                        settypeOpen(false);
                                    }}
                                    key={i}
                                >
                                    {typedata.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* <select
                            name="type"
                            id="typebox"
                            className="dropdown type"
                        >
                            <option value="all">전체</option>
                            <option value="couple">커플</option>
                            <option value="familly">패밀리</option>
                            <option value="friends">친구</option>
                            <option value="promotion">프로모션</option>
                        </select> */}
            </div>
        </>
    );
};

export default OfferMain2_type;
