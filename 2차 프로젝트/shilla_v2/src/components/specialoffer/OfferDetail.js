import React from "react";
import OfferDetail1_header from "./OfferDetail1_header";
import OfferDetail1_pkgcon from "./OfferDetail1_pkgcon";
import OfferDetail1_dday from "./OfferDetail1_dday";
import OfferDetail1_pkgdes from "./OfferDetail1_pkgdes";
import OfferDetail1_pkgdes2 from "./OfferDetail1_pkgdes2";
import OfferDetail1_pop from "./OfferDetail1_pop";
import OfferDetail1_fitness from "./OfferDetail1_fitness";
import OfferDetail1_info from "./OfferDetail1_info";
import OfferDetail1_other from "./OfferDetail1_other";
import OfferDetail1_pkgdesA from "./OfferDetail1_pkgdesA";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OfferDetail = () => {
    // 스페셜오퍼 리스트
    const [Offerdetails, setOfferdetails] = useState({});
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const res = await axios.get(
                //     "http://192.168.123.101:5001/bk/specialOffer/detail/:id"
                // );
                `http://192.168.0.16:5002/bk/specialOffer/detail/${id}`
            );
            console.log("갔다옴 : ", res.data);
            setOfferdetails(res.data);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        document.title = "신라호텔 - 스페셜오퍼";
        fetchData();
    }, []);

    useEffect(() => {
        console.log("디테일", Offerdetails.end_date);
    }, [Offerdetails]);

    return (
        <div className="container offerdetail">
            <div className="center">
                <OfferDetail1_header title={Offerdetails.offer_name} />
                <OfferDetail1_pkgcon img={Offerdetails.upSystem} />
                <OfferDetail1_dday
                    endDate={Offerdetails.end_date}
                    pID={Offerdetails.product_id}
                />
                <OfferDetail1_pkgdes />
                <OfferDetail1_pkgdesA />
                {/* <OfferDetail1_pop /> */}
                <OfferDetail1_fitness />
                <OfferDetail1_info />
                <OfferDetail1_other />
            </div>
        </div>
    );
};

export default OfferDetail;
