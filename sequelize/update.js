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
    
    User.findOne({
        where: {
            id: 4
        }
    }).then(user => {
        if(user){
            user.update({
                email: 'mrtergn@hotmail.com'
            }).then(usr => console.log(usr.toJSON()));
        }
    });
});