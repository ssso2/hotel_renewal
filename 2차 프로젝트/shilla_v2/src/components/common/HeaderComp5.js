import React from "react";
import { Link } from 'react-router-dom';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/main.scss'

const HeaderComp5 = ({gnbMenu,winPage,setWinPage}) => {
    
    const handlePageChange = (newPage) => {
        if (winPage !== newPage) {
            setWinPage(newPage);
        }
    };

    return (
        <ul className="m_gnb">
            {
                gnbMenu.map((item,index)=>{
                    return  <li key={index} >
                                <Link to='#self'>{item.title}</Link>
                                <ul className="m_sub">
                                    {
                                        item.gnbMenu.map((depth2,idx)=>{
                                            return <li key={idx}><Link to={depth2.link} onClick={() => handlePageChange(winPage === 0 ? 1 : 0)}>{depth2.text}</Link></li>
                                        })
                                    }
                                </ul>
                            </li>
                })
            }
        </ul>
    );
};

export default HeaderComp5;
