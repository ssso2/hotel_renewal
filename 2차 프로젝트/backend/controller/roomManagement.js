router.get('/reservations/:roomId', async (req, res) => {
    const { roomId } = req.params;

    try {
        // room_id로 해당 product_id를 찾음
        const [productData] = await conn.execute(
            'SELECT product_id FROM product WHERE room_id = ?',
            [roomId]
        );

        if (productData.length === 0) {
            return res.status(404).send('해당 방에 대한 예약 정보가 없습니다.');
        }

        // product_id를 기반으로 예약 정보 조회
        const productId = productData[0].product_id;

        const [reservations] = await conn.execute(
            `SELECT r.room_id, r.description, p.prod_price, res.start_date, 
                    res.end_date
             FROM reservation res
             JOIN product p ON res.product_id = p.product_id
             JOIN room r ON p.room_id = r.room_id
             WHERE res.product_id = ?`,
            [productId]
        );

        // 예약 정보가 없다면 빈 배열 반환
        if (reservations.length === 0) {
            return res.json({ message: '예약 정보가 없습니다.' });
        }

        // 예약 정보 반환
        res.json(reservations);
    } catch (err) {
        console.error('예약 정보 조회 실패: ', err.message);
        res.status(500).send('예약 정보 조회 중 오류 발생');
    }
});
