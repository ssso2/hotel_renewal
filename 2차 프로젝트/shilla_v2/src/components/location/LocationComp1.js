import React from "react";
import { Link } from "react-router-dom";

const LocationComp1 = () => {
    return (
       <>
            <div class="sub-title">
                <h2>오시는 길</h2>
                <ul class="location">
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/location">오시는 길</Link></li>
                </ul>
            </div>
            <div class="map" id="map">
                <img src="/img/sub/map.png" alt=""/>
            </div>
       </>
    );
};

export default LocationComp1;
