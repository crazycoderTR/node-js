"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const router = express.Router();
/*---------------------------------------- Variable Definition ----------------------------------------*/

router.get('/signIn', (req, res) => {
    res.send('Sing In Page');
});

router.post('/signIn', (req, res) => {
    res.send('Sing In Post Page');
});

module.exports = router;