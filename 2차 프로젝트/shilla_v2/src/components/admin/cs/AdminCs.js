import React, { useEffect } from "react"
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import AdminTabMenu from '../AdminTabMenu'
import AdminCont7 from "./AdminCont7"
import '../../../scss/admin.scss'

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
                    <div className="tab-contents">
                        <AdminCont7/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminCs;
