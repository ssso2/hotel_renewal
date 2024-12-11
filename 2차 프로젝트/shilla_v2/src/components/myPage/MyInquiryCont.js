import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const bkURL = process.env.REACT_APP_BACK_URL;

const MyInquiryCont = () => {
    const navigate = useNavigate();
    const [text, setText] = useState([]);  // 문의 내역 상태
    const [user, setUser] = useState(null); // 사용자 상태

    useEffect(() => {
        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");  // 사용자 ID
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");

        console.log("로그인 정보:", { id, name, grade });  // 디버깅용 로그 추가

        if (id) {
            setUser({ 'id': id, 'name': name, 'grade': grade });

            // API 호출하여 로그인된 사용자의 문의 내역 가져오기
            axios.get(`${bkURL}/mypage/myInquiry`, {
                params: { member_id: id }  // member_id를 쿼리 파라미터로 전달
            })
            .then(res => {
                console.log('내 문의 내역:', res.data);  // 응답 데이터 확인
                setText(res.data);  // 데이터가 있으면 상태에 저장
            })
            .catch(err => {
                console.error('내 문의 내역 오류:', err);
            });
        } else {
            setUser(null);
        }
    }, []);

    return (
        <div className="myinquiry">
            <h2 className="title">내 문의 내역</h2>
            <ul className="board-nav my-page">
                <li className="post-num">번호</li>
                <li className="post-title">제목</li>
                <li className="post-date">작성일</li>
                <li className="post-status">답변 상태</li>
            </ul>
            <ul className="inquiry-list">
                {text.length > 0 ? (
                    text.map((item) => (
                        <li key={item.board_id} className="inquiry-item">
                            <ul className="inquiry-details">
                                <li className="post-num">{item.board_id}</li> {/* board_id를 사용 */}
                                <li className="inquiry-title">{item.title}</li>
                                <li className="inquiry-date">{item.date}</li>
                                <li className="inquiry-status">{item.status}</li>
                            </ul>
                            <div className="inquiry-content">{item.content}</div>
                        </li>
                    ))
                ) : (
                    <li>문의 내역이 없습니다.</li>
                )}
            </ul>
        </div>
    );
};

export default MyInquiryCont;
