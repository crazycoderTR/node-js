"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const slugify = require("slugify");
/*---------------------------------------- Variable Definition ----------------------------------------*/

let text = "Galatasaray First Match with Fenerbahce will do";

console.log(slugify(text, '-'));
