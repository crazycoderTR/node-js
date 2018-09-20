"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const app = express();
const middleware = {
    requireAuthentication: function(req, res, next){
        let userLogin = true;
        if(userLogin) next();
        else res.send('Using not found');
    },
    logger: function(req, res, next){
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}
/*---------------------------------------- Variable Definition ----------------------------------------*/


/* --------------- for localhost:3000 ---------------
app.get('/', (req, res) => {
    res.send('HomePage');
});
-------------------------------------------------- */

/* --------------- Middleware using for all router ---------------
app.use(middleware.requireAuthentication);
---------------------------------------------------------------- */
app.set('view engine','pug');
app.use(express.static(__dirname + '/public'));
app.use(middleware.logger);

// Middleware using only about router
app.get('/home', middleware.requireAuthentication, (req, res) => {
    res.render('home');
});

//Express port
app.listen(3000, () => {
    console.log('Express Server Started!')
});