const fizzbuzz = (num) => {
   const array = [];
    for(let i = 0; i <= num; i++) {
        let output = "";
        if (i % 3 === 0) {
            output += 'fizz';
        }

        if (i % 5 === 0) {
            output += 'buzz';
        }

        if (output === '') {
            output += i;
        }

        array.push(output);
    }

    return array;
}

const mapFuzz = (num) => {
    const map = new Map();
    map.set(3, "fizz");
    map.set(5, 'buzz');

    // num.forEach(number => {
    //     if()
    // })
}

console.log(fizzbuzz(20));