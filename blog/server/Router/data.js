const bodyParser = require('body-parser');

const express = require('express');
const evCharger = require('../Util/evcharger'); //여기서 만들어논 함수를 사용할거다
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }))



router.post('/evGetData', (req, res, next) => {
    // 여기서 evCharger() 함수를 호출하여 데이터를 처리하고 응답을 보냄
    evCharger(req.body, (error, { Ev } = {}) => {
        if (error) {
            // 에러 처리
            console.error('Error:', error);
            return res.status(500).json({ success: false, error: 'An error occurred' });
        }
        // 성공적으로 데이터를 받았을 때의 처리
        console.log(Ev); // 받은 데이터 확인
        res.status(200).json({ success: true, data: Ev });
    });
});

module.exports = router;