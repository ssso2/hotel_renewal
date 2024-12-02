import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";
import OfferMain2_type from "./OfferMain2_type";
import OfferMain2_date from "./OfferMain2_date";
import OfferMain2_kewords from "./OfferMain2_keword";
import OfferMain2_btn from "./OfferMain2_btn";

const OfferMain2 = () => {
    const [filter, setfilter] = useState(false);
    return (
        <>
            {/* <!-- 필터박스 --> */}
            <form className="pkg-filter-box-wrapper" action="#" method="GET">
                <div className="pkg-filter-box">
                    <OfferMain2_date />
                    <OfferMain2_type />
                    <OfferMain2_kewords />
                    <OfferMain2_btn />
                </div>
            </form>
        </>
    );
};

export default OfferMain2;
