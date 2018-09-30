"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (error, db) => {
    if(error) throw error;
    else{
        console.log("Connection is OK!");

        let newData = {
            bookName: "NODEJS",
            author: "Mesut KILINCASLAN",
            yearofPrinting: 2012
        }
        // First parameter is where command, second parameter new data information
        db.collection('books').update({bookName: "NODEJS"},newData ,(err, result) => {
            if(err) throw err;
            else
                console.log('Register has been updated');
        });
    }
});