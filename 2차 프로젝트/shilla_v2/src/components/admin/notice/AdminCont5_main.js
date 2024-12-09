import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5.scss";
import { Link } from "react-router-dom";
import AdminCont5_list from "./AdminCont5_list";
import AdminCont5_form from "./AdminCont5_form";

const AdminCont5 = () => {
    const [Noticelists, setNoticelists] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:5002/bk/notice");
            console.log("갔다옴", res.data);
            setNoticelists(res);
        } catch (error) {
            console.error("에러메세지", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="cont cont5">
            <div className="search">
                <AdminCont5_form
                    Noticelists={Noticelists}
                    setNoticelists={setNoticelists}
                />
            </div>
            <AdminCont5_list />
        </div>
    );
};

export default AdminCont5;
