import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/sub06_03_01.scss'

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardJoin = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        document.title = '게시판 글쓰기';
    },[])


    function submitGo(e){
        e.preventDefault()

        const frmData = new FormData(document.myFrm) //아래 폼태그 name 값 가져옴

        const data = Object.fromEntries(frmData);

        console.log('submitGo() 진입');
        console.log(data);

        const checked = (!data.secret)? data.secret=false : data.secret=true
        

        axios.post(`${bkURL}/board/join`,data,checked)
        .then(res =>{
            console.log('등록 완료 : ', res.data);
            alert('등록되었습니다.');
            navigate(`/board/detail/${res.data.newId}`)
            // navigate('/board/detail');

        }).catch(err =>{
            console.log('등록 오류 : ', err);
        })
    }

    return (
        <div className="container">
            <div className="center">
                <form name="myFrm" onSubmit={submitGo}>
                    <h2 className="ask">문의하기</h2>
                    <div className="text-container">
                        <input type="text" name="title" id="title" required/>
                        <textarea name="context" id="content" required></textarea>
                    </div>
                    <div className="secret-wrap">
                        <input type="checkbox" name="secret" id="secret" value="off"/>
                        <label for="secret">비밀글로 등록</label>
                    </div>
                    <div className="button-wrap">
                        <Link to={'/board'} className="list">목록으로</Link>
                        <div className="button-container">
                            <button type="reset" id="cancel">취소</button>
                            <button type="submit" id="submit" >등록</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BoardJoin;
