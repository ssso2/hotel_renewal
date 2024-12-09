import React, { useEffect, useState } from "react";
import "../../scss/AdminCont5.scss";
import { Link } from "react-router-dom";
import AdminCont5_search from "./AdminCont5_search";
import AdminCont5_type from "./AdminCont5_type";
import AdminCont5_btn from "./AdminCont5_btn";

const AdminCont5_form = ({ Noticelists, setNoticelists }) => {
    const [Txtinput, setTxtinput] = useState("");
    const [Ntype, setNtype] = useState("");

    const handleSearch = async e => {
        e.preventDefault();
        const frmData = new FormData(document.myFrm);
        const myData = Object.fromEntries(frmData);

        try {
            console.log("폼데이터", myData);
            const res = await axios.put(
                "http://localhost:5002/bk/notice",
                myData
            );
            console.log("필터데이터", res.data);
            alert("필터클릭완료");
            setNoticelists(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };
    return (
        <form className="searchwrap" name="myfrm">
            <AdminCont5_search Txtinput={Txtinput} setTxtinput={setTxtinput} />
            <AdminCont5_type setNtype={setNtype} Ntype={Ntype} />
            <AdminCont5_btn handleSearch={handleSearch} />
        </form>
    );
};

export default AdminCont5_form;
