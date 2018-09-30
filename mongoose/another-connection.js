"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('./models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://localhost/jsNodeDB', {useMongoClient: true})
    .then(() => {
        console.log('Connection succesfull');
    })
    .catch((err) => {
        console.log('Connection failed.');
    });