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
// offer
import SpecialOffer from "./components/sh/SpecialOffer";
import OfferMain from "./components/sh/OfferMain";
import OfferDetail from "./components/sh/OfferDetail";
import Event from "./components/sh/Event";

// scss
import "./App.css";
import EventDetail1 from "./components/sh/EventDetail1";

function App() {
    return (
        <div>
            {/* 메인 */}
            <Routes>
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
            </Routes>

            {/* 고객센터 */}
            <Routes>
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
