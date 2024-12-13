import React from "react";
import { Link } from "react-router-dom";

const AdminCsCont_Contents = ({ item }) => {
    return (
        <ul key={item.board_id} className={`table-contents ${item.answer === 1 ? "completed" : ""}`}>
            <li className="no">{item.board_id}</li>
            <li className="tit">
                {item.answer === 0 && <Link to="#self"><i className="fa-solid fa-star"></i>{item.title}</Link>}
                {item.answer === 1 && <Link to="#self">{item.title}</Link>}
            </li>
            <li className="author">{item.name}</li>
            <li className="date">{item.reg_str}</li> 
            <li className="answer">
                {item.answer === 0 ? '답변 대기' : '답변 완료'}
            </li>
        </ul>
    );
};

export default AdminCsCont_Contents;
