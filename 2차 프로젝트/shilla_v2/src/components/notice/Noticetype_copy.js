import React, { useState } from "react";

const Noticetype_copy = ({ Ntype, setNtype }) => {
    const [typeOpen, settypeOpen] = useState(false);
    // const typehandle = e => {
    //     setNtype(typedata.name);
    //     settypeOpen(false);
    // };

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
                    data-type="전체"
                    onClick={() => settypeOpen(prev => !prev)}
                >
                    {Ntype}
                </div>
                <ul className="dropdown-item-type">
                    {types.map((typedata, i) => {
                        return (
                            <li
                                className="filter-type"
                                data-type={typedata.name}
                                onClick={() => {
                                    setNtype(typedata.name);
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
