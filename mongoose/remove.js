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
    
    user.remove({ surname: 'ERGÜN'}, (err) => {
        if(err) throw err;
        console.log('Register has been deleted');
    });
});