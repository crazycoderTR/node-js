"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const fs = require('fs');
/*---------------------------------------- Variable Definition ----------------------------------------*/

fs.unlink('demo2.txt', (err) => {
    if(err) throw err;
    console.log('Finish');
});