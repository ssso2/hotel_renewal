import React from 'react';
import Header from '../common/Header';
import Tab3 from './Tab3';
import SubTitle from './SubTitle';
// import Gallery2 from './Gallery2';
// import Introduction from './Introduction';
// import Location from './Location';
// import Desc from './Desc';
import Footer from '../common/Footer';

import "../../scss/common.scss"
import "../../scss/header.scss"
import "../../scss/footer.scss"
import "../../scss/sub-list.scss"
import "../../scss/sub-detail.scss"

const FamilyParty = () => {
    return (
        <>
        <Header/>
        <Tab3/>
        <SubTitle/>
        <Footer/>
        </>
    )
}

export default FamilyParty;
