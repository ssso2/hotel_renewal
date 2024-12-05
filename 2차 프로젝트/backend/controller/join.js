const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {

    // 쓰기
    router.post("/", async(req, res) => {
        console.log("회원가입 join",req);

        let sql = 'insert into member (member_id,pw,name,name_eng,email,phone,birth,join_date,grade) values (?,?,?,?,?,?,sysdate(),3)';


        let data = [
            req.body.member_id,
            req.body.pw,
            req.body.name,
            req.body.name_eng,
            req.body.email,
            req.body.phone,
            req.body.birth,
        ];
        console.log("회원가입 join",data);

        try {
            const [ret] = await conn.execute(sql, data)
            
            const newId = ret.insertId;
            console.log('회원정보입력완료',newId);
            res.json({newId})
        } catch (err) {

            console.log("회원정보입력 sql 실패 : ", err.message);
            ret.status(500).send('회원정보입력 db오류')

        }

    });


    return router;
};
