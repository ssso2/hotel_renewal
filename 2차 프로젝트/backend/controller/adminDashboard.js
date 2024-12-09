const express = require("express");
const conn = require("../db");
const router = express.Router();
const cors = require("cors");

router.use(cors());



// Chart 첫번째 차트 DB 연결
router.get("/person", async (req, res) => {
    console.log("연결 접근")
    
    try {
        const [reservationValue] = await conn.execute(`SELECT DATE_FORMAT(end_date,'%y-%m') as dateCalc, sum(adult_cnt + child_cnt - cancel) as personCnt from reservation
            group by DATE_FORMAT(end_date,'%y-%m')`)
            console.log("연결 성공", reservationValue)
            res.json(reservationValue)
        } catch (err) {
            console.log("연결 실패", err)
            res.status(500).send("서버 오류")
        }
    })
    
// Chart 두번째 차트 DB 연결
router.get("/price", async (req, res) => {
    console.log("연결 접근")

    try {
        const [priceValue] = await conn.execute(`select date_format(end_date, '%y-%m') as dateCalc, sum(tot_price) as totalPrice from reservation
            group by date_format(end_date, '%y-%m')`)
        console.log("연결 성공", priceValue)
        res.json(priceValue)
    } catch (err) {
        console.log("연결 실패", err)
        res.status(500).send("서버 오류")
    }
})

// Chart 세번째 차트 DB 연결
router.get("/sell", async (req, res) => {
    console.log("연결 접근")

    try {
        const [sellValue] = await conn.execute(`SELECT 
    room.room_type,  -- 방 종류
    COUNT(DISTINCT room.room_reserve_id) AS room_count,  -- 각 room_type별 예약된 방의 수
    SUM(reservation.tot_price) AS total_price  -- 각 room_type별 총 가격 합계
FROM 
    reservation
LEFT JOIN 
    room ON reservation.reservation_id = room.room_reserve_id
WHERE 
    room.room_type IN (SELECT DISTINCT room_type FROM room)  -- room_type 중복 제거
GROUP BY 
    room.room_type
ORDER BY 
    room.room_type;`)
        console.log("연결 성공", sellValue)
        res.json(sellValue)


    } catch (err) {
        console.log("연결 실패", err)
        res.status(500).send("서버 오류")
    }
})

// Chart 네번째 차트 DB 연결
router.get("/cancel", async (req, res) => {
    console.log("연결 접근")

    try {
        const [cancelValue] = await conn.execute(`SELECT 
    room.room_type,  -- 방 종류
    COUNT(DISTINCT room.room_reserve_id) AS room_count,  -- 각 room_type별 예약된 방의 수
    SUM(reservation.tot_price) AS total_price  -- 각 room_type별 총 가격 합계
FROM 
    reservation
LEFT JOIN 
    room ON reservation.reservation_id = room.room_reserve_id
WHERE 
    room.room_type IN (SELECT DISTINCT room_type FROM room)  -- room_type 중복 제거
GROUP BY 
    room.room_type
ORDER BY 
    room.room_type;`)
        console.log("연결 성공", cancelValue)
        res.json(cancelValue)


    } catch (err) {
        console.log("연결 실패", err)
        res.status(500).send("서버 오류")
    }
})
    module.exports = router
    
    // visit