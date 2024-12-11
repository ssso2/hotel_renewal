import React from "react";
import EventDetail_othercard from "./EventDetail_othercard";

const EventDetail_other = () => {
    const pkglist = [
        {
            link: "/specialOffer/event/detail/2",
            img: "/img/sub/eventMemory2.jpg",
            title: "An Enchanting Memory",
            date: "2024-11-01 ~ 2025-01-31",
            pay: "930,000원 ~",
        },
        {
            link: "/specialOffer/event/detail/3",
            img: "/img/sub/eventPopera2.jpg",
            title: "Popera Whisky Serenade",
            date: "2024-12-18 ~ 2025-01-22",
            pay: "360,000 원 ~",
        },
        {
            link: "/specialOffer/event/detail/4",
            img: "/img/sub/eventWhisky2.jpg",
            title: "The Exclusive Launch of The Balvenie Limited Edition Whisky",
            date: "2024-12-09 ~ 2025-02-07",
            pay: "740,000원 ~",
        },
    ];
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
