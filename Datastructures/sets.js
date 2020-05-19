const myArray = [1, 2, 3, 4, 5, 1, 2];
// make a set from the array
// Set - removes duplicates from an array
const mySet = new Set(myArray);

// create array from the set without the duplicates
const uniqueArray = [...mySet];

// operations
mySet.add(6);
mySet.add({name: 'enrico'});
mySet.add([8, 9, 10]);

// delete's the value
mySet.delete(3)

// clear - clears all the elements in the set
//mySet.clear();

// has - check's the if the set has the desired value
// similiar to array's includes
myArray.includes(11);

// size - returns the set's size
const size = mySet.size;
console.log(size);

///////////////////
// Array vs Sets
//
// Array is an ORDERED list of elements
// Set is an UN-ORDERED list of unique elements

