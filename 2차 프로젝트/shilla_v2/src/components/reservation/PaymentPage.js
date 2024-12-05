import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../scss/paymentPage.module.scss";

function PaymentPage() {
  const navigate = useNavigate();

  // State for input fields
  const [reservationDate, setReservationDate] = useState("");
  const [roomName, setRoomName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePayment = () => {
    if (!accountNumber || !name || !phoneNumber) {
      alert("모든 내용을 작성해주세요.");
      return;
    }
    alert("결제가 완료되었습니다!");
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className={styles.paymentContainer}>
      <h2>결제 페이지</h2>
      <form className={styles.paymentForm}>
        <div> 예약날짜 : 2024-12-01 ~ 2024-12-02
        </div>
        <div > 룸이름 : 스탠다드
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="accountNumber">계좌번호:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="계좌번호 입력"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름 입력"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">전화번호:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="전화번호 입력"
          />
        </div>
        <ul>
          <li>성인 조식: 2</li>
          <li>어린이 조식: 1</li>
          <li>엑스트라 베드: 1</li>
        </ul>
        <p>총 결제 금액: 124124124원</p>
      </form>
      <div className={styles.buttonContainer}>
        <button onClick={handlePayment}>결제 완료</button>
        <button className={styles.cancelBtn} onClick={() => navigate(-1)}>
          취소
        </button>
      </div>
    </div>
  );
}

// <div className="container">
//   <h2>결제 페이지</h2>
//   <p>총 결제 금액: {paySum?.toLocaleString()}원</p>
//   <p>선택한 옵션:</p>
//   <ul>
//     <li>성인 조식: {options?.adultBf}</li>
//     <li>어린이 조식: {options?.childBf}</li>
//     <li>엑스트라 베드: {options?.extraBed}</li>
//   </ul>
//   <button onClick={() => alert("결제가 완료되었습니다!")}>결제 완료</button>
//   <button onClick={() => navigate(-1)}>취소</button>
// </div>
export default PaymentPage;
