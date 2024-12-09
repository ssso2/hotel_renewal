const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = upload => {
    //메인
    router.get("/", async (req, res) => {
        try {
            const [ret] = await conn.execute(
                "select * from notice ORDER BY reg_date DESC;"
            );
            res.json(ret);
            console.log("admin/notice 리스트 접근");
        } catch (error) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });

    //filter
    router.put("/", async (req, res) => {
        var { category, keword } = req.body;
        const sql = " select * from notice where title like ?";
        const params = [`%${keword}%`];
        try {
            const [ret] = await conn.execute(sql, params);
            console.log("쿼리", sql, "값", params);
            console.log("ret 최종데이터", ret);
            res.json(ret);
            console.log("admin/notice 필터 접근");
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });
    //디테일
    router.get("/detail/:id", async (req, res) => {
        try {
            const [ret] = await conn.execute(
                "select * from notice where notice_id = ?",
                [req.params.id]
            );
            console.log("admin/notice detail 접근");
            if (ret.length === 0) {
                return res.status(404).json({ message: "id없음" });
            }
            console.log("데이터", ret[0]);
            res.json(ret[0]);
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });
};
router.get;
