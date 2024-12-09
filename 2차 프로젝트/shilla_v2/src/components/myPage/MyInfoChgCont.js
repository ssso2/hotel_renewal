import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInfoChgCont = () => {

    const navigate = useNavigate();

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

        console.log("회원정보수정 시작 ",id)
        axios.get(`${bkURL}/mypage/${id}`)
        .then(res =>{
            console.log("회원정보수정 시작데이터 받아옴 ",res.data)
            setText(res.data);
            
        })
        .catch(err=>{
            console.error('마이페이지 에러발생 : ', err);
        })

    },[])

    const myInfoTextReadOnly = [
        { title: "아이디", id: "userId", value: text.member_id, name: 'userId',type : 'text' },
        { title: "이름(국문)", id: "userName", value: text.name, name: 'userName',type : 'text' },
        { title: "이름(영문)", id: "userName_eng", value: text.name_eng, name: 'userName_eng',type : 'text' },
        { title: "생년월일", id: "userBirth", value: text.birth, name: 'userBirth',type : 'text' },
    ];

    const myInfoText = [
        { title: "연락처", id: "userPhone", value: text.phone, name: 'userPhone',type : 'text' },
        { title: "이메일", id: "userEmail", value: text.email, name: 'userEmail',type : 'text' },
        { title: "현 비밀번호", id: "oldPw", value: '', name: 'oldPw',type : 'password' },
        { title: "새 비밀번호", id: "newPw", value: '', name: 'newPw',type : 'password' },
        { title: "새 비밀번호", id: "newPwChk", value: '', name: 'newPwChk',type : 'password' },
    ];

    return (
        <div className="mypage-info" id="mypage-info">
            <h2 className="title">회원정보 수정</h2>
            {
                myInfoTextReadOnly.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type={item.type} id={item.id} name={item.name} value={item.value} readOnly/>
                        </label>
                    );
                })
            }
            {
                myInfoText.map((item, index) => {
                    return (
                        <label className="my-info" key={index}>
                            <p>{item.title}</p>
                            <input type={item.type} id={item.id} name={item.name} placeholder={item.value}/>
                        </label>
                    );
                })
            }
            <input type="button" className="edit-btn" value="수정완료" />
        </div>
    )
}

export default MyInfoChgCont
