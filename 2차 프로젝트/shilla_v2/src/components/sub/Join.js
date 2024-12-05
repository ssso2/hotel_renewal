import React, { useEffect } from "react";
import '../../scss/join.scss'
import JoinComp from './JoinComp'
import Header from "../common/Header";
import Footer from "../common/Footer";

const Join = () => {
    useEffect(()=>{
        document.title = '회원가입';
    })

    return (
        <>
            <Header></Header>
            <JoinComp></JoinComp>
            <Footer></Footer>
        </>
    );
};

export default Join;

