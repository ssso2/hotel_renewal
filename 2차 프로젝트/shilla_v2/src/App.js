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

// scss
import './App.css'



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
        <Route path='/urbanIsland' element={<UrbanIsland/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
