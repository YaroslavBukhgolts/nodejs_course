var express = require('express');
var router = express.Router();
const redis = require('../database/redis');

/* GET home page. */
// Значение count хранится в Redis и увеличивается на один после каждого обновления страницы
router.get('/', async function(req, res, next) {
    let count = await redis.get('count', 0);
    count++;
    await redis.set('count', count);  
    res.send({ title: 'Express', count });
});


module.exports = router;
