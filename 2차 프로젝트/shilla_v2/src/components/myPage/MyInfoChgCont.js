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

    const myInfoText = [
        { title: "아이디", id: "userId", value: text.member_id },
        { title: "이름(국문)", id: "userName", value: text.name },
        { title: "이름(영문)", id: "userName_eng", value: text.name_eng },
        { title: "생년월일", id: "userBirth", value: text.birth },
        { title: "연락처", id: "userPhone", value: text.phone },
        { title: "이메일", id: "userEmail", value: text.email },
        { title: "이메일", id: "userEmail", value: text.email },
        { title: "이메일", id: "userEmail", value: text.email },
    ];

    return (
        <div className="mypage-info" id="mypage-info">
            <h2 className="title">회원정보 수정</h2>
            <label className="my-info">
                <p>아이디</p>
                <input type="text" id="userId" name="userId" value="center121212" readonly />
            </label>
            <label className="my-info">
                <p>이름(국문)</p>
                <input type="text" id="userName" name="userName" value="홍길동" readonly />
            </label>
            <label className="my-info">
                <p>이름(영문)</p>
                <input type="text" id="userName_eng" name="userName_eng" value="center121212" readonly />
            </label>
            <label className="my-info">
                <p>생년월일</p>
                <input type="text" id="userBirth" name="userBirth" value="1991.08.31" readonly />
            </label>
            <label className="my-info">
                <p>연락처</p>
                <input type="text" id="userPhone" name="userPhone" value="010-0000-0000" />
            </label>
            <label className="my-info">
                <p>이메일</p>
                <input type="text" id="userEmail" name="userEmail" value="endorphin@naver.com" />
            </label>
            <label className="my-info">
                <div className="pwcheck">
                    <p>비밀번호</p>
                    <input type="password" name="userPw" id="userPw" />
                </div>
            </label>
            <label className="my-info">
                <div className="pwcheck">
                    <p>비밀번호 확인</p>
                    <input type="password" name="pwChk" id="pwChk" />
                </div>
            </label>
            <label className="my-pw">
                <p id="error-message2"></p>
            </label>
            <input type="button" className="edit-btn" value="수정완료" />
        </div>
    )
}

export default MyInfoChgCont
