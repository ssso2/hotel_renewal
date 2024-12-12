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

router.put("/idchk", async (req, res) => {
    const { id, newpw } = req.body;
    try {
        console.log("멤버목록접근", id, pw);

        const [ret] = await conn.execute(
            "select * from member where member_id= ?",
            [id]
        );
        await conn.execute("update member set newpw = ? where member_id= ?", [
            newpw,
            id,
        ]);
        res.json({
            success: true,
            message: "비밀번호 변경 성공",
        });
        if (ret.length === 0) {
            return res.status(404).json({ success: false, message: "ID 없음" });
        }
    } catch (error) {
        console.log("sql 실패 : ", err.message);
        ret.status(500).json({ success: false, message: "서버 오류 발생" });
    }
});
module.exports = router;
