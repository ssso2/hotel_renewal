const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");

module.exports = upload => {
    router.get("/", async (req, res) => {
        console.log("specialOffer 목록 접근");

        try {
            const [ret] = await conn.execute("select * from specialoffer_pkg");
            res.json(ret);
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });

    //detail
    router.get("/detail/:id", async (req, res) => {
        console.log("specialOffer detail 접근");
        try {
            const [ret] = await conn.execute(
                // "select * from specialoffer_pkg where offer_id = ?",
                // [req.params.id]
                "select specialoffer_pkg.*, product_id from specialoffer_pkg join product on specialoffer_pkg.offer_id = product.offer_id where specialoffer_pkg.offer_id = ? ",
                [req.params.id]
            );
            if (ret.length === 0) {
                return res.status(404).json({ message: "id없음" });
            }
            res.json(ret[0]);
        } catch (err) {
            console.error("sql 실패 : ", err.message);
            res.status(500).send("db오류");
        }
    });
    return router;
};
