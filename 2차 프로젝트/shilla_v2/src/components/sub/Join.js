import React, { useEffect } from "react";
import '../../scss/join.scss'
import JoinComp from './JoinComp'

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

