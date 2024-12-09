import React from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

function OfferProd({ rec, index }) {
    const imgurl = `http://localhost:5002/bk/files/${rec.upSystem}`;
    const className = index > 2 ? "rec-section none" : "rec-section";
    return (
        <div className={className}>
            <Link to={`/specialOffer/detail/${rec.offer_id}`}>
                <div className="img-wrap">
                    <img src={imgurl} />
                </div>
                <div className="txt-wrap">
                    <h2 className="rec-inner">{rec.offer_name}</h2>
                    <p className="rec-inner">
                        {rec.start_date.split("T")[0]} ~{" "}
                        {rec.end_date.split("T")[0]}
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default OfferProd;
