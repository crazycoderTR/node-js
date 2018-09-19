"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const app = express();
/*---------------------------------------- Variable Definition ----------------------------------------*/

app.get('/', (req, res) => {
    res.send('First Express App!');
});

app.listen(3000, () => {
    console.log('Express server started!');
});