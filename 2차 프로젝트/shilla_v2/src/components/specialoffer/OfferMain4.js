import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const OfferMain4 = ({ offer }) => {
    // console.log(`파일옵니까: ${(<img src={offerimg} />)}`);

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
        pool: "야외수영장",
        three_people: "성인3인",
        consecutive_night: "2박이상",
        kids: "키즈",
    };

    return (
        <>
            {/* <!-- 패키지 리스트 --> */}
            <div className="event-container">
                <ul className="pkg-all list-item" data-type="all">
                    {offer
                        // .filter(
                        //     list =>
                        //         keywordColumns.some(
                        //             keyword => list[keyword] === "1"
                        //         ) // 키워드 중 하나라도 1인지 확인
                        // )
                        .map(data => {
                            const imgurl = `http://localhost:5002/bk/files/${data.upSystem}`;

                            return (
                                <li
                                    className="list-container product-item"
                                    data-type={data.offer_type}
                                    key={data.offer_id}
                                >
                                    <Link
                                        to={`/specialOffer/detail/${data.offer_id}`}
                                    >
                                        <div className="img-wrapper">
                                            <img src={imgurl} />
                                            {/* <div className="pkg-rewards">
                                                <img
                                                    src={
                                                        "../../img/sub/gift.png"
                                                    }
                                                />
                                                <div className="reward">
                                                    리워즈혜택
                                                </div>
                                            </div> */}
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
                                            {/* <p className="list-keword">
                                                {data.badge}
                                            </p> */}
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
