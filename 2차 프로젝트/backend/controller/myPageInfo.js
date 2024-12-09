const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {
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

    //detail
    // router.get("/detail/:num", async (req, res) => {
    //     console.log("board detail 접근");

    //     try {
    //         const [ret] = await conn.execute("select * from board where num = ?",[req.params.num])
    //         res.json(ret[0]);
    //     } catch (err) {

    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send('db오류')

    //     }
        
    // });


    // // 쓰기
    // router.post("/join", async(req, res) => {
    //     console.log("백엔드 join",req);

    //     let sql = 'insert into board (title,context,secret,date) values (?,?,?,sysdate())';


    //     let data = [
    //         req.body.title,
    //         req.body.context,
    //         req.body.secret,
    //     ];
    //     console.log("백엔드 join",data);

    //     try {
    //         const [ret] = await conn.execute(sql, data)
            
    //         const newId = ret.insertId;
    //         console.log('쓰기완료',newId);
    //         res.json({newId})
    //     } catch (err) {

    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send('db오류')

    //     }

    // });

    // router.delete("/delete/:num", async(req, res) => {
    //     console.log("삭제 진입:" + req.params.num);
    //     console.log(req.body);


    //     try {
    //         const [ret] = await conn.execute('delete from board where num = ?',[req.params.num])
    //         res.send("삭제 성공:" + req.params.num);
    //     } catch (err) {

    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send('db오류')

    //     }

    // });

    // router.put("/modify/:num", async(req, res) => {
    //     //console.log(req.body)
    //     let data = [
    //         req.body.title,
    //         req.body.context,
    //         req.params.num
    //     ]
    //     console.log(data);

    //     try {
    //         const [ret] = await conn.execute('update board set title=?, context=? where num = ?', data)
    //         res.send("수정성공");
    //     } catch (err) {

    //         console.log("sql 실패 : ", err.message);
    //         ret.status(500).send('db오류')

    //     }
        
    // });

    return router;
};
