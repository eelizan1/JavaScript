//Given two arrays, write a function to compute their intersection.
//Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

const intersection = (arr1, arr2) => {
    const intersection = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    const set = new Set(intersection);
    return [...set];
}

const intersection2 = (arr1, arr2) => {
    // create a set with arra1
    const set = new Set(arr1);
    // set with common
    const commonSet = new Set();

    // loop through arr2
    // if there's a common element with set and arr2, add to commonSet
    arr2.forEach(item => {
        if (set.has(item)) {
            commonSet.add(item);
        }
    });

    return [...commonSet];
}

console.log(intersection2([4,9,5], [9,4,9,8,4]));