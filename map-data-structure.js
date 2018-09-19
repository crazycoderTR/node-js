//Our Map object has been created
let mapDataStructure = new Map();

//Firstly, 34 values were assigned for the Istanbul key
mapDataStructure.set('İstanbul', 34);

//Then 14 values for the same key were assigned
mapDataStructure.set('İstanbul' ,14);

//6 values are assigned for Ankara
mapDataStructure.set('Ankara', 6);

//When we take the value of Istanbul key from Map, we output 14 values. Map keeps the last value if there is more than one insert operation of the same key
console.log(mapDataStructure.get('İstanbul'));

//Output will be 2
console.log(mapDataStructure.size);

for(let [key, value] of mapDataStructure.entries()){
    console.log(`${key} => ${value}`);
}