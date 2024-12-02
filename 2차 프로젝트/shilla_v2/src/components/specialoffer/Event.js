import React from "react";
import EventMain from "./EventMain";

const Event = () => {
    return (
        //    <!-- 메인 -->
        <div class="container">
            <div class="center">
                <div class="sub-title">
                    <h2>이벤트</h2>
                    <ul class="location">
                        <li>
                            <a href="../index.html">홈</a>
                        </li>
                        <li>
                            <a href="../../html/sub/sub01_01.html">
                                스페셜오퍼
                            </a>
                        </li>
                        <li>
                            <a href="">이벤트</a>
                        </li>
                    </ul>
                </div>
                <EventMain />
            </div>
        </div>
    );
};

export default Event;
