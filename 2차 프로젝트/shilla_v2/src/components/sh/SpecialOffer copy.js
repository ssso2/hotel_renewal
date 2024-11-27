import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import OfferMain1 from "./OfferMain1";
import OfferMain2 from "./OfferMain2";
import OfferMain3 from "./OfferMain3";
import OfferMain4 from "./OfferMain4";
import Header from "../common/Header";
import Footer from "../common/Footer";

const SpecialOffer = () => {
    return (
        <>
            <Header />
            {/* <div className="container">
                <div className="center"> */}
            <Outlet />
            {/* <div className="sub-title">
                        <h2>객실패키지</h2>
                        <ul className="location">
                            <li>
                                <Link to="../index.html">홈</Link>
                            </li>
                            <li>
                                <Link to="./sub01_01.html">스페셜오퍼</Link>
                            </li>
                            <li>
                                <Link to="#">객실패키지</Link>
                            </li>
                        </ul>
                    </div>
                    <OfferMain1 />
                    <OfferMain2 />
                    <OfferMain3 />
                    <OfferMain4 />
                </div>
            </div> */}
            <Footer />
        </>
    );
};

export default SpecialOffer;
