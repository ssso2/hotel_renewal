import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminCont3Detail(props) {
  // reservation 변수, reservationSet 업데이트 함수 useState로 [] 빈배열 생성
  const [reservation, reservationSet] = useState ( [ ] )
  
  // 회원 정보 데이터 불러오기 reservationData 변수로 받기
  const reservationData = () => {
      axios.get('http://localhost:5002/bk/admin/member')
      .then (
          res => { // 응답 받으면
              console.log("데이터 받기 성공", res.data.reservations)
              reservationSet(res.data.reservations) // reservationSet 데이터 호출하기
          }
      )
      .catch (
          err => { // 에러 나면
              console.log("데이터 받기 에러 발생", err) // 에러메시지 콘솔 출력
          }
      )
  }

  useEffect ( () => { // reservationData 이벤트 실행
    reservationData() // reservationData를 호출 (한번만 호출)
  }, []) // [] 빈배열로 한번 호출


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