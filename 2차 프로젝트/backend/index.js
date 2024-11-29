const express = require("express");
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors') // 다른 포트에서 들어와도 열어주는 것이다.
const multer = require('multer'); // 자동으로 파일 업로드 처리를 해주겠다.
const path = require('path');



app.use(cors()); //다른 포트에서 들어와도 열어주도록 cors 세팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 세션 설정
app.use(session({
    secret:'1234',
    resave : false,
    saveUninitialized : false,
    cookie:{
        secure : false,
        httpOnly : false,
    }
}));

// static 폴더 설정 --> 이미지 파일 프론트 엔드에 서빙
app.use('/bk/files',express.static(path.join(__dirname,'files')))


// frontend static 처리
app.use(express.static(path.join(__dirname,'build')))




// 업로드는 멀터로 작업을 하겠다.
// multer 세팅
const upload = multer({
    storage : multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'files/') //files 폴더 안에 파일 저장 하겠다.
        },
        filename : (req,file,cb)=>{
            const ext = path.extname(file.originalname)
            // 이 방법인데... 이렇게 하면 한글이 깨지게 된다. 
            // cb(null,path.basename(file.originalname,ext) + Date.now() + ext)
            
            // 한글인코딩(한글 안깨지게 올리는 방법)
            let fName = path.basename(file.originalname,ext) + Date.now() + ext
            let newFName = Buffer.from(fName,'latin1').toString('utf-8');
            cb(null,newFName)
        }
    }),
    limits:{fieldSize:5*1024*1024} //5mb
})

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));



//각 라우터 연결(라우팅 추가)=> 라우터 하나 넣을 때마다 아래 2줄이 계속 추가로 붙는 것이다. 
// board 라우터 추가
const boardRouter = require("./controller/board.js");
app.use("/bk/board", boardRouter(upload));
// login 라우터 추가
const loginRouter = require("./controller/login.js");
app.use("/bk/login", loginRouter(upload));




// 위에 거론하지 않은 라우팅 주소는 프론트엔드의 index.html 로 접근
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
});


app.listen(5000,()=>{
    console.log('2차 프로젝트 DB 연결 서버 실행');
});