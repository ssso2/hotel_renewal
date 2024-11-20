// setting
import { Route, Routes } from 'react-router-dom';
// common
import Header from './components/common/Header'
import Footer from './components/common/Footer'
// board
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardJoin from "./components/board/BoardJoin";
import BoardModify from "./components/board/BoardModify";
import BoardTemp from "./components/board/Temp";
// scss
import './App.css'



function App() {
  return (
    <div>
      <Header></Header>
      
      {/* 고객센터 */}
      <Routes>
          <Route path="/board" element={<BoardTemp/>} >
            <Route path="" element={<BoardList/>} />
            <Route path="detail/:num" element={<BoardDetail/>} />
            <Route path="join" element={<BoardJoin/>} />
            <Route path="modify/:num" element={<BoardModify/>} />
          </Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
