"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('./models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/
/*
    limit -> limititation ~ used to indicate how much data we want
    skip -> jump ~ used to skip certain places
*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    user.find({/* We can add a condition */}, (err, data) => {
        if(err) throw err;
        console.log(data);
    })
	.skip(2)
	.limit(1);
});
// Jump after second register and show one register
