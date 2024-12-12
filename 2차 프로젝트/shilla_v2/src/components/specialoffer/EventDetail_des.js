import React from "react";
import { Link } from "react-router-dom";

const EventDetail_des = ({ pmt, event }) => {
    console.log(event);
    return (
        <>
            {pmt ? (
                <div className="event-pmt">
                    <p>{pmt[0]}</p>
                    <p>{pmt[1]}</p>
                </div>
            ) : null}
            {event ? (
                <div className="event-li">
                    <ul className="event-wrap">
                        {event.map((des, i) => (
                            <li className="event-detail">
                                <h3>{des.title}</h3>
                                {/* {des.img ? (<span className="img-txt">
                                    <img src={des.img} alt="" />
                                    {des.item.map((add, idx) => (
                                        <span className="txt-box" key={idx}>
                                            <p>{add}</p>
                                        </span>
                                    ))}
                                </span>) : {des.item.map((add, idx) => (
                                        <span className="txt-box" key={idx}>
                                            <p>{add}</p>
                                        </span>
                                    ))}} */}
                                <span className="img-txt">
                                    <img src={des.img} alt="" />
                                    {des.item.map((add, idx) => (
                                        <span className="txt-box" key={idx}>
                                            <p>{add}</p>
                                        </span>
                                    ))}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="a-wrap">
                        <Link to="/specialOffer/event">
                            <div className="aList">목록</div>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="event-li">
                    <div className="a-wrap">
                        <Link to="/specialOffer/event">
                            <div className="aList">목록</div>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default EventDetail_des;
