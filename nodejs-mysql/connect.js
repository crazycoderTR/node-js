"use strict";
/* ---------------- Variable Definition ---------------- */
const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs'
});
/* ---------------- Variable Definition ---------------- */

/* ---------------- Connection Control Code ---------------- 
connection.connect(err => {
    if(err) throw err;
    console.log('Connection succesfull!');
});
 ---------------- Connection Control Code ---------------- */