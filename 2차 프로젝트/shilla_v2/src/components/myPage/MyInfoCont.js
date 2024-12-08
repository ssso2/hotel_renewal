import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;


const MyInfoCont = () => {

    // const [text,setText] = useState([])
    // const [user,setUser] = useState(null)

    // useEffect(()=>{

    //     // 로그인 여부 확인
    //     const id = sessionStorage.getItem("id");
    //     const name = sessionStorage.getItem("name");
    //     const grade = sessionStorage.getItem("grade");
        
    //     if(id){
    //         setUser({'id':id,"name": name,"grade":grade})
            
    //     }else{
    //         setUser(null)
    //     }

    //     axios.get(`${bkURL}/myPage`)
    //     .then(res =>{
    //         setText(res.data);
    //     })
    //     .catch(err=>{
    //         console.error('에러발생 : ', err);
    //     })

    // },[])

    // const navigate = useNavigate

    const myInfoText = [
        {title : "아이디", id : "userid", value : "center121212"},
        {title : "이름", id : "username", value : "박세라"},
        {title : "생년월일", id : "userbirth", value : "1991.08.31"},
        {title : "연락처", id : "contact", value : "010-0000-0000"},
        {title : "이메일", id : "mail", value : "endorphin@naver.com"},
    ]

    // if(!user){
    //     navigate('/myPage');
    // }

    return (
        <div className="mypage-info user-info-wrap" id="user-info-wrap">
            <h2 className="title">회원정보</h2>
            {
                myInfoText.map((item,index)=>{
                    return  <label className="my-info" key={index}>
                                <p>{item.title}</p>
                                <input type="text" id={item.id} value={item.value} readonly />
                            </label>
                })
            }
            <input type="button" id="edit" value="회원정보 수정" onclick="location.href ='./mypage.html'" />
        </div>
    )
}

export default MyInfoCont
