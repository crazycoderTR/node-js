"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const router = express.Router();
/*---------------------------------------- Variable Definition ----------------------------------------*/

router.get('/', (req, res, next) => {
    const user = true;
    if(user)
        res.send('User Page');
    else 
        return next({status: 404, message: 'User not found'});
});

router.post('/', (req, res) => {
    res.send('User Post Page');
});

module.exports = router;