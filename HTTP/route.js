"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const http = require('http');
/*---------------------------------------- Variable Definition ----------------------------------------*/

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    //routing
    if(request.method === "GET"){
        if(request.url === "/") response.write("You are on the index page.");
        else if(request.url === "/contact") response.write("You are on the contact page.");
        else response.write("This page was not found.");
    }
    response.end();
}).listen(3000);