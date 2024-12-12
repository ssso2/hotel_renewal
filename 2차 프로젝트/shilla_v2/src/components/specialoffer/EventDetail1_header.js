import React from "react";

const EventDetail1_header = ({ title }) => {
    return (
        <div>
            <div class="sub-title">
                <h2>{title}</h2>
                <ul class="location">
                    <li>
                        <a href="/">홈</a>
                    </li>
                    <li>
                        <a href="/specialOffer">스페셜오퍼</a>
                    </li>
                    <li>
                        <a href="">이벤트</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EventDetail1_header;
