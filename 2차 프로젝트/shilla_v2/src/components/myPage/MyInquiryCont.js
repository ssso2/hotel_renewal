import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInquiryCont = () => {



    return (
        <div class="myinquiry">
            <h2 class="title">내 문의 내역</h2>
            <ul class="board-nav">
                <li class="post-num">번호</li>
                <li class="post-title">제목</li>
                <li class="post-date">작성일</li>
                <li class="post-status">답변 상태</li>
            </ul>
            <ul class="inquiry-list">
                <li class="inquiry-item">
                    <ul class="inquiry-details">
                        <li class="post-num">1</li>
                        <li class="inquiry-title">예약한 객실을 변경하고 싶습니다.</li>
                        <li class="inquiry-date">2024-09-20</li>
                        <li class="inquiry-status">답변 대기</li>
                    </ul>
                    <div class="inquiry-content">예약한 객실을 변경하고 싶습니다. 가능할까요?</div>
                </li>
                <li class="inquiry-item">
                    <ul class="inquiry-details">
                        <li class="post-num">2</li>
                        <li class="inquiry-title">예약한 다이닝을 변경하고 싶어요.</li>
                        <li class="inquiry-date">2024-09-24</li>
                        <li class="inquiry-status">답변 대기</li>
                    </ul>
                    <div class="inquiry-content">12/24 일에 라연으로 예약해두었는데 콘티넨탈로 변경하고 싶어요. 가능여부 알려주세요.</div>
                </li>
            </ul>
        </div>
    );
};

export default MyInquiryCont;
