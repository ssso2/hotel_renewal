import Header from '../common/Header';
import Footer from '../common/Footer';
import RoomContainer from './RoomContainer';
import { Outlet } from 'react-router-dom';

function Room() {
    return (
        <>
            {/* <Header /> */}
            <RoomContainer />
            <Footer />
            <Outlet />
        </>
    );
}

export default Room;