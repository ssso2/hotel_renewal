import React from "react";
import { Link } from "react-router-dom";

const OfferDetail1_othercard = ({ data }) => {
    return (
        <>
            <li class="other-item">
                <Link to="../../html/sub/sub01_01_02.html">
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

export default OfferDetail1_othercard;
