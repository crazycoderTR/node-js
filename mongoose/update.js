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

    // First parameter is where command, second parameter new data information
    user.update({find_work: true}, {find_work: false}, {multi: true, upsert: true /* creates a new desired record if no command is available */} /* all eligible records */ ,(err) => {
        if(err) throw err;
        console.log('Register has been updated');
    });
});