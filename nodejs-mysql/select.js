"use strict";
/* ---------------- Variable Definition ---------------- */
const connection = require('./connect');
/* ---------------- Variable Definition ---------------- */

connection.connect(err => {
    if(err) throw err;
    console.log('Connection Succesfull');

    connection.query('Select*from staff' /*SQL Codes field*/, (err, result) => {
        if(err) throw err
        //console.log('Result: ' + JSON.stringify(result));  show on screen
        
        /* ---------------- Another show on screen  ---------------- 
        for(let i = 0; i < result.length; i++){
            console.log(result);
        }
        */

        result.forEach(item => {
            console.log(item);
        });
    });
});