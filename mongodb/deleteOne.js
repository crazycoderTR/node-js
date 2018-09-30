"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoDB = require('mongodb').MongoClient;
/*---------------------------------------- Variable Definition ----------------------------------------*/

mongoDB.connect("mongodb://127.0.0.1:27017/nodeMongoTest", (error, db) => {
    if(error) throw error;
    else{
        console.log("Connection is OK!");
        // DeleteOne deletes only one register
        db.collection('books').deleteOne({bookName: "NODEJS"}, (err, result) => {
            if(err) throw err;
            else
                console.log('Register has been deleted');
        });
    }
});