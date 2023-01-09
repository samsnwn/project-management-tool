const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json('Hello from server')
})


module.exports = router