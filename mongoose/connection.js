"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/nodeMongoTest', {useMongoClient: true});