const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {
    router.get("/", async (req, res) => {
        console.log("board 목록 접근");

        try {
            // const [ret] = await conn.execute('select board.*, member.name, DATE_FORMAT(date,\'%Y-%m-%d\') as reg_str from board join member on member.member_id = board.member_id where board.member_id = ?')

            const [ret] = await conn.execute('select *, DATE_FORMAT(date,\'%Y-%m-%d\') as reg_str from board')
            res.json(ret);
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }
        
    });

    //detail
    router.get("/detail/:board_id", async (req, res) => {
        console.log("board detail 접근");

        try {
            const [ret] = await conn.execute("select *,DATE_FORMAT(date,\'%Y-%m-%d %H:%i:%s\') as reg_str from board where board_id = ?",[req.params.board_id])
            console.log(req.params);
            
            res.json(ret[0]);
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }
        
    });


    // 쓰기
    router.post("/join", async(req, res) => {
        console.log("백엔드 join",req);

        let sql = 'insert into board (title,context,secret,date) values (?,?,?,sysdate())';


        let data = [
            req.body.title,
            req.body.context,
            req.body.secret,
        ];
        console.log("백엔드 join",data);

        try {
            const [ret] = await conn.execute(sql, data)
            
            const newId = ret.insertId;
            console.log('쓰기완료',newId);
            res.json({newId})
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }

    });

    router.delete("/delete/:board_id", async(req, res) => {
        console.log("삭제 진입:" + req.params.board_id);
        console.log(req.body);


        try {
            const [ret] = await conn.execute('delete from board where board_id = ?',[req.params.board_id])
            res.send("삭제 성공:" + req.params.board_id);
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }

    });

    router.put("/modify/:board_id", async(req, res) => {
        //console.log(req.body)
        let data = [
            req.body.title,
            req.body.context,
            req.params.board_id
        ]
        console.log(data);

        try {
            const [ret] = await conn.execute('update board set title=?, context=? where board_id = ?', data)
            res.send("수정성공");
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }
        
    });
    return router;
};
