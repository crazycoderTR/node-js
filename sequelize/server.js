"use strict";
/* ---------------- Variable Definition ---------------- */
const Sequelize = require('sequelize');
module.exports = new Sequelize('sequelize-users', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
/* ---------------- Variable Definition ---------------- */

/*
sequelize.sync().then(() => {
    console.log('Connection Succesfull !!!');
});
*/