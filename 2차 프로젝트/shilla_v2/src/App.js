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

// lifestyle
import UrbanIsland from './components/jaehun/js/UrbanIsland';
import Cabana from './components/jaehun/js/Cabana';

// login
import Login from './components/sub/Login';

// scss
import './App.css'

// room
import Room from './components/lkm/Room';

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

        <Route path="/room" element={<Room />} />

        <Route path='/urbanIsland' element={<UrbanIsland/>}></Route>

        <Route path='/cabana' element={<Cabana/>}></Route>

      </Routes>

    </div>
  );
}

export default App;