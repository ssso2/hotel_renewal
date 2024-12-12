import React from "react";
import AdminCsCont_title from "./AdminCsCont_title";

const AdminCsCont = () => {

    
    return (
        <div className="cont cont7">
            <h2>고객센터: 문의하기</h2>
            <div class="board-answer-table">
                <AdminCsCont_title/>
                <ul class="table-contents">
                    <li class="no">1</li>
                    <li class="tit"><a href="#self"><i class="fa-solid fa-star"></i>방으로 배달 가능한가요?</a></li>
                    <li class="author">작성자</li>
                    <li class="date">작성일</li>
                    <li class="answer ">답변 대기</li>
                </ul>
                <ul class="table-contents completed">
                    <li class="no">2</li>
                    <li class="tit"><a href="#self">신라호텔에서 운영하는 셔틀버스가 있나요?</a></li>
                    <li class="author">작성자</li>
                    <li class="date">작성일</li>
                    <li class="answer">답변 완료</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminCsCont;
