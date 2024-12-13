import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from "../../sub/Pagination";
import axios from 'axios';
import "../../../scss/AdminCont3.scss";


function AdminCont3() {
    const [member, memberSet] = useState([])
    const [modify, modifySet] = useState([])
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    // 회원 데이터 가져오기
    const fetchData = () => {
        axios.get('http://localhost:5002/bk/admin/member')
            .then(res => {
                console.log("회원 데이터 성공", res.data)
                memberSet(res.data.members)
            })
            .catch(err => {
                console.error("에러 발생 : ", err)
            })
    }

    // 회원 데이터 업데이트
    useEffect(() => {
        Object.keys(modify).map(memberId => {
            const updatedItem = member.find(item => item.member_id === memberId)
            if (updatedItem) {
                gradeUpdate(updatedItem)
            }
        });

        fetchData()
    }, [modify])

    // 현재 페이지 데이터 계산
    const startIndex = (currentPage - 1) * itemsPerPage
    const members = member.slice(startIndex, startIndex + itemsPerPage)

    
    // 회원등급 select 변경
    const gradeChange = (value, member_id) => {
        modifySet((prev) => ({
            ...prev,
            [member_id]: {
                grade: value,
            },
        }));
    };

    // 회원등급 select 변경하기 버튼 누르면 작동하는 동작
    const gradeUpdate = (item) => { 
        if (modify[item.member_id]?.grade === item.grade) return
        axios.put("http://localhost:5002/bk/admin/member", {
            grade: item.grade,
            member_id: item.member_id,
            ...modify[item.member_id],
        })
        
        .then( () => {
            alert("수정되었습니다")
            fetchData()
            console.log("테스테스트2", item.grade, item.member_id)
        })
        
        .catch(err => {
            console.error("회원 데이터 받기 오류", err)
        });
    };

    // 등급 바꿀 때 불러오는 핸들링 변경
    const handleGradeChange = (e, item) => {
        const newGrade = e.target.value
        gradeChange(newGrade, item.member_id)
    };
    

    return (
        <div className="cont cont3">
            <h2>회원관리</h2>
            <table>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>생일</td>
                        <td>전화번호</td>
                        <td>이메일</td>
                        <td>회원가입일</td>
                        <td>회원등급</td>
                        <td>비고</td>
                    </tr>
                </thead>
                <tbody>
                    {members.map((item) => (
                        <tr key={item.member_id}>
                            <td onClick={ () => navigate(`/admin/member/${item.member_id}`)}> {item.member_id} </td>
                            <td> {item.name} </td>
                            <td> {item.birth} </td>
                            <td> {item.phone} </td>
                            <td> {item.email} </td>
                            <td> {`${new Date(item.join_date).getFullYear().toString().slice(2)}-${(new Date(item.join_date).getMonth() + 1).toString().padStart(2, '0')}-${new Date(item.join_date).getDate().toString().padStart(2, '0')}`} </td>
                            <td>
                            <select value={item.grade}
                                onChange={(e) => {
                                        handleGradeChange(e, item)
                                    }}
                                >
                                    {/* <option value="1">{item.grade === "1" ? "관리자" : "관리자"}</option> */}
                                    <option value="2">{item.grade === "2" ? "우수" : "우수"}</option>
                                    <option value="3">{item.grade === "3" ? "일반" : "일반"}</option>
                                    <option value="4">{item.grade === "4" ? "BL" : "BL"}</option>
                                    <option value="5">{item.grade === "5" ? "탈퇴" : "탈퇴"}</option>
                                </select>
                            </td>
                            <td>
                            {
                                item.grade === "5" 
                                ? (
                                `${item.withdrawal_date 
                                    ? `${new Date(item.withdrawal_date).getFullYear().toString().slice(2)}
                                    -${(new Date(item.withdrawal_date).getMonth() + 1).toString().padStart(2, '0')}
                                    -${new Date(item.withdrawal_date).getDate().toString().padStart(2, '0')},`
                                    : ""} ${item.description}`
                                ) 
                                : item.description
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 페이지네이션 */}
            <Pagination
                totalItems={member.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default AdminCont3;
