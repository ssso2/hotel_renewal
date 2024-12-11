const express = require("express");
const router = express.Router();
const conn = require("../db");


// module.exports = upload => {
router.get("/", async(req, res) => {
  const memberId = req.query.member_id;
  console.log("받은 memberId: ", memberId);

  if (!memberId) {
    return res.status(400).send("member_id가 제공되지 않았습니다.");
  }

  const query = `
    SELECT 
      r.reservation_id,
      r.start_date,
      r.end_date,
      r.adult_cnt,
      r.child_cnt,
      r.tot_price,
      p.product_id,
      p.room_id,
      rm.room_type,
      s.offer_name
    FROM reservation r
    LEFT JOIN product p ON r.product_id = p.product_id
    LEFT JOIN room rm ON p.room_id = rm.room_id
    LEFT JOIN specialoffer_pkg s ON p.offer_id = s.offer_id
    WHERE r.member_id = ?
      AND r.Cancel = 0;
  `;

  try {
    console.log("실행된 쿼리: ", query);

    // 데이터베이스 쿼리 실행
    const [rows] = await conn.execute(query, [memberId]);

    console.log("쿼리 결과: ", rows); // 쿼리 결과 로그 출력
    res.json(rows); // 클라이언트로 결과 반환
  } catch (error) {
    console.error("쿼리 오류:", error);
    res.status(500).send("DB 에러");
  }
});

module.exports = router;
// };
