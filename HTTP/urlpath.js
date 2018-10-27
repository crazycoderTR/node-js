"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const http = require('http');
const url = require('url');
/*---------------------------------------- Variable Definition ----------------------------------------*/

http.createServer((request, response) => {
    let urlPath = url.parse(request.url);
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});

    switch(urlPath.pathname){
        case '/contact': response.end('Contact'); break;
        case '/login': response.end('Login'); break;
        case '/register': response.end('Register'); break;
        default: response.end('Home');       
    }
}).listen(3000);