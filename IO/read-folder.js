"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const fs = require("fs");
/*---------------------------------------- Variable Definition ----------------------------------------*/

fs.readFile('demo.txt', (error, data) => {
    if(error) console.log(error);
    console.log(data.toString());
    console.log('Finish');
});

const demoFile = fs.readFileSync('demo.txt');
console.log(demoFile.toString());
console.log('Finish!');