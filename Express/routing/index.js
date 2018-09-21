"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const app = express();
const user = require('./router/user');
const profile = require('./router/profile');
const isLogin = require('./middleware/isLogin');
const connection = require('./middleware/connection');
app.set('view engine', 'pug');
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*

    ? (Non-compulsory area) => cra(zy)?coder ==> cracoder possibly
    * (Any expression may come instead, Any expression may be from the location of the statement to the right.) => crazy*Examplecoder
    + (Must be the same expression on the left, No matter how many) => crazyyyyyycoder

*/

/* -------------------- Local Middleware -------------------- */
// This middleware will work before all parameters...
app.use((req, res, next) => { 
    // If we want it to work only for one parameter => app.use('/link', (req, res, next) => {}, (req, res) => {}
    console.log(req.method + ' ' + req.originalUrl);
    next();
});
/* -------------------- Local Middleware -------------------- */


app.use('/prefix',isLogin , user); // The first parameter is prefix, we can use the prefix we want. Operating => prefix/The page name we want to go to, The second parameter is middleware.
app.use('/',connection ,profile);

//User control middleware
app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('error', {
        message: err.message,
        status: err.status
    });
});

app.listen(3000, () => {console.log('Express server started')});