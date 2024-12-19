import React, { useState } from "react";

const Noticetype_copy = ({ Ntype, setNtype }) => {
    const [typeOpen, settypeOpen] = useState(false);
    const typehandle = async e => {
        // const selectType = e.target.getAttribute("data-type");
        settypeOpen(true);
        // setNtype(selectType);
        // console.log("선택타입", selectType);
    };
    const types = [
        {
            value: "all",
            name: "전체",
        },
        {
            value: "title",
            name: "제목",
        },
        {
            value: "context",
            name: "내용",
        },
    ];
    return (
        <>
            <div className={`dropdown type ${typeOpen ? "on" : ""}`}>
                <div
                    className="typebox"
                    data-type="all"
                    onClick={() => typehandle(prev => !prev)}
                >
                    {Ntype}
                </div>
                <ul className="dropdown-item-type">
                    {types.map((typedata, i) => {
                        return (
                            <li
                                className="filter-type"
                                data-type={typedata.value}
                                onClick={e => {
                                    setNtype(
                                        e.target.getAttribute("data-type")
                                    );
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
        </>
    );
};

export default Noticetype_copy;
