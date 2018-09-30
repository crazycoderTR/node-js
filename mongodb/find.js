"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (error, db) => {
    if(error) throw error;
    else{
        console.log("Connection is OK!");
        db.collection("books").find({/* We can add a condition */}).toArray((err, result) => {
            console.log(result);
        });
    }
});