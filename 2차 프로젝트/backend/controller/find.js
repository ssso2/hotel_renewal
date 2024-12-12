const express = require("express");
const router = express.Router();
const conn = require("../db");

router.get("/", async (req, res) => {
    try {
        console.log("멤버목록접근");
        const [ret] = await conn.execute("select * from member");
        res.json(ret);
    } catch (error) {
        console.log("sql 실패 : ", err.message);
        ret.status(500).send("db오류");
    }
});
module.exports = router;
