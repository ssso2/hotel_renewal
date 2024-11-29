// setting
import { Route, Routes } from 'react-router-dom';

// main
import Main from './components/main/Main';
// board
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardJoin from "./components/board/BoardJoin";
import BoardModify from "./components/board/BoardModify";
import BoardTemp from "./components/board/Temp";
// scss
import './App.css'

// reservation
import Res_search from './components/reservation/Res_search';
import Res_temp from './components/reservation/Res_temp';
import Res_detail from './components/reservation/Res_detail';



function App() {

  return (
    <div>
      {/* 메인 */}
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
      
      {/* 고객센터 */}
      <Routes>
        <Route path="/board" element={<BoardTemp/>} >
          <Route path="" element={<BoardList/>} />
          <Route path="detail/:num" element={<BoardDetail/>} />
          <Route path="join" element={<BoardJoin/>} />
          <Route path="modify/:num" element={<BoardModify/>} />
        </Route>
      </Routes>


      {/* 예약페이지 */}
      <Routes>
        <Route path="/reserve" element={<Res_temp/>} >
          <Route path="" element={<Res_search/>} />
          <Route path="detail" element={<Res_detail/>} />
          {/* <Route path="join" element={<BoardJoin/>} /> */}
          {/* <Route path="modify/:num" element={<BoardModify/>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
