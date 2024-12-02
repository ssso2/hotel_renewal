import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import OfferMain1 from "./OfferMain1";
import OfferMain2 from "./OfferMain2";
import OfferMain3 from "./OfferMain3";
import OfferMain4 from "./OfferMain4";

const OfferMain = () => {
    // 스페셜오퍼 리스트
    const [Offerlists, setOfferlists] = useState([]);
    const fetchData = async () => {
        try {
            const res = await axios.get(
                "http://192.168.123.101:5001/bk/specialOffer"
            );
            console.log("갔다옴 : ", res.data);
            setOfferlists(res.data);
            console.log(Offerlists);
        } catch (err) {
            console.error("에러발생 : ", err);
        }
    };
    useEffect(() => {
        document.title = "신라호텔 - 스페셜오퍼";
        fetchData();
    }, []);
    return (
        <div>
            <div className="container">
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
                    <OfferMain3 />
                    <OfferMain4 offer={Offerlists} />
                </div>
            </div>
        </div>
    );
};

export default OfferMain;
