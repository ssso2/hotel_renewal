const express = require("express");
const multer = require("multer");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");
const { ALL } = require("dns");

module.exports = upload => {
    //메인
    router.get("/", async (req, res) => {
        try {
            const [ret] = await conn.execute(
                "select * from notice ORDER BY notice_id DESC;"
            );
            res.json(ret);
            // console.log("전체데이터", ret);
        } catch (error) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });

    //filter
    router.put("/", async (req, res) => {
        var { category, keword } = req.body;
        console.log("notice 필터 접근");

        var sql = "";
        const params = [`%${keword}%`];
        if (category === "all") {
            sql = "select * from notice where title like ? or context like ?";
            params.push(`%${keword}%`);
        } else if (category === "title") {
            sql = " select * from notice where title like ?";
        } else if (category === "con") {
            sql = " select * from notice where context like ?";
        }

        try {
            const [ret] = await conn.execute(sql, params);
            // console.log("쿼리", sql, "값", params);
            // console.log("ret 최종데이터", ret);
            res.json(ret);
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });

    //디테일
    router.get("/detail/:id", async (req, res) => {
        //     const sql = `
        //     (SELECT 'current' AS state, notice_id, title, category, context, reg_date, view_point, system_name
        //      FROM notice
        //      WHERE notice_id = ?)
        //     UNION ALL
        //     (SELECT 'prev' AS state, notice_id, title, NULL AS category,  NULL AS context, NULL AS reg_date, NULL AS view_point, NULL AS system_name
        //      FROM notice
        //      WHERE notice_id < ?
        //      ORDER BY notice_id DESC
        //      LIMIT 1)
        //     UNION ALL
        //     (SELECT 'next' AS state, notice_id, title, NULL AS category,  NULL AS context, NULL AS reg_date, NULL AS view_point, NULL AS system_name
        //      FROM notice
        //      WHERE notice_id > ?
        //      ORDER BY notice_id ASC
        //      LIMIT 1);
        // `;
        console.log("notice detail 접근");
        // try {
        //     const [ret] = await conn.execute(sql, [
        //         req.params.id,
        //         req.params.id,
        //         req.params.id,
        //     ]);

        //     if (ret.length === 0) {
        //         return res.status(404).json({ message: "id없음" });
        //     }
        //     console.log("데이터", ret);
        //     res.json(ret);
        try {
            const [ret] = await conn.execute(
                "select * from notice where notice_id = ?",
                [req.params.id]
            );

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

    //등록
    router.post("/register", upload.single("upfile"), async (req, res) => {
        let newFName = Buffer.from(req.file.originalname, "latin1").toString(
            "utf8"
        );
        const sql =
            "insert into notice(category, title, context, system_name, original_name, view_point, reg_date, edit_date) values (?,?,?,?,?, 0, sysdate(),sysdate())";
        const sqldata = [
            req.body.category,
            req.body.title,
            req.body.context,
            req.file.filename,
            newFName,
        ];
        console.log("sqldata", sqldata);

        try {
            const [ret] = await conn.execute(sql, sqldata);
            console.log("결과데이터", ret);
            res.json(ret[0]);
        } catch (error) {
            console.log("에러메세지", error);
        }
    });

    //수정
    // router.put("/detail/:id", async (req, res) => {
    //     const sql = `
    //     (SELECT 'current' AS state, notice_id, title, category, context, reg_date, view_point, system_name
    //      FROM notice
    //      WHERE notice_id = ?)
    //     UNION ALL
    //     (SELECT 'prev' AS state, notice_id, title, NULL AS category,  NULL AS context, NULL AS reg_date, NULL AS view_point, NULL AS system_name
    //      FROM notice
    //      WHERE notice_id < ?
    //      ORDER BY notice_id DESC
    //      LIMIT 1)
    //     UNION ALL
    //     (SELECT 'next' AS state, notice_id, title, NULL AS category,  NULL AS context, NULL AS reg_date, NULL AS view_point, NULL AS system_name
    //      FROM notice
    //      WHERE notice_id > ?
    //      ORDER BY notice_id ASC
    //      LIMIT 1);
    // `;
    //     console.log("notice detail 접근");
    //     try {
    //         const [ret] = await conn.execute(
    //             "select * from notice where notice_id = ?",
    //             [req.params.id]
    //         );

    //         if (ret.length === 0) {
    //             return res.status(404).json({ message: "id없음" });
    //         }
    //         console.log("데이터", ret[0]);
    //         res.json(ret[0]);
    //     } catch (err) {
    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send("db오류");
    //     }
    // });

    return router;
};
