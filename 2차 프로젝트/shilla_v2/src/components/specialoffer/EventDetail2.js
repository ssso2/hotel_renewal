import React from "react";
import OfferDetail1_header from "./OfferDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_other from "./EventDetail_other";

const EventDetail2 = () => {
    return (
        <div className="container">
            <div className="center">
                <OfferDetail1_header title="An Enchanting Memory" />
                <EventDetail_con />
                <EventDetail_des />
                <EventDetail_other />
            </div>
        </div>
    );
};

export default EventDetail2;
