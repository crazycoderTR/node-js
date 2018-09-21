"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const router = express.Router();
/*---------------------------------------- Variable Definition ----------------------------------------*/

router.get('/profile', (req, res) => {
    res.send('Profile Page ');
});

router.post('/profile', (req, res) => {
    res.send('Profile Post Page');
});

module.exports = router;