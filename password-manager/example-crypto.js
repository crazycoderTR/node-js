"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const crypto = require("crypto-js");
let message = "kralmesut13579";
let key = "123";
/*---------------------------------------- Variable Definition ----------------------------------------*/

// Encrypt
let encrytedMessage = crypto.AES.encrypt(message, key);
console.log(`Encryped Message => ${encrytedMessage}`);

// Decrypt
let bytes = crypto.AES.decrypt(encrytedMessage, key);
let decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log(`Decrypted Message => ${decryptedMessage}`);