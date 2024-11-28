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
// login
import Login from './components/sub/Login';

// scss
import './App.css'

// room
// import Room from './components/lkm/Room';
import StandardDelux from './components/lkm/StandardDelux';
import RoomContainer from './components/lkm/RoomContainer';

function App() {

  return (
    <div>
      <Routes>
        {/* 메인 */}
        <Route path='/' element={<Main></Main>}></Route>
        {/* 로그인 */}
        <Route path='/login' element={<Login></Login>}></Route>

      
      
        {/* 고객센터 */}
        <Route path="/board" element={<BoardTemp/>} >
          <Route path="" element={<BoardList/>} />
          <Route path="detail/:num" element={<BoardDetail/>} />
          <Route path="join" element={<BoardJoin/>} />
          <Route path="modify/:num" element={<BoardModify/>} />
        </Route>
      </Routes>

      <Routes>
          <Route path="/room" element={<RoomContainer />} />
          <Route path="/room/delux" element={<StandardDelux />} />
      </Routes>

    </div>
  );
}

export default App;