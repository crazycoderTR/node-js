"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (error, db) => {
    if(error) throw error;
    else{
        console.log("Connection is OK!");
        db.collection("books").findOne({/*bookName: "NODEJS"*/}, (err, row) => {
            // If the first parameter is empty, it returns the first record.
            console.log(row);
            // console.log(row.bookName);  ~ We can bring a single information about the recording.
        });
    }
});