import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminCont3Detail from './AdminCont3Detail';

function AdminCont3List(props) {
    const [member, memberSet] = useState ( [ ] )
    // const [room, roomSet] = useState ( [ ] )
    const navigate = useNavigate()

        document.title = "회원관리"

        const fetchData = () => {
            axios.get('http://localhost:5002/bk/admin/member')
            .then (
                res => {
                    console.log("회원 데이터 성공", res.data.members, res.data.rooms)
                    memberSet(res.data.members)
                    // roomSet(res.data.rooms)
                }
            )
            .catch (
                err => {
                    console.error("에러 발생 : ", err)
                }
            )
        }

        useEffect ( () => {
            fetchData()
        }, [])

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
            {
                member.map( (item, index) => {
                    return <tr key={index}>
                        <td>
                            <button onClick={ () => navigate(`/admin/member/${item.member_id}`)}>
                                {item.member_id}
                            </button>
                        </td>
                        <td> {item.name} </td>
                        <td> {item.join_date} </td>
                        <td> {item.description} </td>
                        <td> {item.withdrawal} </td>
                        <td> {item.withdrawal_date} </td>
                    </tr>
                })
            }
            </tbody>
        </table>
        <div>회원 목록 출력(회원 클릭했을 때 detail 페이지로 이동하여 회원 투숙 내역이 촤라락 나오게)</div>
        <div>탈퇴 회원 관리</div>
        <div>블랙리스트 관리(내용 기재 가능하게)</div>

        <AdminCont3Detail />
    </div>
)}    

export default AdminCont3List;