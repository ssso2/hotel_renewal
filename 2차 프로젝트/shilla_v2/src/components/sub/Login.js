import React, { useEffect } from "react";
import Header from "../common/Header"
import Footer from "../common/Footer"
import LoginComp from "../sub/LoginComp"
import '../../scss/header.scss'
import '../../scss/footer.scss'

const bkURL = process.env.REACT_APP_BACK_URL;

const Login = () => {

    useEffect(()=>{
        document.title = '로그인';
    })

    return (
        <>
            {/* <Header></Header> */}
            <LoginComp></LoginComp>
            <Footer></Footer>
        </>
    );
};

export default Login;
