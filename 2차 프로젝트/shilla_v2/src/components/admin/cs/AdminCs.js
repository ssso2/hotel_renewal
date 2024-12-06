import React, { useEffect } from "react"
import Header from '../common/Header'
import Footer from '../common/Footer'
import AdminTabMenu from './AdminTabMenu'
import AdminCont5 from "./AdminCont5"
import '../../scss/admin.scss'

const AdminCs = () => {

    useEffect(()=>{
        document.title = "신라호텔:관리자"
    },[])

    return (
        <>
            <Header/>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <AdminCont5/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminCs;
