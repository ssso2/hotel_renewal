import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/sub06_03_02.scss'
// import CommentView from "./CommentView";
import Secret from "./Secret";
import CommentWrite from "./CommentWrite";

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardDetail = () => {

    const navigate = useNavigate()

    const {num} = useParams();

    const [detailText,setDetailText] = useState()
    const [commentText,setCommentText] = useState([])
    const [user,setUser] = useState(null)

    async function fetchData() {

        if(!num){
            console.log('Num 없음');
            return 
        }
        try {
            const res = await axios.get(`${bkURL}/board/detail/${num}`);
            console.log('res.data : ',res.data);
            setDetailText(res.data);
            console.log('detailText : ',detailText);
            
            
        } catch (error) {
            console.error('에러발생 : ', error);
        }
    }

    async function commentFetchData() {

        if(!num){
            console.log('Num 없음');
            return 
        }
        try {
            const res = await axios.get(`${bkURL}/comment`);
            console.log('res.data : ',res.data);
            setCommentText(res.data);
            console.log('commentText : ',commentText);
            
        } catch (error) {
            console.error('에러발생 : ', error);
        }
    }
    // console.log(detailText.title);
    

    useEffect(()=>{
        document.title ="게시글 상세보기"

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");
        
        if(id){
            setUser({'id':id,"name": name,"grade":grade})
            
        }else{
            setUser(null)
        }



        axios.get(`${bkURL}/comment`)
        .then(res =>{
            setCommentText(res.data);
            console.log('댓글데이터:',res.data);
            
        })
        .catch(err=>{
            console.error('에러발생 : ', err);
        })

        fetchData();
        commentFetchData();

    },[num])


    // function delGo(params) {
        
    // }


    if(!detailText){
        return <div>페이지 없음</div>
    }

    function delGo() {

        console.log('delGo 진입', `${bkURL}/board/delete/${num}`);

        axios.delete(`${bkURL}/board/delete/${num}`)
        .then(res =>{
            console.log('삭제완료',res.data);
            alert('삭제되었습니다.');
            navigate('/board'); //location 써도 되지만 이렇게 써도 된다.
        })
        .catch(err =>{
            console.log('삭제오류',err);
        })
    }

    // 글 번호에 맞는 댓글이 있으면 댓글이 나오고 없으면 댓글쓰기가 나온다
    const CommentView = () => {
        for(let i = 0; i < commentText.length; i++){
            if(detailText.board_id == commentText[i].board_id){
                return  <div>
                            <span className="reply-title">댓글</span>
                            <div className="reply-box">
                                <div className="reply-content">
                                    <span className="name">{commentText[i].author}님의 댓글</span>
                                </div>
                                <div className="textarea">
                                    <div className="new-reply">{commentText[i].context}</div>
                                </div>

                                <div className="reply-info">
                                    <span className="time">{commentText[i].reg_str} 등록</span>
                                    <button className="edit">수정</button>
                                    <button className="delete">삭제</button>
                                </div>
                            </div>
                        </div>
            }

        }
        return (<CommentWrite />)
    }



    const Btn = ()=>{

        if(!user || detailText.name != user.member_id){
            return ;
        }else{
            return  <div className="button-container">
                        <button className="delete" onClick={delGo}><span>삭제</span></button>
                        <Link to={`/board/modify/${detailText.board_id}`} className="edit">수정</Link>
                    </div>
        }
    }



    return (
        <div className="container board">
            <div className="center">
                <h2 className="ask">문의내용 {num}</h2>
                <div className="text-container">
                    <div className="title-wrap">
                        <div className="title">
                            <p className="subject"><Secret detailText={detailText}/>{detailText.title}</p>
                            <div className="writer-wrap">
                                <p className="writer">{detailText.author}</p>
                                <p className="submit-time">{detailText.reg_str}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {detailText.context}
                    </div>

                    <div className="reply-container">

                        {/* 댓글 보이는 구간 */}
                        <CommentView/>
                        

                        {/* 댓글 작성 구간 */}
                        
                    </div>

                </div>
                <div className="button-wrap">
                    <Link to={'/board'} className="list">목록으로</Link>

                    <Btn/>

                </div>
            </div>
        </div>
    )
}

export default BoardDetail;
