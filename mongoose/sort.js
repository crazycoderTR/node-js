"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('./models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    user.find({/* We can add a condition */}, (err, data) => {
        if(err) throw err;
        console.log(data);
    }).sort({'name': 1 /* 1: small to large and A to Z; -1: large to small* and Z to A */});
});