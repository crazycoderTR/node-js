"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const http = require('http');
const fs = require('fs');
/*---------------------------------------- Variable Definition ----------------------------------------*/

const server = http.createServer((request, response) => {
    console.log('A request was made.');
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    fs.readFile('index.html',(err, data) => {
        if(err) throw err;
        response.end(data);
    });
}).listen(3000);