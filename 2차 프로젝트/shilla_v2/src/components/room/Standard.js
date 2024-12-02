// import Header from '../common/Header';
import Footer from '../common/Footer';
// import StandardDelux from './StandardDelux';
import StandardContainer from './StandardContainer';
import { Outlet } from 'react-router-dom';

function Standard() {
    return (
        <>
            {/* <Header /> */}
            {/* <StandardDelux /> */}
            <StandardContainer />
            <Footer />
            <Outlet />
        </>
    );
}

export default Standard;