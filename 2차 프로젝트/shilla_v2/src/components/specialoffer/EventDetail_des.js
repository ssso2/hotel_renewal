import React from "react";
import { Link } from "react-router-dom";

const EventDetail_des = () => {
    const pmt = [
        "[평일 저녁 특별 프로모션]",
        "이벤트 코스 주문 시 식전주 제공, (월~금 저녁)",
    ];
    const event = [
        {
            title: "| 런치",
            item: [
                "- 두부소면과 채소 크림소스",
                "- 계절 진미 모둠",
                "- 아나고 연근모찌 맑은 국",
                "- 계절 생선회",
                "- 바닷가재 미야마야키",
                "- 자연송이 전복튀김",
                "- 꽁치 국화 솥밥",
                "- 계절과일과 그레이프후르츠 젤리",
            ],
        },
        {
            title: "| 디너",
            item: [
                "- 단감 모미지아에",
                "- 계절 진미 모둠",
                "- 깨두부 국화 수프",
                "- 계절 생선회",
                "- 민어 후박잎 구이",
                "- 자연송이 전복 튀김",
                "- 가을 전어 숯불구이",
                "- 옥돔과 자연송이 솥밥",
                "- 단호박 카스테라",
            ],
        },
    ];

    return (
        <>
            <div class="event-pmt">
                {pmt.map((data, index) => (
                    <p key={index}>{data}</p>
                ))}
            </div>
            <div class="event-li">
                <ul class="event-wrap">
                    {event.map((des, i) => (
                        <li class="event-detail" key={i}>
                            <h3>{des.title}</h3>
                            {des.item.map((add, idx) => (
                                <span class="txt-box">
                                    <p>{add}</p>
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
                <div class="a-wrap">
                    <Link to="/specialOffer/event">
                        <div class="aList">목록</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default EventDetail_des;
