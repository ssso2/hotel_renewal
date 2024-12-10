const express = require("express");
const conn = require("../db");
const router = express.Router();
const cors = require("cors");

router.use(cors());

module.exports = () => {
    
    // 회원관리 게시판 DB 연결
    router.get("/", async (req, res) => {
        const { member_id } = req.params
        console.log("회원 ID", member_id)

        console.log("백엔드 접근하기")
        try {    
            const [memberDB] = await conn.execute("SELECT * FROM member")
            const [reservationDB] = await conn.execute("SELECT * FROM reservation")
            res.json({
                members: memberDB,
                reservations: reservationDB
            })
        } catch (err) {
            console.log("sql 실패", err.message)
            res.status(500).send("db 받기 오류")
        }
    })


    router.get("/:member_id", async (req, res) => {
        const { member_id } = req.params
        console.log("회원 ID", member_id)

        console.log("백엔드 접근하기")
        try {    
            const [memberDB] = await conn.execute("SELECT * FROM member")
            const [reservationDB] = await conn.execute("SELECT * FROM reservation")
            res.json({
                members: memberDB,
                reservations: reservationDB
            })
        } catch (err) {
            console.log("sql 실패", err.message)
            res.status(500).send("db 받기 오류")
        }
    })

    return router
}