"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (error, db) => {
    if(error) throw error;
    else{
        console.log("Connection is OK!");
        let book = {
            bookName: "NODEJS",
            author: "Mesut KILINCASLAN",
            yearofPrinting: 2018
        }
        // Registering
        db.collection("books").insertOne(book, (err, result) => {
            if(err) throw err;
            else console.log('Registration completed!');
        });
    }
});