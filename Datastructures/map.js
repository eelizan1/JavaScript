// Key value pairs
const map = new Map([['name', 'john'], ['surname', 'doe']]);
//console.log(map);

const myMap = new Map();
// use set to add key value pairs
myMap.set('name', 'john');
myMap.set('surname', 'doe');
myMap.set(1, 1);

// delete
myMap.delete(1);

// clear
// myMap.clear;

// check if map has a key
console.log(myMap.has('surname'));
// check if map has a value
console.log(Array.from(myMap.values()).includes('john'));
// returns the size of the map
console.log(myMap.size);


