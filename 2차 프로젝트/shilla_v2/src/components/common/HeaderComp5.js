import React from "react";
import { Link, Navigate } from 'react-router-dom';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/main.scss'

//const HeaderComp5 = ({gnbMenu,winPage,setWinPage, aaa}) => {
    const HeaderComp5 = ({gnbMenu}) => {    
    
    function bbb( wp){
        console.log("bbb : ",  wp)
        //setWinPage(wp)
        //Navigate(uuu)
    }
       

    return (
        <ul className="m_gnb">
            {
                gnbMenu.map((item,index)=>{
                    return  <li key={index} >
                               
                                <Link to='#self'>{item.title}</Link>
                                <ul className="m_sub" >
                                    {
                                        
                                        item.gnbMenu.map((depth2,idx)=>{
                                            return <li key={idx}><Link to={depth2.link} >{depth2.text}</Link></li>  
                                            // return <div key={idx}><Link onClick={()=>bbb(depth2.text)} to={depth2.link} >{depth2.text}</Link></div>  
                                            // return <div key={idx}><Link onClick={()=>setWinPage(depth2.text)} to={depth2.link} >{depth2.text}</Link></div>
                                            //   return <div key={idx}><Link to={depth2.link} onClick={()=>bbb( depth2.link, depth2.text)}>{depth2.text}</Link></div>
                                            //return <div onClick={bbb} key={idx}> wefwefwef {depth2.text}</div> 
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
