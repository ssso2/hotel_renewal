import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const OfferMain4 = ({ offer }) => {
    // 스페셜오퍼 리스트
    // const [Offerlists, setOfferlists] = useState([]);
    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(
    //             "http://192.168.123.101:5001/bk/specialoffer"
    //         );
    //         console.log("갔다옴 : ", res.data);
    //         setOfferlists(res.data);
    //         console.log(Offerlists);
    //     } catch (err) {
    //         console.error("에러발생 : ", err);
    //     }
    // };
    // useEffect(() => {
    //     document.title = "신라호텔 - 스페셜오퍼";
    //     fetchData();
    // }, []);
    // useEffect(() => {
    //     console.log(Offerlists[0]);
    // }, [Offerlists]);

    // 키워드 매칭
    const keywordColumns = [
        "breakfast",
        "lounge",
        "anniversry",
        "pool",
        "three_people",
        "consecutive_night",
        "kids",
    ];
    const keywordObject = {
        breakfast: "조식",
        lounge: "라운지혜택",
        anniversry: "기념일",
        pool: "수영장",
        three_people: "성인3인",
        consecutive_night: "2박이상",
        kids: "키즈",
    };

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
            <div className="event-container">
                <ul className="pkg-all list-item" data-type="all">
                    {list.map((offer, i) => {
                        return (
                            <li
                                className="list-container product-item"
                                data-type={offer.type}
                                key={i}
                            >
                                <Link to="../../html/sub/sub01_01_01.html">
                                    <div className="img-wrapper">
                                        <img src={offer.img} />
                                        <div className="pkg-rewards">
                                            <img src={offer.rewards} />
                                            <div className="reward">
                                                {offer.event}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="txt-wrapper">
                                        <p className="list-keword">
                                            {offer.keword}
                                        </p>
                                        <h3>{offer.title}</h3>
                                        <p className="offer-des">
                                            {offer.content}
                                        </p>
                                        <p className="offer-date">
                                            {offer.date}
                                        </p>
                                    </div>
                                    <div className="bottom-wrapper">
                                        <p className="offer-pay">
                                            {offer.price}
                                        </p>
                                    </div>
                                    <p className="view-more">자세히보기</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className="pkg-all list-item" data-type="all">
                    {offer
                        .filter(
                            list =>
                                keywordColumns.some(
                                    keyword => list[keyword] === "1"
                                ) // 키워드 중 하나라도 1인지 확인
                        )
                        .map(data => {
                            return (
                                <li
                                    className="list-container product-item"
                                    data-type="couple"
                                    key={data.offer_id}
                                >
                                    <Link to="../../html/sub/sub01_01_01.html">
                                        <div className="img-wrapper">
                                            <img src={data.upOri} />
                                            <div className="pkg-rewards">
                                                <img src="../../img/sub/gift.png" />
                                                <div className="reward">
                                                    리워즈혜택
                                                </div>
                                            </div>
                                        </div>
                                        <div className="txt-wrapper">
                                            {keywordColumns.map(
                                                keyword =>
                                                    data[keyword] === "1" && (
                                                        <p
                                                            className="list-keword"
                                                            key={keyword}
                                                        >
                                                            {
                                                                keywordObject[
                                                                    keyword
                                                                ]
                                                            }
                                                        </p>
                                                    )
                                            )}
                                            <h3>{data.offer_name}</h3>
                                            <p className="offer-des">
                                                {data.offer_description}
                                            </p>
                                            <p className="offer-date">
                                                {data.start_date.split("T")[0]}{" "}
                                                ~ {data.end_date.split("T")[0]}
                                            </p>
                                        </div>
                                        <div className="bottom-wrapper">
                                            <p className="offer-pay">
                                                {data.offer_price.toLocaleString()}{" "}
                                                ~
                                            </p>
                                        </div>
                                        <p className="view-more">자세히보기</p>
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
                {/* {arr.map((item, idx) => (
                    <div key={idx}>
                        <div>{item.offer_id}</div>
                        <div>{item.offer_name}</div>
                    </div>
                ))} */}
            </div>
        </>
    );
};

export default OfferMain4;
