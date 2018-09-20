"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const app = express();
const router = require('./router/router');
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*

    ? (Non-compulsory area) => cra(zy)?coder ==> cracoder possibly
    * (Any expression may come instead, Any expression may be from the location of the statement to the right.) => crazy*Examplecoder
    + (Must be the same expression on the left, No matter how many) => crazyyyyyycoder

*/

app.use('/prefix', router); // The first parameter is prefix, we can use the prefix we want. Operating => prefix/The page name we want to go to
app.listen(3000, () => {console.log('Express server started')});