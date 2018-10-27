"use strict";
/* ---------------- Variable Definition ---------------- */
const Sequelize = require('sequelize');
const sequelize = require('./server');
/* ---------------- Variable Definition ---------------- */

// Table Info
const User = sequelize.define('users', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false, // Null field control
        validate: {
            len: [1,10] // Length control
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: [1,20]
        }
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});

sequelize.sync({force: false} /* If there is a table, delete the table and recreate the table command */).then(() => {
    console.log('Connection Succesfull !!!');
    
    // Codes for inserting data into a database
    User.create({
        userName: 'Engin',
        email: 'engincn@gmail.com',
        phone: '0555 333 1212',
        active: false
    }).then( data => console.log(data.toJSON()));
});