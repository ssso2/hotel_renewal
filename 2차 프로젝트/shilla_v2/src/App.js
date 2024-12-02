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
// join
import Join from './components/sub/Join';

// scss
import './App.css'



function App() {

  return (
    <div>
      <Routes>
        {/* 메인 */}
        <Route index element={<Main></Main>}></Route>
        {/* 로그인 */}
        <Route path='/login' element={<Login></Login>}></Route>
        {/* 회원가입 */}
        <Route path='/join' element={<Join></Join>}></Route>
      
      
        {/* 고객센터 */}
        <Route path="/board" element={<BoardTemp/>} >
          <Route path="" element={<BoardList/>} />
          <Route path="detail/:num" element={<BoardDetail/>} />
          <Route path="join" element={<BoardJoin/>} />
          <Route path="modify/:num" element={<BoardModify/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
