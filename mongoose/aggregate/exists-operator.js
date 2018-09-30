"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('../models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    user.find({
        //Don't bring to data if it hasn't to 'groups' field(if $exists: true)
        //Bring to data if it hasn't to 'groups' field(if $exists: false)
        groups: {
            $exists: true
        }
    }, 'work_places name groups' ,(err, data) => {
        if(err) throw err;
        console.log(data);
    });
});