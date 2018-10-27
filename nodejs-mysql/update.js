"use strict";
/* ---------------- Variable Definition ---------------- */
const connection = require('./connect');
/* ---------------- Variable Definition ---------------- */

connection.connect(err => {
    if(err) throw err;
    console.log('Connection Succesfull');

    let updateSQL = "UPDATE staff SET name = 'mesut' WHERE surname = 'KILINCASLAN'";

    connection.query(updateSQL, (err, res) => {
        if(err) throw err;
        console.log('Update is succesfull');
        console.log(res.affectedRows + ' register updated!!!');
    });
});