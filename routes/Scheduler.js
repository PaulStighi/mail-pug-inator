const express = require('express');
const router = express.Router();
const secretData = require('./../config/sensitiveData.json');

router.post('/', async function (req, res) {
    res.send('Scheduler!');
});

module.exports = router;