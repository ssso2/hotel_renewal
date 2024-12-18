import React from "react";
import { Link } from "react-router-dom";

const OfferDetail1_othercard = ({ data, index }) => {
    return (
        <>
            <li className="other-item" key={index}>
                <Link to="../../html/sub/sub01_01_02.html">
                    <div className="img-box">
                        <img src={data.img} />
                    </div>
                    <dl>
                        <dt>{data.title}</dt>
                        <dd className="other-date">{data.date}</dd>
                        <dd className="other-pay">{data.pay}</dd>
                    </dl>
                </Link>
            </li>
        </>
    );
};

export default OfferDetail1_othercard;
