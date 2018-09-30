"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const mongoose = require('mongoose');
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*---------------------------------------- Create a schema ----------------------------------------*/
/*
    -> type: type is variable,
    -> default: value to use if no value is entered,
    -> required: mandatory field,
    -> unique: unique area
    -> maxlength: character size
*/
const Schema = mongoose.Schema;
let userSchema = Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20, 'You can use max {MAXLENGTH} character for {PATH} ! {VALUE} => data bigger than {MAXLENGTH} character'],
        minlength: [2, 'You can use min {MINLENGTH} character for {PATH} ! {VALUE} => data less than {MINLENGTH} character']
    },
    surname: String,
    date_of_birth: String,
    email: {
        type: String,
        unique: true
    },
    work_places: [{name: String}],
    find_work: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        unique: true
    }
});
/*---------------------------------------- Create a schema ----------------------------------------*/

// We are giving out to use on other pages
module.exports = mongoose.model('user', userSchema);