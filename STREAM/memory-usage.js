// It is a method used by the object we use to keep the memory from occupying.
"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const fs = require('fs');
const http = require('http');
const server = http.createServer();
/*---------------------------------------- Variable Definition ----------------------------------------*/

server.on('request', (req, res) => {
    /*
     fs.readFile('file.txt', (err, data) => {
         if(err) throw err;
         res.end(data);
     });
     */
     const readStream = fs.createReadStream('file.txt');
     // res&res object same time writeable object
     readStream.pipe(res);

});

server.listen(3000);