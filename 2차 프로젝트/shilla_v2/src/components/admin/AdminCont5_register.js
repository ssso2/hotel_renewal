import React, { useEffect, useState } from "react";
import "../../scss/AdminCont5_register.scss";
import { Link } from "react-router-dom";
import AdminCont5_register_option from "./AdminCont5_register_option";
import AdminCont5_register_require from "./AdminCont5_register_require";

const AdminCont5_register = () => {
    return (
        <div className="cont cont5">
            <h2>공지사항</h2>
            <div className="list">
                <AdminCont5_register_require />
                <AdminCont5_register_option />
            </div>
        </div>
    );
};

export default AdminCont5_register;
