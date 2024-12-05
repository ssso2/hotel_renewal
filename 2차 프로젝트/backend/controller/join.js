const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {
    router.get("/", async (req, res) => {
        console.log("회원가입 목록 접근");

        try {
            const [ret] = await conn.execute('select member_id from member')
            res.json(ret);
        } catch (err) {

            console.log("회원가입 sql 실패 : ", err.message);
            ret.status(500).send('회원가입 db오류')

        }
        
    });

    // 쓰기
    router.post("/", async(req, res) => {
        console.log("회원가입 join",req);

        let sql = 'insert into member (member_id,pw,name,name_eng,email,phone,birth,grade,join_date) values (?,?,?,?,?,?,?,sysdate())';


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
            
            // const newId = ret.insertId;
            // console.log('회원정보입력완료',newId);
            res.json({ret})
        } catch (err) {

            console.log("회원정보입력 sql 실패 : ", err.message);
            ret.status(500).send('회원정보입력 db오류')

        }

    });




    return router;
};
