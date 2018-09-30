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

    user.find({/* We can add a condition */}, 'work_places name' ,(err, data) => {
        if(err) throw err;
        for(var i of data){
            console.log(i);
        }
    });
});