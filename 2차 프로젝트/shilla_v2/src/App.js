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

// lifestyle
import UrbanIsland from "./components/jaehun/js/UrbanIsland";

// login
import Login from "./components/sub/Login";

// offer
import SpecialOffer from "./components/sh/SpecialOffer";
import OfferMain from "./components/sh/OfferMain";
import OfferDetail from "./components/sh/OfferDetail";
import Event from "./components/sh/Event";

// scss
import "./App.css";
import EventDetail1 from "./components/sh/EventDetail1"; // reservation
import Res_search from "./components/reservation/Res_search";
import Res_temp from "./components/reservation/Res_temp";
import Res_detail from "./components/reservation/Res_detail";
// room
import Room from "./components/lkm/Room";

function App() {
    return (
        <div>
            <Routes>
                {/* 메인 */}
                <Route path="/" element={<Main></Main>}></Route>
            </Routes>
            {/* 스페셜오퍼 */}
            <Routes>
                <Route path="/specialOffer" element={<SpecialOffer />}>
                    <Route index element={<OfferMain />} />
                    <Route path="detail/:id" element={<OfferDetail />} />
                    <Route path="event" element={<Event />} />
                    <Route path="event/detail/1" element={<EventDetail1 />} />
                </Route>
                {/* 로그인 */}
                <Route path="/login" element={<Login></Login>}></Route>

                {/* 고객센터 */}
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>
            </Routes>

            {/* 예약페이지 */}
            <Routes>
                <Route path="/reserve" element={<Res_temp />}>
                    <Route path="" element={<Res_search />} />
                    <Route path="detail" element={<Res_detail />} />
                    {/* <Route path="join" element={<BoardJoin/>} /> */}
                    {/* <Route path="modify/:num" element={<BoardModify/>} /> */}
                </Route>
            </Routes>

            <Routes>
                <Route path="/room" element={<Room />} />

                <Route path="/urbanIsland" element={<UrbanIsland />}></Route>
            </Routes>
        </div>
    );
}

export default App;
