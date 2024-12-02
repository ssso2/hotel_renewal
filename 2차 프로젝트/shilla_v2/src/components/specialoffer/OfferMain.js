import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import OfferMain1 from "./OfferMain1";
import OfferMain2 from "./OfferMain2";
import OfferMain3 from "./OfferMain3";
import OfferMain4 from "./OfferMain4";

const OfferMain = () => {
    const [Offerlists, setOfferlists] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get(
                "http://192.168.0.16:5002/bk/specialOffer"
            );
            console.log("갔다옴 : ", res.data);
            setOfferlists(res.data);
            console.log(Offerlists);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        //console.log("오퍼메인");
        // 스페셜오퍼 리스트 데이터
        document.title = "신라호텔 - 스페셜오퍼";
        fetchData();
    }, []);

    return (
        <div>
            <div className="container offerdetail">
                <div className="center">
                    <div className="sub-title">
                        <h2>객실패키지</h2>
                        <ul className="location">
                            <li>
                                <Link to="../index.html">홈</Link>
                            </li>
                            <li>
                                <Link to="./sub01_01.html">스페셜오퍼</Link>
                            </li>
                            <li>
                                <Link to="#">객실패키지</Link>
                            </li>
                        </ul>
                    </div>
                    <OfferMain1 offer={Offerlists} />
                    <OfferMain2 />
                    <OfferMain3 offer={Offerlists} />
                    <OfferMain4 offer={Offerlists} />
                </div>
            </div>
        </div>
    );
};

export default OfferMain;
