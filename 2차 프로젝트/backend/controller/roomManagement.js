const express = require('express');
const router = express.Router();
const conn = require("../db");

module.exports = () => {
    
    router.get('/', async (req, res) => {
        console.log("객실관리 백엔드 접근");

        try {
            const [ret] = await conn.execute('SELECT * FROM room');
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패: ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    router.post('/update', async (req, res) => {
        const { roomId, description, check_in } = req.body;

        if (!roomId) {
            return res.status(400).send("roomId는 필수입니다.");
        }

        try {
            if (description !== undefined) {
                await conn.execute(
                    'UPDATE room SET description = ? WHERE room_id = ?',
                    [description, roomId]
                );
            }

            if (check_in !== undefined) {
                await conn.execute(
                    'UPDATE room SET check_in = ? WHERE room_id = ?',
                    [check_in, roomId]
                );
            }

            res.send('수정 완료');
        } catch (err) {
            console.error('SQL 수정 실패: ', err.message);
            res.status(500).send('DB 수정 중 오류 발생');
        }
    });

   // 특정 호수에 대한 예약 정보 조회
   router.get("/reservations/:roomId", async (req, res) => {
    const { roomId } = req.params;
    try {
        // room_id로 해당 product_id를 찾음
        const [productData] = await conn.execute(
            "SELECT product_id FROM product WHERE room_id = ?",
            [roomId]
        );

        if (productData.length === 0) {
            return res.status(404).send("해당 방에 대한 예약 정보가 없습니다.");
        }

        const productId = productData[0].product_id;

        // product_id를 기반으로 예약 정보 조회
        const [reservations] = await conn.execute(
            `SELECT r.room_id, r.description, p.prod_price, res.start_date, 
                    res.end_date, res.Cancel, res.reservation_id
             FROM reservation res
             JOIN product p ON res.product_id = p.product_id
             JOIN room r ON p.room_id = r.room_id
             WHERE res.product_id = ?`,
            [productId]
        );

        if (reservations.length === 0) {
            return res.json({ message: "예약 정보가 없습니다." });
        }

        res.json(reservations);
    } catch (err) {
        console.error("예약 정보 조회 실패: ", err.message);
        res.status(500).send("예약 정보 조회 중 오류 발생");
    }
});


    
    

    return router;
};