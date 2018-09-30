"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
const user = require('./models/model-user');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://localhost/nodeMongoTest', {useMongoClient: true});

const db = mongoose.connection;

// Control the connection
db.once('open', () => {
    console.log('Connected to database...');

    // Model created
    let user1 = new user({
        name: 'Mert',
        surname: 'ERGÜN',
        date_of_birth: '23/05/1998',
        email: 'mrt@gmail.com',
        work_places: [{name: 'Aliexpress'}, {name: 'Facebook'}, {name: 'IBM'}],
        phone: 5477564765
    });

    // Model saved in database
    user1.save((err) => {
        if(err) throw err;
        console.log('Registration completed!');
    });
});