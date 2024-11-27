const express = require("express");
const router = express.Router();
const conn = require("../db");
//const session = require('express-session');
// const fs = require("fs");
//const app = express();


// 인덱스에서 넘기는 자료를 받아서 처리
module.exports = () => {



    // 로그인 정보 받아오기
    router.post("/", async (req, res) => {
        console.log("login 목록 접근");

        try {
            const [ret] = await conn.execute('select member_id, name, grade from member where member_id = ? and pw = ?',[req.body.id, req.body.pw])

            //console.log(ret);
            

            if(ret.length){
                req.session.user = ret[0]
                console.log(req.session)
                res.send(ret[0].name+"님, 로그인 성공");
                
               
            }else{
                res.send("로그인 실패")
            }

            
            //res.json(ret);


            
        } catch (err) {

            console.log("sql 실패 : ", err.message);
            ret.status(500).send('db오류')

        }
        
    });


    router.get("/", async (req, res) => {
        console.log("login 목록 접근", req.session);

        if(req.session.user){ // user라는 세션이 있으면 loginComplete.html 페이지가 뜨고 user 이름도 넣어준다.
            
            res.json(req.session.user);
        }
        else{ //user라는 세션이 없다면 로그인 페이지가 뜬다.
            res.send(`로그인 정보 없음`);
        }
        
    });

    return router;
};

/*
같은 port 사용시에는  session 같이 사용 OK
port 가 달라서 세션을 잃어버림

*/
