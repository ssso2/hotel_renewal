import React from "react";
import "../../scss/sub01_01_main.scss";

function OfferProd({ aaa, i }) {
    return (
        <div class={aaa.classname} key={i}>
            <a href={aaa.link}>
                <div class="img-wrap">
                    <img src={aaa.img} alt="" />
                </div>
                <div class="txt-wrap">
                    <h2 class="rec-inner">{aaa.title}</h2>
                    <p class="rec-inner">{aaa.date}</p>
                </div>
            </a>
        </div>
    );
}

export default OfferProd;
