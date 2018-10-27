"use strict";
/* ---------------- Variable Definition ---------------- */
const connection = require('./connect');
/* ---------------- Variable Definition ---------------- */

connection.connect(err => {
    if(err) throw err;
    console.log('Connection Succesfull');

    let deleteSQL = "DELETE from staff where name = 'mesut'";

    connection.query(deleteSQL, (err, res) => {
        if(err) throw err;
        console.log(res.affectedRows + ' register deleted!!!');
    });
});