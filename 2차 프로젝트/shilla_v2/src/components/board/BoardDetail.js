import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/sub06_03_02.scss'

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardDetail = () => {

    const navigate = useNavigate()

    const {num} = useParams();

    const [detailText,setDetailText] = useState(null)

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
    // console.log(detailText.title);
    

    useEffect(()=>{
        document.title ="게시글 상세보기"
        fetchData();
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

    return (
        <div className="container board">
            <div className="center">
                <h2 className="ask">문의내용 {num}</h2>
                <div className="text-container">
                    <div className="title-wrap">
                        <div className="title">
                            <p className="subject"><i className="fa-solid fa-lock"></i>{detailText.title}</p>
                            <div className="writer-wrap">
                                <p className="writer">{detailText.author}</p>
                                <p className="submit-time">{detailText.reg_strDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {detailText.context}
                    </div>

                    <div className="reply-container">
                        {/* <!-- 댓글 창 --> */}
                        <span className="reply-title">댓글</span>
                        <div className="reply-box">
                            {/* <!-- 댓글 창 전체 박스 --> */}
                            <div className="reply-content">
                                {/* <!-- 댓글 상단 작성자 이름 들어갈 박스 --> */}
                                <span className="name">관리자님의 댓글</span>
                            </div>
                            <div className="textarea">
                                <textarea className="new-reply">
고객님, 안녕하세요. 호텔신라입니다.
크리스마스 패키지는 현재 예약이 가능하나, 먼저 예약하신 숙박 건에 대한 취소가 별도로 필요합니다.
시즌 패키지는 한정 기간만 운영되므로 먼저 패키지 예약을 진행하신 후에
기예약된 숙박건에 대해 취소를 진행하시면 성심성의껏 도와드리겠습니다.
항상 호텔신라와 함께 편안한 휴식 보내시길 바랍니다. 감사합니다.
                            </textarea>
                            </div>

                            <div className="reply-info">
                                {/* <!-- 작성시간, 수정, 삭제 들어갈 박스--> */}
                                <span className="time">9/24 16:39 등록</span>
                                <button className="edit">수정</button>
                                <button className="delete">삭제</button>
                            </div>
                        </div>

                        <span className="reply-title">댓글쓰기</span>
                        <div className="reply-box-sec">
                            {/* <!-- 댓글 창 전체 박스 --> */}
                            <div className="reply-content-ing">
                                {/* <!-- 댓글 상단 작성자 이름 들어갈 박스 --> */}
                                <span className="user-name">박세라</span>
                            </div>
                            <textarea id="reply" placeholder="댓글을 작성하세요."></textarea>

                            <div className="reply-info">
                                {/* <!-- 작성시간, 수정, 삭제 들어갈 박스--> */}
                                <button id="plus">댓글등록</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="button-wrap">
                    <Link to={'/board'} className="list">목록으로</Link>
                    <div className="button-container">
                        <button className="delete" onClick={delGo}><span>삭제</span></button>
                        <Link to={`/board/modify/${detailText.num}`} className="edit">수정</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardDetail;
