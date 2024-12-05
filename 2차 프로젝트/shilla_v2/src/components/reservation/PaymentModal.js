import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../scss/paymentModal.scss"

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { paySum, options } = location.state || {};

  return (
    <div className="container">
      <h2>결제 페이지</h2>
      <p>총 결제 금액: {paySum?.toLocaleString()}원</p>
      <p>선택한 옵션:</p>
      <ul>
        <li>성인 조식: {options?.adultBf}</li>
        <li>어린이 조식: {options?.childBf}</li>
        <li>엑스트라 베드: {options?.extraBed}</li>
      </ul>
      <button onClick={() => alert("결제가 완료되었습니다!")}>결제 완료</button>
      <button onClick={() => navigate(-1)}>취소</button>
    </div>
  );
}

export default PaymentPage;
