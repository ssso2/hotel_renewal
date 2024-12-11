const express = require("express");
const router = express.Router();
const conn = require("../db");


// module.exports = upload => {
router.get("/", (req, res) => {
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

  console.log("실행된 쿼리: ", query);

  conn.execute(query, [memberId]).then((results)=>{
    console.log("쿼리 결과: ", results);  // 여기에서 결과 확인
    res.json(results); // 결과를 클라이언트로 반환
  }).catch((err) => {
    
      console.error("쿼리 오류:", err);
      res.status(500).send("DB 에러");
    
  });
});

module.exports = router;
// };
