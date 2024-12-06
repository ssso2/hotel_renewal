import React from "react";
import '../../scss/packageRoomItem.scss'

function PackageRoomItem({ packageData }) {
  return (
    <div className="package-item">
      <h4>{packageData.offer_name}</h4>
      <p>{packageData.offer_description}</p>
      <p>가격: {packageData.offer_price}원</p>
      <div className="package-details">
        {/* <p>조식: {packageData.breakfast} </p>
                    {/* <p>조식: {packageData.breakfast}, {packageData.lounge}</p>

        <p>기타: {packageData.anniversry}, {packageData.pool}</p> */}
      </div>
    </div>
  );
}

export default PackageRoomItem;
