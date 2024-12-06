import React, { useEffect } from "react"
import Header from '../common/Header'
import Footer from '../common/Footer'
import AdminTabMenu from './AdminTabMenu'
import AdminTabContants from './AdminTabContants'
import AdminCont1Chart from './AdminCont1Chart'
import '../../scss/admin.scss'

const AdminDashboard = () => {

    return (
        <>
            <Header/>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <AdminTabContants/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminDashboard;
