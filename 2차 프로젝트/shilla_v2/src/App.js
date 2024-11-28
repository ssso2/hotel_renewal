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

// room
import Room from './components/lkm/Room';

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

      <Routes>
          <Route path="/room" element={<Room />} />
      </Routes>

    </div>
  );
}

export default App;