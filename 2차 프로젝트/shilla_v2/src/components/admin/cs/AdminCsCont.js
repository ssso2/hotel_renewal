import { useState, useEffect } from "react";
import axios from 'axios';
import AdminCsCont_title from "./AdminCsCont_title";
import AdminCsCont_Contents from "./AdminCsCont_Contents"; 

const bkURL = process.env.REACT_APP_BACK_URL;

const AdminCsCont = () => {

    const [text, setText] = useState([]);

    useEffect(() => {
        // 데이터 가져오기
        axios.get(`${bkURL}/admin/cs`)
            .then(res => {
                setText(res.data);  
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, []);

    console.log('텍스트', text);

    return (
        <div className="cont cont7">
            <h2>고객센터: 문의하기</h2>
            <div className="board-answer-table">
                <AdminCsCont_title />
                {text.map((item) => (
                    <AdminCsCont_Contents key={item.board_id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AdminCsCont;
