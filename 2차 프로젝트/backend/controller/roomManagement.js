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

    return router;
};
