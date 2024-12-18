import React from "react";
import EventMain from "./EventMain";

const Event = () => {
    return (
        //    <!-- 메인 -->
        <div className="container">
            <div className="center">
                <div className="sub-title">
                    <h2>이벤트</h2>
                    <ul className="location">
                        <li>
                            <Link to="../index.html">홈</Link>
                        </li>
                        <li>
                            <Link to="../../html/sub/sub01_01.html">
                                스페셜오퍼
                            </Link>
                        </li>
                        <li>
                            <Link to="">이벤트</Link>
                        </li>
                    </ul>
                </div>
                <EventMain />
            </div>
        </div>
    );
};

export default Event;
