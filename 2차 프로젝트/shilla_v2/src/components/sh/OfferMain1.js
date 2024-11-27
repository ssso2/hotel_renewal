import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
// import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";
import OfferProd from "./OfferProd";

{
    /* <script src="../../js/sub/sub01_01.js" defer></script> */
}

const OfferMain1 = () => {
    const rec = [
        {
            classname: "rec-section",
            link: "../../html/sub/sub01_01_02.html",
            img: "../../img/sub/offerMain2.jpg",
            title: "Your First Shilla",
            date: "2024-11-22 ~ 2024-11-30",
        },
        {
            classname: "rec-section",
            link: "specialOffer/detail/1",
            img: "../../img/sub/offerMain1.jpg",
            title: "Everlasting Moment",
            date: "2024-12-01 ~ 2024-12-22",
        },
        {
            classname: "rec-section del",
            link: "../../html/sub/sub01_01_03.html",
            img: "../../img/sub/offerWine.jpg",
            title: "Sweet Little Chef",
            date: "2024-11-15 ~ 2024-12-31",
        },
        {
            classname: "rec-section none",
            link: "../../html/sub/sub01_01_02.html",
            img: "../../img/sub/offerMain3.jpg",
            title: "Your First Shilla",
            date: "2024-12-03 ~ 2024-12-29",
        },
    ];

    return (
        <>
            {/* <!--추천상품 --> */}
            <div class="rec-wrapper">
                {rec.map((item, index) => {
                    return (
                        <OfferProd aaa={item} i={index} />
                        // <div class={item.classname} key={index}>
                        //     <a href={item.link}>
                        //         <div class="img-wrap">
                        //             <img src={item.img} alt="" />
                        //         </div>
                        //         <div class="txt-wrap">
                        //             <h2 class="rec-inner">{item.title}</h2>
                        //             <p class="rec-inner">{item.date}</p>
                        //         </div>
                        //     </a>
                        // </div>
                    );
                })}
            </div>
        </>
    );
};

export default OfferMain1;
