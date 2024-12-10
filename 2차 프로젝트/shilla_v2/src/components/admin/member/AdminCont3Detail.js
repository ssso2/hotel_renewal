import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function AdminCont3Detail(props) {
  const [member, memberSet] = useState([]);
  const [ reservation, reservationSet ] = useState ( [ ] );
  const { member_id } = useParams();

  const reservationData = () => {
    
      axios.get(`http://localhost:5002/bk/admin/member/${member_id}`)
      .then (
          res => {
              console.log("데이터 받기 성공", res.data.reservations)
              reservationSet(res.data.reservations)
              memberSet(res.data.members)
          }
      )
      .catch (
          err => {
              console.log("데이터 받기 에러 발생", err)
          }
      )
  }

  useEffect ( () => {

    reservationData()
  }, [member_id])

  return (
    <>
      <h2>회원 정보</h2>
      {
        reservation.map ( (item, idx) => {
            return <div key={idx}>
                <span> 예약번호 : { item.reservation_id } </span>
                <span> 회원아이디 : { item.member_id } </span>
                <span> product_id : { item.product_id } </span>
                <span> 시작일 : { item.start_date } </span>
                <span> 종료일 : { item.end_date } </span>
                <span> 총금액 : { item.tot_price } </span>
                <span> 성인인원 : { item.adult_cnt } </span>
                <span> 어린이인원 : { item.child_cnt } </span>
                <span> 취소 : { item.Cancel } </span>
            </div>
        })
      }
      <Link to="/admin/member">목록으로</Link>
    </>
  );
}

export default AdminCont3Detail;