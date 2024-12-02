const express = require("express");
const router = express.Router();
const conn = require("../db");


module.exports = upload => {
    
    router.post('/', async (req, res) => {
        const { memberId, productId, startDate, endDate, adultCnt, childCnt, totalPrice, cancel } = req.body;
      
        const sql = `
          INSERT INTO reservation (member_id, product_id, start_date, end_date, tot_price, adult_cnt, child_cnt, cancel)
          VALUES (?, ?, ?, ?, ?, ?, ?);
        `;
      
        try {
          await db.query(sql, [memberId, productId, startDate, endDate, totalPrice, adultCnt, childCnt, cancel]);
          res.status(200).json({ message: '예약이 성공적으로 처리되었습니다.' });
        } catch (err) {
          console.error('예약 처리 실패:', err);
          res.status(500).json({ message: '예약 처리에 실패하였습니다.' });
        }
      });
      
      module.exports = router;
      
}