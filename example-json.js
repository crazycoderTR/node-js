"use strict";
let person = {
    name: 'Mesut',
    lastname: 'KILINCASLAN'
};

console.log(person);
console.log(typeof person);

// Convert to JSON

let jsonObject = JSON.stringify(person);

console.log(jsonObject);
console.log(typeof jsonObject);

// Convert to Object

let object = JSON.parse(jsonObject);

console.log(object);
console.log(typeof object);