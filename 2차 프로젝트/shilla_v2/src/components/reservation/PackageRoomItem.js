import React from "react";
import '../../scss/packageRoomItem.scss'
import { useNavigate } from "react-router-dom";

function PackageRoomItem({ packageData, checkInDate, checkOutDate }) {
  const navigate = useNavigate();

  console.log(packageData, checkInDate, checkOutDate)

  const handleReservation = () => {
    // 예약하기 버튼 클릭 시, Res_detail 페이지로 데이터 전달
    if (checkInDate && checkOutDate) {
      navigate("/reserve/detail", {
        state: {
          checkInDate,
          checkOutDate,
          offerPrice: packageData.offer_price,
          offerName: packageData.offer_name,
          productId: packageData.product_id,
        },
      });
      console.log(checkInDate, checkOutDate, packageData.offer_price, packageData.offer_name, packageData.product_id);
    } else {
      alert("체크인 및 체크아웃 날짜를 선택해주세요");
    }
  };
  
  return (
    <div className="package-item">
      <h4>{packageData.offer_name}</h4>
      <p>{packageData.offer_description}</p>
      <p>가격: {packageData.offer_price}원</p>
      <div className="package-details">
        <button onClick={handleReservation}>예약하기</button>
      </div>
    </div>
  );
}

export default PackageRoomItem;
