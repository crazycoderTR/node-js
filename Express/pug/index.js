"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const express = require('express');
const app = express();
/*---------------------------------------- Variable Definition ----------------------------------------*/

app.set('view engine', 'pug'); // Pug as the default theme engine.
app.get('/', (req, res) => {
    res.render('index', {name: 'Mesut', nickname: 'crazycoder'}); // We are sending variable as parameter.
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {
    console.log('Express server started!');
});