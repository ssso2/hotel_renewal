import React from "react";
import { Link } from "react-router-dom";

const EventDetail1_othercard = ({ data }) => {
    return (
        <>
            <li class="other-item">
                <Link to={data.link}>
                    <div class="img-box">
                        <img src={data.img} />
                    </div>
                    <dl>
                        <dt>{data.title}</dt>
                        <dd class="other-date">{data.date}</dd>
                        <dd class="other-pay">{data.pay}</dd>
                    </dl>
                </Link>
            </li>
        </>
    );
};

export default EventDetail1_othercard;
