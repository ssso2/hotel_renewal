import React from "react";
import Alert from "./Alert";

const Noticebtn = ({ handleSearch, activepop }) => {
    return (
        <>
            <button className="s-btn" onClick={handleSearch}>
                검색
            </button>
            {activepop ? <Alert isactive={activepop} /> : console.log("안됨")}
        </>
    );
};

export default Noticebtn;
