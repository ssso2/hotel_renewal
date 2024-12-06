const express = require('express');
const router = express.Router();
const db = require('../db');  // MySQL 연결 객체

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
    const [availablePackages] = await db.execute(`
      SELECT sp.*
      FROM specialoffer_pkg sp
      WHERE sp.room_id NOT IN (
        SELECT p.room_id
        FROM reservation res
        JOIN product p ON res.product_id = p.product_id
        WHERE (res.start_date <= ? AND res.end_date >= ?)
      )
      AND sp.start_date <= ? AND sp.end_date >= ?;
    `, [endDate, startDate, endDate, startDate]);

    // 예약 가능한 객실과 패키지 데이터 반환
    res.json({ availableRooms, availablePackages });
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    res.status(500).send("데이터 가져오기 오류");
  }
});

module.exports = router;
