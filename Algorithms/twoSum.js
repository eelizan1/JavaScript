const twoSum = (numArray, sum) => {
    const resultArray = [];
    const set = new Set();

    for (let i = 0; i < numArray.length; i++) {
        let compliment = sum - numArray[i];
        let pair = [];
        if (!set.has(compliment)) {
            set.add(numArray[i]);
        } else {
            pair[0] = numArray[i];
            pair[1] = compliment;
            resultArray.push(pair);
        }
    }
    return resultArray;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));