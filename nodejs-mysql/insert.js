"use strict";
/* ---------------- Variable Definition ---------------- */
const connection = require('./connect');
/* ---------------- Variable Definition ---------------- */

connection.connect(err => {
    if(err) throw err;
    console.log('Connection Succesfull');

    let insertSQL = "INSERT INTO staff (name, surname, email) VALUES('Mesut', 'KILINCASLAN', 'kilincaslanmesut@gmail.com')";

    connection.query(insertSQL, (err, res) => {
        if(err) throw err;
        console.log('Register is succesfull');
    });
});