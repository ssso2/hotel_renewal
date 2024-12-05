const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = upload => {
    //메인
    router.get("/", async (req, res) => {
        try {
            const [ret] = await conn.execute("select * from notice");
            res.json(ret);
            console.log("데이터", ret);
        } catch (error) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });
    //디테일
    router.get("/detail/:id", async (req, res) => {
        console.log("notice detail 접근");
        try {
            const [ret] = await conn.execute(
                "select * from notice where notice_id =? ",
                [req.params.id]
            );

            if (ret.length === 0) {
                return res.status(404).json({ message: "id없음" });
            }
            console.log("데이터", ret[0]);
            res.json(ret[0]);
        } catch (error) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });
    return router;
};
