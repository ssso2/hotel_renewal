import React, { useEffect, useState } from "react";
import "../../../scss/AdminCont5_register.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AdminCont5_Modify_require from "./AdminCont5_Modify_require";
import AdminCont5_Modify__option from "./AdminCont5_Modify_option";

const AdminCont5_Modify = () => {
    return (
        <div className="cont cont5">
            <div className="list">
                <AdminCont5_Modify_require />
                <AdminCont5_Modify__option />
            </div>
        </div>
    );
};

export default AdminCont5_Modify;
