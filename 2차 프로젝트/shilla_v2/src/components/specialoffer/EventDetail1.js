import React from "react";
import { img, section, pmt, event, pkglist } from "./Eventdetaildata";
import OfferDetail1_header from "./OfferDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_other from "./EventDetail_other";

const EventDetail1 = () => {
    return (
        <div className="container">
            <div className="center">
                <OfferDetail1_header title="Taste of Vietnam" />
                <EventDetail_con img={img[0]} section={section[0]} />
                <EventDetail_des pmt={pmt[0]} event={event[0]} />
                <EventDetail_other pkglist={pkglist[0]} />
            </div>
        </div>
    );
};

export default EventDetail1;
