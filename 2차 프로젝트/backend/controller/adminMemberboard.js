const express = require("express");
const conn = require("../db");
const router = express.Router();
const cors = require("cors");

router.use(cors());

// 회원관리 게시판 DB 연결
router.get("/", async (req, res) => {
    console.log("백엔드 접근하기")

    try {
        const [memberDB] = await conn.execute("SELECT member_id, name, join_date, description, withdrawal, withdrawal_date FROM room")
        // const [memberDB] = await conn.execute("SELECT * FROM room")
        console.log("연결 성공", memberDB)
        res.send(memberDB)
    } catch (err) {
        console.log("sql 실패", err.message)
        res.status(500).send("db 받기 오류")
    }
})

module.exports = router