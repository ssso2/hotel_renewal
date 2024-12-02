import React, { useEffect } from "react";
import Header from '../common/Header'
import Footer from '../common/Footer'
import AdminTabMenu from './AdminTabMenu'
import AdminTabContants from './AdminTabContants'
import '../../scss/admin.scss'

const Admin = () => {

    useEffect(()=>{
        const tabMenu = document.querySelectorAll('.admin-wrap .tab-menu > li');
        const tabCont = document.querySelectorAll('.admin-wrap .tab-contents .cont');
        
        if(tabMenu && tabCont) {
            for(let i = 0; i < tabMenu.length; i++){
                tabMenu[i].addEventListener("click",function(){
                    for(let j = 0; j < tabMenu.length; j++){
                        tabMenu[j].classList.remove("on");
                        tabCont[j].classList.remove("on");
                    }
                    tabMenu[i].classList.add("on");
                    tabCont[i].classList.add("on");
                });
            }
        }

    },[])


    return (
        <>
            {/* <Header/> */}
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

export default Admin;
