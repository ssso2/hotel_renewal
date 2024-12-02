import React from "react";

const EventMain1 = ({ data }) => {
    return (
        <li
            className={`list-container ${data.keword ? "eventstyle" : ""}`}
            key={data.id}
        >
            <div className="img-wrapper">
                <img src={data.img} />
            </div>
            <div className="txt-wrapper">
                {data.keword && <p className="list-keword">{data.keword}</p>}
                <h3>{data.title}</h3>
                <p className="offer-des">{data.des}</p>
                <p className="offer-date">{data.date}</p>
            </div>
            <div className="bottom-wrapper">
                <p className="offer-pay">{data.price}</p>
                <a href={data.link} className="event-btn">
                    자세히 보기
                </a>
            </div>
        </li>
    );
};

export default EventMain1;
