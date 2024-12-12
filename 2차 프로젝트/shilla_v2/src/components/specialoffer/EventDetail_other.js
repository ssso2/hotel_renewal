import React from "react";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail_other = ({ pkglist }) => {
    return (
        <div class="other-event">
            <div class="other-title">다른 이벤트</div>
            <ul class="other-list">
                {pkglist.map(pkg => (
                    <EventDetail_othercard data={pkg} />
                ))}
            </ul>
        </div>
    );
};

export default EventDetail_other;
