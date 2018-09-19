"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const fs = require('fs');
const file = "Kaptan Amerika İlk Yenilmez  Buckin Ölümü  Tren Sahnesi  HD.mp4";

const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream('new.mp4');
let progress = 0;
/*---------------------------------------- Variable Definition ----------------------------------------*/

fs.stat(file, (err, data) => {
    const totalSize = data.size;
    
    readStream.on('data', (chunk) => {
        progress += chunk.length;
        console.log(progress);
        console.log(Math.round((100 * progress) / totalSize) + '%');
        //console.log('I received a data');
    });
    readStream.pipe(writeStream);
    writeStream.on('finish', () => {
        console.log('New file created!');
    });

    /*
    readStream.on('end', () => {
        console.log('Finish reading to data');
    });
    */
});

