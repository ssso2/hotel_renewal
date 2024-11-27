import React from "react";
import { Link } from "react-router-dom";

const OfferMain4 = () => {
    const list = [
        {
            type: "couple",
            link: "../../html/sub/sub01_01_01.html",
            img: "../../img/sub/offerBallet.jpg",
            rewards: "../../img/sub/gift.png",
            event: "리워즈혜택",
            keword: "2박이상",
            title: "Golden Holiday Stay : Ballet And Flamenco",
            content: "캔들라이트 발레 & 플라멩코 콘서트 (2인) + 발레파킹 1회",
            date: "2024-09-14 ~ 2024-09-17",
            price: "540,000 원 ~",
        },
        {
            type: "couple",
            link: "../../html/sub/sub01_01_01.html",
            img: "../../img/sub/offerMoment.jpg",
            rewards: "../../img/sub/gift.png",
            event: "리워즈혜택",
            keword: "기념일",
            title: "Golden Holiday Stay : Ballet And Flamenco",
            content:
                "핑크 로즈 데커레이션 + 웰컴 샴페인 + 웨딩베어 인형 + 인 룸 다이닝 디너 or [프리미어 스위트 투숙 시] 콘티넨탈 디너 코스 2인 + 인 룸 다이닝 브런치",
            date: "2024-04-01 ~ 2024-11-30",
            price: "1,400,000 원 ~",
        },
    ];
    return (
        <>
            {/* <!-- 패키지 리스트 --> */}
            <div class="event-container">
                <ul class="pkg-all list-item" data-type="all">
                    {list.map((offer, i) => {
                        return (
                            <li
                                class="list-container product-item"
                                data-type={offer.type}
                                key={i}
                            >
                                <Link to="../../html/sub/sub01_01_01.html">
                                    <div class="img-wrapper">
                                        <img src={offer.img} />
                                        <div class="pkg-rewards">
                                            <img src={offer.rewards} />
                                            <div class="reward">
                                                {offer.event}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="txt-wrapper">
                                        <p class="list-keword">
                                            {offer.keword}
                                        </p>
                                        <h3>{offer.title}</h3>
                                        <p class="offer-des">{offer.content}</p>
                                        <p class="offer-date">{offer.date}</p>
                                    </div>
                                    <div class="bottom-wrapper">
                                        <p class="offer-pay">{offer.price}</p>
                                    </div>
                                    <p class="view-more">자세히보기</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default OfferMain4;
