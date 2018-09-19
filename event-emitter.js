"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const events = require("events");
const eventEmitter = new events.EventEmitter();
/*---------------------------------------- Variable Definition ----------------------------------------*/

/* We can run as long as we want. */
eventEmitter.on('Hi!', (object) => {
    console.log(`Hi ${object.name} ${object.userName}`);
});
eventEmitter.emit('Hi!', {name: 'Mesut', userName: 'crazycoder'});

/* We can run only once. */
eventEmitter.once('Say hi!', () => {
    console.log(`Hi`);
});
eventEmitter.emit('Say hi!');