import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FloatingMenu from "../common/FloatingMenu";
import LocationComp1 from "./LocationComp1";
import LocationComp2 from "./LocationComp2";
import LocationComp3 from "./LocationComp3";
import '../../scss/sub06_06.scss'

const Location = () => {
    return (
       <>
       <Header/>
       <div class="container">
            <div class="center">
                <div class="depth3-tab-wrap">
                    <div class="tab-contents">
                        <div class="tab-cont cont on">
                            <LocationComp1/>
                            <div class="context">
                                <LocationComp2/>
                                <LocationComp3/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
       <FloatingMenu/>
       </>
    );
};

export default Location;
