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
import OfferDetail1 from "./components/sh/OfferDetail1";

// scss
import "./App.css";

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
                    <Route path="" element={<OfferMain />} />
                    <Route path="detail/1" element={<OfferDetail1 />} />
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
