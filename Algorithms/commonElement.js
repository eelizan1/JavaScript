const findCommon = (numArray) => {
    // use a map to record occurrences
    const map = new Map();
    let item = 0;
    let count = -1;

    for (let i = 0; i < numArray.length; i++) {
        // check if item is in map
        // if in map then increment
        if (map.has(numArray[i])) {
            // update count by incrementing 1
            let addCount = map.get(numArray[i]) + 1;
            map.set(numArray[i], addCount);
        } else{
            // add new number starting with a count of 1
            map.set(numArray[i], 1);
        }

        // update count with current element's count if it's greater than count
        if (map.get(numArray[i]) > count) {
            count = map.get(numArray[i]);
            item = numArray[i];
        }
    }

    return item;
}

const findCommonMap = (numArray) => {
    // use a map to record occurrences
    const map = new Map();
    let item = 0;
    let count = -1;

    numArray.forEach((num, i) => {
        // check if item is in map
        // if in map then increment
        if (map.has(numArray[i])) {
            // update count by incrementing 1
            let addCount = map.get(numArray[i]) + 1;
            map.set(numArray[i], addCount);
        } else{
            // add new number starting with a count of 1
            map.set(numArray[i], 1);
        }

        // update count with current element's count if it's greater than count
        if (map.get(numArray[i]) > count) {
            count = map.get(numArray[i]);
            item = numArray[i];
        }
    });

    return item;
}

const array = [1, 2, 2, 2, 3, 4, 4, 5, 6, 7];
console.log(findCommonMap(array));