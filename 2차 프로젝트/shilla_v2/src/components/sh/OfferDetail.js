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
    const [Offerdetails, setOfferdetails] = useState([]);
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const res = await axios.get(
                //     "http://192.168.123.101:5001/bk/specialOffer/detail/:id"
                // );
                `http://192.168.123.101:5001/bk/specialOffer/detail/${id}`
            );
            console.log("갔다옴 : ", res.data);
            setOfferdetails(res.data);
            console.log(Offerdetails);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        document.title = "신라호텔 - 스페셜오퍼";
        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="center">
                <OfferDetail1_header title="URBAN MORNING" />
                <OfferDetail1_pkgcon />
                <OfferDetail1_dday />
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
