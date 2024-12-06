import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const BoardTemp = () => {
    useEffect(()=>{
        document.title = "신라호텔:관리자"
    },[])

    return (
            <>
                <Outlet/>
            </>
        );
};

export default BoardTemp;