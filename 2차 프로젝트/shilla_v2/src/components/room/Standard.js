import Header from '../common/Header';
import Footer from '../common/Footer';
import StandardContainer from './StandardContainer';
// import { Outlet } from 'react-router-dom';

function Standard() {
    return (
        <>
            <Header />
            <StandardContainer />
            <Footer />
            {/* <Outlet /> */}
        </>
    );
}

export default Standard;