import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OfferDetail1_dday = ({ endDate, pID }) => {
    // 마감일 설정
    const [deadline, setdeadline] = useState(null);
    console.log("마감일", endDate);
    // 날짜출력
    // const formatter = new Intl.DateTimeFormat("ko-KR", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //     hour12: false,
    //     timeZone: "Asia/Seoul",
    // });
    // const fetchdate = formatter.format(new Date(endDate));
    // const utcDate = new Date(endDate);
    // const utcstamp = new Date(endDate).getTime();
    // const kDate = utcDate.getTime() + 9 * 60 * 60 * 1000;
    // new Date(
    //     new Date(endDate).toLocaleString("en-US", { timeZone: "Asia/Seoul" })
    // );
    // console.log("utc데이터", utcDate);
    // console.log("utc스탬프", utcstamp);
    // console.log("k데이터", kDate);
    useEffect(() => {
        const deadT = new Date(endDate).getTime(); // 9시간을 밀리초로 변환;

        console.log("데드라인", deadT);

        setdeadline(deadT);
    }, [endDate]); // 로드전 NaN방지

    // 현재 및 남은 시간 상태관리
    // const [deadline] = useState(new Date("2024-12-04").getTime());
    // const [now, setnow] = useState(Date.now());
    const [remain, setremain] = useState(null);

    // 타이머 업데이트 함수
    const updateTimer = () => {
        const current = Date.now();
        console.log("현재", current);
        // console.log("current", current);
        const timeRemaining = deadline - current;

        if (timeRemaining < 0) {
            setremain(null); // 남은 시간 초기화
            return; // 시간이 만료되면 타이머 업데이트 중단
        }
        // 남은 시간을 일, 시간, 분, 초로 변환
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setremain({ days, hours, minutes, seconds });
    };
    useEffect(() => {
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
        return clearInterval(timerInterval);
    }, [deadline]);

    //로그인여부확인
    const navigate = useNavigate();
    const handlereserve = () => {
        const member_id = sessionStorage.getItem("id");
        if (member_id) {
            navigate(`/reserve/${pID}`);
        } else {
            alert("회원만 예약 가능합니다.");
            navigate("/login");
        }
    };

    return (
        <div className="d-day-wrap">
            <div className="d-day">
                {remain ? (
                    <span>
                        마감까지 {remain.days}일 {remain.hours}시간{" "}
                        {remain.minutes}분 {remain.seconds}초 남음
                        <button
                            onClick={handlereserve}
                            className="d-day-reservation"
                        >
                            지금 바로 예약하기
                        </button>
                        {/* <Link to={`/reserve/${pID}`}>
                            <div className="d-day-reservation">
                                지금 바로 예약하기
                            </div>
                        </Link> */}
                    </span>
                ) : (
                    <div className="Tclear">예약이 마감되었습니다.</div>
                )}
            </div>
        </div>
    );
};

export default OfferDetail1_dday;
