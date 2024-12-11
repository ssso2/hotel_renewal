import React from "react";
import { img } from "./Eventdetaildata";

const EventDetail_con = ({ img, section }) => {
    // const section = [
    //     {
    //         title: "Taste of Vietnam",
    //         context:
    //             "베트남 현지 셰프가 선보이는 본토의 맛과 향을 살린 다채로운 요리로 더 파크뷰에서 경험하는 베트남 미식 여행을 즐겨보시기 바랍니다.",
    //         item: [
    //             "기간 : 2024년 9월 24일~ 9월 26일",
    //             "금액 : 런치 코스 180,000원, 디너 코스 270,000원 (세금 및 봉사료 포함)",
    //             "장소 : 더 파크뷰 (1F)",
    //             "문의 : 02.2230.3374",
    //             "※ 본 상품은 Shilla S 멤버십 또는 카드사 등의 할인 혜택이 적용되지 않습니다.",
    //             "※ 본 상품은 방문 7일전까지 유선으로 예약 가능합니다.",
    //         ],
    //     },
    // ];
    return (
        <>
            {/* <!-- 이벤트 상세내용--> */}
            <div className="event-header">
                <img src={img} alt="" />
            </div>
            <div className="event-section">
                {section.map((data, index) => (
                    <div key={index}>
                        <h2>{data.title}</h2>
                        <p>{data.context}</p>
                        <ul className="main-des">
                            {data.item.map((des, i) => (
                                <li key={i}>{des}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
};

export default EventDetail_con;
