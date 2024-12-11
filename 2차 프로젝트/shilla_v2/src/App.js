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

// info
import Info from "./components/info/Info";

// location
import Location from "./components/location/Location";

// lifestyle
import LifeStyle from "./components/lifeStyle/LifeStyle";
import OutdoorPool from "./components/lifeStyle/OutdoorPool";
import OutdoorPool2 from "./components/lifeStyle/OutdoorPool2";
import Fitness from "./components/lifeStyle/Fitness";
import Fitness2 from "./components/lifeStyle/Fitness2";
import Fitness3 from "./components/lifeStyle/Fitness3";
import Fitness4 from "./components/lifeStyle/Fitness4";
import WalkingTrails from "./components/lifeStyle/WalkingTrails";
import Jogging from "./components/lifeStyle/Jogging";
import Shopping from "./components/lifeStyle/Shopping";
import Shopping2 from "./components/lifeStyle/Shopping2";

// wedding & party
import Wedding from "./components/party/Wedding";
import Wedding2 from "./components/party/Wedding2";
import Wedding3 from "./components/party/Wedding3";
import CorporateParty2 from "./components/party/CorporateParty2";

// login
import Login from "./components/login/Login";

// join
import JoinComp1 from "./components/join/JoinComp1";
import JoinComp2 from "./components/join/JoinComp2";
import Welcome from "./components/join/Welcome";

// offer
import SpecialOffer from "./components/specialoffer/SpecialOffer";
import OfferMain from "./components/specialoffer/OfferMain";
import OfferDetail from "./components/specialoffer/OfferDetail";
import Event from "./components/specialoffer/Event";
import EventDetail1 from "./components/specialoffer/EventDetail1";
import EventDetail2 from "./components/specialoffer/EventDetail2";

// admin
import AdminTemp from "./components/admin/AdminTemp";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard";
import AdminRoom from "./components/admin/room/AdminRoom";
import AdminRoomDetail from "./components/admin/room/AdminRoomDetail";
import AdminMember from "./components/admin/member/AdminMember";
import AdminCont3 from "./components/admin/member/AdminCont3";
import AdminReservation from "./components/admin/reservation/AdminReservation";
import AdminCs from "./components/admin/cs/AdminCs";
import AdminNotice from "./components/admin/notice/AdminNotice";
import AdminNoticeMain from "./components/admin/notice/AdminCont5_main";
import AdminRegister from "./components/admin/notice/AdminCont5_register";
import AdminModify from "./components/admin/notice/AdminCont5_Modify";
import AdminSales from "./components/admin/sales/AdminSales";

// myPage
import MyPageTemp from "./components/myPage/MyPageTemp";
import MyInfo from "./components/myPage/MyInfo";
import MyInfoChg from "./components/myPage/MyInfoChg";
import MyReservation from "./components/myPage/MyReservation";
import MyInquiry from "./components/myPage/MyInquiry";

// reservation
import PaymentPage from "./components/reservation/PaymentPage";
import Res_search from "./components/reservation/Res_search";
import Res_temp from "./components/reservation/Res_temp";
import ResMainAllRoomDetail from "./components/reservation/ResMainAllRoomDetail";
import ResMainAllRoomPayment from "./components/reservation/ResMainAllRoomPayment";
import Res_detail from "./components/reservation/Res_detail";

// room
import Room from "./components/room/Room";
import Standard from "./components/room/Standard";
import Stand_BusinessDeluxe from "./components/room/Stand_BusinessDeluxe";
import Stand_BarrierFreeDeluxe from "./components/room/Stand_BarrierFreeDeluxe";
import Stand_GrandCornerDeluxe from "./components/room/Stand_GrandCornerDeluxe";

import Exec_Executive from "./components/room/Exec_Executive";
import Exec_ExecBusinessDeluxe from "./components/room/Exec_ExecBusinessDeluxe";
import Exec_GrandDeluxe from "./components/room/Exec_GrandDeluxe";

import Suite from "./components/room/Suite";
import Suite_Superior from "./components/room/Suite_Superior";
import Suite_Korean from "./components/room/Suite_Korean";
import Suite_Corner from "./components/room/Suite_Corner";
import Suite_Premier from "./components/room/Suite_Premier";
import Suite_Royal from "./components/room/Suite_Royal";
import Suite_Shilla from "./components/room/Suite_Shilla";
import Suite_Presidential from "./components/room/Suite_Presidential";

import Lounge_ExecutiveLounge from "./components/room/Lounge_ExecutiveLounge";

//notice
import Noticelist from "./components/notice/Noticelist";
import NoticeTemp from "./components/notice/NoticeTemp";
import Noticedetail from "./components/notice/Noticedetail";


function App() {
    return (
        <div>
            <Routes>
                {/* 메인 */}
                <Route index element={<Main></Main>}></Route>
                {/* 관리자페이지 */}
                <Route path="/admin" element={<AdminTemp></AdminTemp>}>
                    <Route path="" element={<AdminDashboard />} />
                    <Route path="room" element={<AdminRoom />} />
                    <Route path="room/detail/:id" element={<AdminRoomDetail />} />
                    <Route path="member" element={<AdminMember />} />
                    <Route path="member/:id" element={<AdminCont3 />} /> 
                    <Route path="reservation" element={<AdminReservation />} />
                    <Route path="notice" element={<AdminNotice />}>
                        <Route path="" element={<AdminNoticeMain />} />
                        <Route path="register" element={<AdminRegister />} />
                        <Route path="modify/:id" element={<AdminModify />} />
                    </Route>
                    <Route path="cs" element={<AdminCs />} />
                    <Route path="sales" element={<AdminSales />} />
                </Route>
                {/* 마이페이지 */}
                <Route path="/myPage" element={<MyPageTemp></MyPageTemp>}>
                    <Route path="" element={<MyInfo />} />
                    <Route path="myInfoChg" element={<MyInfoChg />} />
                    <Route path="myReservation" element={<MyReservation />} />
                    <Route path="myInquiry" element={<MyInquiry />} />
                </Route>
                {/* 로그인 */}
                <Route path="/login" element={<Login></Login>}></Route>
                {/* 회원가입 */}
                <Route path="/Join" element={<JoinComp1></JoinComp1>}></Route>
                <Route path="/myinfo" element={<JoinComp2></JoinComp2>}></Route>
                <Route path="/Welcome" element={<Welcome></Welcome>}></Route>
                {/* 연락처 */}
                <Route path="/info" element={<Info></Info>}></Route>
                {/* 오시는길 */}
                <Route path="/location" element={<Location></Location>}></Route>
                {/* 문의하기 */}
                <Route path="/board" element={<BoardTemp />}>
                    <Route path="" element={<BoardList />} />
                    <Route path="detail/:num" element={<BoardDetail />} />
                    <Route path="join" element={<BoardJoin />} />
                    <Route path="modify/:num" element={<BoardModify />} />
                </Route>
            </Routes>

            {/* 스페셜오퍼 */}
            <Routes>
                <Route path="/specialOffer" element={<SpecialOffer />}>
                    <Route path="" element={<OfferMain />} />
                    <Route path="detail/:id" element={<OfferDetail />} />
                    <Route path="event" element={<Event />} />
                    <Route path="event/detail/1" element={<EventDetail1 />} />
                    <Route path="event/detail/2" element={<EventDetail2 />} />
                </Route>
            </Routes>

            {/* 공지사항 */}
            <Routes>
                <Route path="/notice" element={<NoticeTemp />}>
                    <Route path="" element={<Noticelist />} />
                    <Route path="detail/:id" element={<Noticedetail />} />
                </Route>
            </Routes>

            {/* 예약페이지 */}
            <Routes>
                <Route path="/reserve" element={<Res_temp />}>
                    <Route path="" element={<Res_search />} />
                    <Route path="detail" element={<Res_detail />} />
                    <Route
                        path="detailallroom"
                        element={<ResMainAllRoomDetail />}
                    />
                    <Route
                        path="detail/paymentallroom"
                        element={<ResMainAllRoomPayment />}
                    />
                    <Route path="detail/payment" element={<PaymentPage />} />
                </Route>
            </Routes>

            <Routes>
                <Route path="/room" element={<Room />} />
                <Route path="/standard" element={<Standard />} />

                <Route
                    path="/businessDeluxe"
                    element={<Stand_BusinessDeluxe />}
                />
                <Route
                    path="/barrierFreeDeluxe"
                    element={<Stand_BarrierFreeDeluxe />}
                />
                <Route
                    path="/grandCornerDeluxe"
                    element={<Stand_GrandCornerDeluxe />}
                />

                <Route path="/executive" element={<Exec_Executive />} />
                <Route
                    path="/execBusinessDeluxe"
                    element={<Exec_ExecBusinessDeluxe />}
                />
                <Route path="/execGrandDeluxe" element={<Exec_GrandDeluxe />} />

                <Route path="/suite" element={<Suite />} />
                <Route path="/superior" element={<Suite_Superior />} />
                <Route path="/korean" element={<Suite_Korean />} />
                <Route path="/corner" element={<Suite_Corner />} />
                <Route path="/premier" element={<Suite_Premier />} />
                <Route path="/royal" element={<Suite_Royal />} />
                <Route path="/shilla" element={<Suite_Shilla />} />
                <Route path="/presidential" element={<Suite_Presidential />} />

                <Route
                    path="/executiveLounge"
                    element={<Lounge_ExecutiveLounge />}
                />
            </Routes>

            {/* 라이프스타일 */}
            <Routes>
                <Route path="/lifeStyle" element={<LifeStyle />}></Route>
                <Route path="/outdoorPool" element={<OutdoorPool />}></Route>
                <Route path="/outdoorPool2" element={<OutdoorPool2 />}></Route>
                <Route path="/fitness" element={<Fitness />}></Route>
                <Route path="/fitness2" element={<Fitness2 />}></Route>
                <Route path="/fitness3" element={<Fitness3 />}></Route>
                <Route path="/fitness4" element={<Fitness4 />}></Route>
                <Route path="/walkingTrails" element={<WalkingTrails />}></Route>
                <Route path="/jogging" element={<Jogging />}></Route>
                <Route path="/shopping" element={<Shopping />}></Route>
                <Route path="/shopping2" element={<Shopping2 />}></Route>
            </Routes>

            {/* 웨딩&연회 */}
            <Routes>
                <Route path="/wedding" element={<Wedding />}></Route>
                <Route path="/wedding2" element={<Wedding2 />}></Route>
                <Route path="/wedding3" element={<Wedding3 />}></Route>
                <Route path="/corporateParty2" element={<CorporateParty2 />}></Route>
            </Routes>
        </div>
    );
}

export default App;
