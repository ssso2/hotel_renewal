import React from "react";
import { Link } from "react-router-dom";

const EventDetail1_othercard = ({ pkglist }) => {
    return (
        <div class="other-event">
            <div class="other-title">다른 이벤트</div>
            <ul class="other-list">
                {pkglist.map((pkg, index) => (
                    <li class="other-item" key={index}>
                        <Link to={pkg.link}>
                            <div class="img-box">
                                <img src={pkg.img} />
                            </div>
                            <dl>
                                <dt>{pkg.title}</dt>
                                <dd class="other-date">{pkg.date}</dd>
                                <dd class="other-pay">{pkg.pay}</dd>
                            </dl>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventDetail1_othercard;
