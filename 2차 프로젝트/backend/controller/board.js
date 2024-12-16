const express = require("express");
const router = express.Router();
const conn = require("../db");
const fs = require("fs");


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = upload => {
    router.get("/", async (req, res) => {
        console.log("board 목록 접근");

        try {
            const [ret] = await conn.execute('select board.*,member.name as writer_name, DATE_FORMAT(date,\'%Y-%m-%d\') as reg_str from board JOIN member ON board.member_id = member.member_id ORDER BY board_id DESC')
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
            // const [ret] = await conn.execute("select *,DATE_FORMAT(date,\'%Y-%m-%d %H:%i:%s\') as reg_str from board where board_id = ?",[req.params.board_id])
            const [ret] = await conn.execute("select board.*, member.name as writer_name, DATE_FORMAT(date,\'%Y-%m-%d %H:%i:%s\') as reg_str from board JOIN member ON board.member_id = member.member_id where board.board_id = ?",[req.params.board_id])
            console.log(req.params);
            
            res.json(ret[0]);
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }
        
    });


    // 쓰기
    router.post("/join", async (req, res) => {
        console.log("백엔드 join", req.body);

        // member_id 추가
        let sql = 'insert into board (title, context, secret, date, member_id) values (?, ?, ?, sysdate(), ?)';

        let data = [
            req.body.title,
            req.body.context,
            req.body.secret,
            req.body.member_id, // member_id를 추가
        ];
        console.log("백엔드 join", data);

        try {
            const [ret] = await conn.execute(sql, data)

            const newId = ret.insertId;
            console.log('쓰기완료', newId);
            res.json({ newId });
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            res.status(500).send('db오류');
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


    // answer 업데이트
    router.put("/answer/:board_id", async(req, res) => { 
        console.log("answer 업데이트 진입", req.params.board_id); 
        
        try { 
            const [ret] = await conn.execute('update board set answer = ? where board_id = ?', [req.body.answer, req.params.board_id]); 
            res.send("answer 업데이트 성공"); 
        } catch (err) { 
            console.log("answer 업데이트 sql 실패 : ", err.message); 
            res.status(500).send('db오류'); 
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


    //filter
    router.put("/", async (req, res) => {
        var { category, keyword } = req.body;

        var sql = "";
        const params = [`%${keyword}%`];
        console.log("board 필터 접근", category, keyword);
        if (category === "all") {
            sql = "select * from board where title like ? or context like ?";
            params.push(`%${keyword}%`);
        } else if (category === "title") {
            sql = " select * from board where title like ?";
        } else if (category === "con") {
            sql = " select * from board where context like ?";
        } else if (category === "분류") {
            sql = "select * from board where title like ?";
        } else if (
            category === "공지" ||
            category === "안내" ||
            category === "이벤트"
        ) {
            sql = "select * from board where title like ? and category = ?";
            params.push(category);
        }

        sql += " ORDER BY board_id DESC";
        try {
            const [ret] = await conn.execute(sql, params);
            console.log(ret);
            // ret.push("order by desc");
            console.log("쿼리", sql, "값", params);
            // console.log("ret 최종데이터", ret);
            res.json(ret);
        } catch (err) {
            console.log("sql 실패 : ", err.message);
            ret.status(500).send("db오류");
        }
    });


    return router;
};
