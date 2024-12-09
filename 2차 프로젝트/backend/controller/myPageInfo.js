const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {

    // 회원정보 받아오기
    router.get("/:id", async (req, res) => {
        console.log("myPageInfo 목록 접근");

        try {
            const [ret] = await conn.execute('select birth,email,grade,join_date,member_id,name,name_eng,phone from member where member_id = ?',[req.params.id])
            res.json(ret[0]);
        } catch (err) {

            console.log("myPageInfo sql 실패 : ", err.message);
            ret.status(500).send('myPageInfo db오류')

        }
        
    });

    // 회원정보 수정
    // router.put("/myInfoChg/:id", async(req, res) => {
    //     //console.log(req.body)
    //     let data = [
    //         req.body.title,
    //         req.body.context,
    //         req.params.num
    //     ]
    //     console.log(data);

    //     try {
    //         const [ret] = await conn.execute('update member set phone=?, email=? where pw = ?', data)
    //         res.send("수정성공");
    //     } catch (err) {

    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send('db오류')

    //     }
        
    // });

    return router;
};
