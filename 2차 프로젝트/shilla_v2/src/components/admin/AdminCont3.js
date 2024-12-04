import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminCont3(props) {
    const [member, memberSet] = useState ( [ ] )

    useEffect ( () => {
        document.title = "회원관리"
        
        axios.get('http://localhost:5002/bk/admin')
        
        .then (
            res => {
                console.log("데이터 이동 성공", res.data)
                memberSet(res.data)
            }
        )
        .catch (
            err => {
                console.error("에러 발생 : ", err)
            }
        )
    }, [])


return (
    <div className="cont cont3">
        <h2>회원관리</h2>
        <table>
            <thead>
                <tr>
                    <td>멤버 아이디</td> 
                    <td>이름</td>
                    <td>체크인</td>
                    <td>설명</td>
                    <td>탈퇴 유무</td>
                    <td>탈퇴 날짜</td>
                </tr>
            </thead>
            <tbody>
            {
                member.map( (item, index) => {
                    return <tr key={index}>
                        <td> {item.member_id} </td>
                        <td> {item.name} </td>
                        <td> {item.join_date} </td>
                        <td> {item.description} </td>
                        <td> {item.withdrawal} </td>
                        <td> {item.withdrawal_date} </td>
                    </tr>
                } )
            }
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <Link to="/admin/join">등록</Link>
                    </td>
                </tr>
            </tfoot>
        </table>
        {/* <div>회원 목록 출력(회원 클릭했을 때 detail 페이지로 이동하여 회원 투숙 내역이 촤라락 나오게)</div> */}
        {/* <div>탈퇴 회원 관리</div> */}
        {/* <div>블랙리스트 관리(내용 기재 가능하게)</div> */}
    </div>
    
)}
    

export default AdminCont3;