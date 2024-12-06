const express = require('express');
const router = express.Router();
const db = require('../db');

// 예약 가능한 객실 및 패키지 조회
router.post('/', async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    // 예약이 겹치지 않는 객실 조회
    const [availableRooms] = await db.execute(`
      SELECT r.room_id, r.room_type, r.day_price, r.max_occupancy
      FROM room r
      WHERE r.room_id NOT IN (
        SELECT p.room_id
        FROM reservation res
        JOIN product p ON res.product_id = p.product_id
        WHERE (res.start_date <= ? AND res.end_date >= ?)
      );
    `, [endDate, startDate]);

    // 예약이 겹치지 않는 패키지 조회
    // const [availablePackages] = await db.execute(`
    //   SELECT sp.*
    //   FROM specialoffer_pkg sp
    //   WHERE sp.room_id NOT IN (
    //     SELECT p.room_id
    //     FROM reservation res
    //     JOIN product p ON res.product_id = p.product_id
    //     WHERE (res.start_date <= ? AND res.end_date >= ?)
    //   )
    //   AND sp.start_date <= ? AND sp.end_date >= ?;
    // `, [endDate, startDate, endDate, startDate]);

    const [availablePackages] = await db.execute(`
     select t1.*, product_id from (SELECT sp.*
      FROM specialoffer_pkg sp
      WHERE sp.room_id NOT IN (
        SELECT p.room_id
        FROM reservation res
        JOIN product p ON res.product_id = p.product_id
        WHERE (res.start_date <= ?  AND res.end_date >= ? )
      )
      AND sp.start_date <= ?  AND sp.end_date >= ? )  t1
join product on product.offer_id = t1.offer_id and t1.room_id = product.room_id
    `, [endDate, startDate, endDate, startDate]);

    // 예약 가능한 객실과 패키지 데이터 반환
    res.json({ availableRooms, availablePackages });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).send("데이터 가져오기 오류");
  }
});

// 예약 저장 API
router.post("/save", async (req, res) => {
  const { memberId, productId, startDate, endDate, totPrice, adultCnt, childCnt, cancel } = req.body;

  try {
    // 예약 데이터를 예약 테이블에 저장
    const result = await db.execute(
      `INSERT INTO reservation (member_id, product_id, start_date, end_date, tot_price, adult_cnt, child_cnt, Cancel) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [memberId, productId, startDate, endDate, totPrice, adultCnt, childCnt, cancel]
    );

    // 저장 성공 시, 성공 메시지 반환
    res.status(201).json({ message: "예약이 성공적으로 저장되었습니다.", reservationId: result[0].insertId });
  } catch (error) {
    console.error("예약 저장 오류:", error);
    res.status(500).send("서버 오류로 예약을 저장할 수 없습니다.");
  }
});

module.exports = router;
