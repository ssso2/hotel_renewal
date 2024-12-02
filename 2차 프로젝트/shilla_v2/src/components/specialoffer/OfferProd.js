import React from "react";
import "../../scss/sub01_01_main.scss";
import { Link } from "react-router-dom";

function OfferProd({ rec }) {
    const imgurl = `http://192.168.0.16:5001/bk/files/${rec.upSystem}`;

    return (
        // <div className={aaa.classname} key={i}>
        <div key={rec.offer_id} className="rec-section">
            {/* <a href={aaa.link}> */}
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
