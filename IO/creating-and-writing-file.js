"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const fs = require('fs');
/*---------------------------------------- Variable Definition ----------------------------------------*/

fs.appendFile('demo2.txt', 'Hi world!', (err) => {
    if(err) throw err;
    console.log('Finish');
});

fs.writeFile('demo2.txt', 'Hello world!', (err) => {
    if(err) throw err;
    console.log('Finish');
});

/*
* fs.appendFile()  => If the file does not exist we create it and add the text we want. If there is a file, it adds to it without deleting the previous data.
* fs.writeFile()  => If the file does not exist we create it and add the text we want. If the file exists, it deletes all the contents and adds the data we want to add.
*/