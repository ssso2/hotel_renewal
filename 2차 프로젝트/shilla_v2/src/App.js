// setting
import { Route, Routes } from "react-router-dom";

// main
import Main from "./components/main/Main";

// board
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardJoin from "./components/board/BoardJoin";
import BoardModify from "./components/board/BoardModify";
import BoardTemp from "./components/board/Temp";

// info
import Info from "./components/sub/Info";

// /location
import Location from "./components/sub/Location";

// lifestyle
import LifeStyle from "./components/lifeStyle/LifeStyle";
import OutdoorPool from "./components/lifeStyle/OutdoorPool";
import OutdoorPool2 from "./components/lifeStyle/OutdoorPool2";
import Fitness from "./components/lifeStyle/Fitness";
import Fitness2 from "./components/lifeStyle/Fitness2";
import Fitness3 from "./components/lifeStyle/Fitness3";
import Fitness4 from "./components/lifeStyle/Fitness4";
import WalkingTrails from "./components/lifeStyle/walkingTrails";
import AdminCont2 from "./components/admin/AdminCont2";
import RoomManDetail from "./components/admin/RoomManDetail";

// login
import Login from "./components/sub/Login";

// offer
import SpecialOffer from "./components/specialoffer/SpecialOffer";
import OfferMain from "./components/specialoffer/OfferMain";
import OfferDetail from "./components/specialoffer/OfferDetail";
import Event from "./components/specialoffer/Event";
import EventDetail1 from "./components/specialoffer/EventDetail1";

// admin
import Admin from "./components/admin/Admin";

// reservation
import PaymentPage from "./components/reservation/PaymentPage";
import Res_search from "./components/reservation/Res_search";
import Res_temp from "./components/reservation/Res_temp";
import Res_detail from "./components/reservation/Res_detail";

// room
import Room from "./components/room/Room";
import Standard from "./components/room/Standard";
import Stand_BusinessDeluxe from "./components/room/Stand_BusinessDeluxe";
import Stand_BarrierFreeDeluxe from "./components/room/Stand_BarrierFreeDeluxe";
import Stand_GrandCornerDeluxe from "./components/room/Stand_GrandCornerDeluxe";

import Exec_Executive from "./components/room/Exec_Executive";
import Exec_ExecBusinessDeluxe from "./components/room/Exec_ExecBusinessDeluxe";
import Exec_GrandDeluxe from "./components/room/Exec_GrandDeluxe";

import Suite from "./components/room/Suite";
import Suite_Superior from "./components/room/Suite_Superior";
import Suite_Korean from "./components/room/Suite_Korean";
import Suite_Corner from "./components/room/Suite_Corner";
import Suite_Premier from "./components/room/Suite_Premier";
import Suite_Royal from "./components/room/Suite_Royal";
import Suite_Shilla from "./components/room/Suite_Shilla";
import Suite_Presidential from "./components/room/Suite_Presidential";

import Lounge_ExecutiveLounge from "./components/room/Lounge_ExecutiveLounge";

function App() {
    return (
        <div>
            <Routes>
                {/* 메인 */}
                <Route index element={<Main></Main>}></Route>
                {/* 관리자페이지 */}
                <Route path="/admin" element={<Admin></Admin>}></Route>
                {/* 로그인 */}
                <Route path="/login" element={<Login></Login>}></Route>
                {/* 연락처 */}
                <Route path="/info" element={<Info></Info>}></Route>
                {/* 오시는길 */}
                <Route path="/location" element={<Location></Location>}></Route>
                {/* 문의하기 */}
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>
            </Routes>

            {/* 스페셜오퍼 */}
            <Routes>
                <Route path="/specialOffer" element={<SpecialOffer />}>
                    <Route path="" element={<OfferMain />} />
                    <Route path="detail/:id" element={<OfferDetail />} />
                    <Route path="event" element={<Event />} />
                    <Route path="event/detail/1" element={<EventDetail1 />} />
                </Route>
            </Routes>

            {/* 예약페이지 */}
            <Routes>
                <Route path="/reserve" element={<Res_temp />}>
                    <Route path="" element={<Res_search />} />
                    <Route path="detail" element={<Res_detail />} />
                    <Route path="detail/payment" element={<PaymentPage />} />
                    {/* <Route path="join" element={<BoardJoin/>} /> */}
                    {/* <Route path="modify/:num" element={<BoardModify/>} /> */}
                </Route>
            </Routes>

            <Routes>
                <Route path="/room" element={<Room />} />
                <Route path="/standard" element={<Standard />} />

                <Route
                    path="/businessDeluxe"
                    element={<Stand_BusinessDeluxe />}
                />
                <Route
                    path="/barrierFreeDeluxe"
                    element={<Stand_BarrierFreeDeluxe />}
                />
                <Route
                    path="/grandCornerDeluxe"
                    element={<Stand_GrandCornerDeluxe />}
                />

                <Route path="/executive" element={<Exec_Executive />} />
                <Route
                    path="/execBusinessDeluxe"
                    element={<Exec_ExecBusinessDeluxe />}
                />
                <Route path="/execGrandDeluxe" element={<Exec_GrandDeluxe />} />

                <Route path="/suite" element={<Suite />} />
                <Route path="/superior" element={<Suite_Superior />} />
                <Route path="/korean" element={<Suite_Korean />} />
                <Route path="/corner" element={<Suite_Corner />} />
                <Route path="/premier" element={<Suite_Premier />} />
                <Route path="/royal" element={<Suite_Royal />} />
                <Route path="/shilla" element={<Suite_Shilla />} />
                <Route path="/presidential" element={<Suite_Presidential />} />

                <Route
                    path="/executiveLounge"
                    element={<Lounge_ExecutiveLounge />}
                />
            </Routes>

            {/* 라이프스타일 */}
            <Routes>
                <Route path="/lifeStyle" element={<LifeStyle />}></Route>
                <Route path="/outdoorPool" element={<OutdoorPool />}></Route>
                <Route path="/outdoorPool2" element={<OutdoorPool2 />}></Route>
                <Route path="/fitness" element={<Fitness />}></Route>
                <Route path="/fitness2" element={<Fitness2 />}></Route>
                <Route path="/fitness3" element={<Fitness3 />}></Route>
                <Route path="/fitness4" element={<Fitness4 />}></Route>
                <Route path="/walkingTrails" element={<WalkingTrails />}></Route>

                <Route path="/admin/roomManagement" element={<AdminCont2 />} />
                <Route path="/admin/roomManagement/detail/:id" element={<RoomManDetail />} />
            </Routes>
        </div>
    );
}

export default App;
