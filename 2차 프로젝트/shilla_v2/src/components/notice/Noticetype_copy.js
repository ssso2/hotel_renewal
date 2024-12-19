import React, { useState } from "react";

const Noticetype_copy = ({ Ntype, setNtype }) => {
    const [typeOpen, settypeOpen] = useState(false);
    const typehandle = async e => {
        const selectType = e.target.value;
        console.log("이타겟벨류", e.target.value);
        settypeOpen(true);
        setNtype(selectType);
        console.log("검색타입", Ntype);
    };
    const type = [
        {
            filter: "all",
            name: "전체",
        },
        {
            filter: "title",
            name: "제목",
        },
        {
            filter: "context",
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
                    {type.map((typedata, i) => {
                        return (
                            <li
                                className="filter-type"
                                data-type={typedata.filter}
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
