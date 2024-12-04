import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/sub06_03.scss'
import SecretPage from "./SecretPage";

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardList = () => {


    const [text,setText] = useState([])
    const [user,setUser] = useState(null)

    useEffect(()=>{

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");
        
        if(id){
            setUser({'id':id,"name": name,"grade":grade})
            
        }else{
            setUser(null)
        }

        axios.get(`${bkURL}/board`)
        .then(res =>{
            setText(res.data);
            console.log('text:',res.data);
            
        })
        .catch(err=>{
            console.error('에러발생 : ', err);
        })

    },[])


    return (
        <div className="container">
            <div className="center">
                <h2 className="title">1:1문의</h2>
                <ul className="board-nav">
                    <li className="post-num">번호</li>
                    <li className="post-title">제목</li>
                    <li className="post-writer">작성자</li>
                    <li className="post-date">작성일</li>
                </ul>

                {
                    text.map((list,idx)=>{
                        return <ul className="post" key={idx}>
                                    <li className="post-num">{list.board_id}</li>
                                    <SecretPage  data={list} user={user}/>
                                    <li className="post-writer">{list.author}</li>
                                    <li className="post-date">{list.reg_str}</li>
                                </ul>
                    })
                }

                <div className="search-wrap">
                    <div className="search" role="search">
                        <input type="text" />
                        <button className="search-btn" type="button"><span>검색</span></button>
                    </div>
                    <div className="btn-wrap type4">
                        <div className="align">
                            <Link to="/board/join" className="btn btn-01">문의하기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BoardList;


