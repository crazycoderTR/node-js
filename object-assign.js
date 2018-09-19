let targetObj = {};
let sourceObj1 = {name: "JavaScript"};
let sourceObj2 = {title: "EcmaScript6"};
Object.assign(targetObj, sourceObj1, sourceObj2);

console.log(targetObj.name);
console.log(targetObj.title);