const express = require("express");
const router = express.Router();
const conn = require("../db");

router.get("/", async (req, res) => {
    try {
        console.log("회원목록 접근");
        const [ret] = await conn.execute("select * from member");
        res.json(ret);
    } catch (error) {
        console.log("sql 실패 : ", err.message);
        ret.status(500).send("db오류");
    }
});

router.put("/newpw", async (req, res) => {
    const { id, newpw } = req.body;
    console.log(req.body);

    try {
        console.log("비밀번호변경 접근");
        // 프론트에서 id받아 쿼리 실행
        const [ret] = await conn.execute(
            "select * from member where member_id= ?",
            [id]
        );
        // 일치하는 id없을 때 처리
        if (ret.length === 0) {
            console.log("일치하는id없음");
            return res.json({ success: false });
        }
        // 회원일경우 일치하는 id(조건)에 비밀번호 업데이트
        await conn.execute("update member set pw = ? where member_id= ?", [
            newpw,
            id,
        ]);
        // success : 프론트에서 아이디 있는지 없는지에 따라 처리하기위한 키
        res.json({ success: true });
        console.log(id, newpw, "비밀번호 변경 성공");
    } catch (error) {
        console.log("sql 실패 : ", error.message);
        ret.status(500).json({ success: false, message: "서버 오류 발생" });
    }
});

module.exports = router;
