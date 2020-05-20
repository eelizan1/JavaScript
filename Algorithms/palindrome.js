const isPanindrome = (string) => {
    const strArray = string.split('');
    let i = 0;
    let j = strArray.length -1;

    while (i < j) {
        if (strArray[i] !== strArray[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }

    return  true;
}

console.log(isPanindrome('caabbaac'));