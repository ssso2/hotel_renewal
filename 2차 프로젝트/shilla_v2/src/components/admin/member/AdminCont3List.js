import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminCont3List() {
    const [member, memberSet] = useState([]);
    const navigate = useNavigate();

    // 회원 데이터 가져오기
    const fetchData = () => {
        axios.get('http://localhost:5002/bk/admin/member')
            .then(res => {
                console.log("회원 데이터 성공", res.data.members);
                memberSet(res.data.members);
            })
            .catch(err => {
                console.error("에러 발생 : ", err);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="cont cont3">
            <h2>회원관리</h2>
            <table>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>체크인</td>
                        <td>설명</td>
                        <td>탈퇴유무</td>
                        <td>탈퇴일짜</td>
                    </tr>
                </thead>
                <tbody>
                    {member.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <button onClick={() => navigate(`/admin/member/${item.member_id}`)}>
                                        {item.member_id}
                                    </button>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.join_date}</td>
                                <td>{item.description}</td>
                                <td>{item.withdrawal}</td>
                                <td>{item.withdrawal_date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminCont3List;
