import React from "react";
import { img, section, pmt, event, pkglist } from "./Eventdetaildata";
import EventDetail1_header from "./EventDetail1_header";
import EventDetail_con from "./EventDetail_con";
import EventDetail_des from "./EventDetail_des";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail3 = () => {
    return (
        <div className="container">
            <div className="center">
                <EventDetail1_header title="Popera Whisky Serenade" />
                <EventDetail_con img={img[2]} section={section[2]} />
                <EventDetail_des pmt={pmt[1]} event={event[1]} />
                <EventDetail_othercard pkglist={pkglist.slice(2, 5)} />
            </div>
        </div>
    );
};

export default EventDetail3;
