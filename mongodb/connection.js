"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (err, db) => {
    if(err) throw err;
    else console.log("Connection is OK!")
});