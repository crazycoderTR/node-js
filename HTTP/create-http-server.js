"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const http = require('http');
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*
* request => The details you want the user to have on our system.
* response => Details of the answers we have given to our user requests.
*/

// Server installation...
const server = http.createServer((request, response) => {
    console.log('A request was made.');
    console.log(request.headers);
    // The first variable is a successful status code.
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write('<b>OK!</b>!');
    response.write('<h2> Welcome </h2>');
    response.end();
}).listen(3000); // You can use the port server of your choice.