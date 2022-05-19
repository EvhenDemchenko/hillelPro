// first
const arr1 = [1, 2, 1, 2, 1, 2, 1, 2,];

function cel(arr) {
    let currentValue = arr.reduce((prev, current) => prev + current, 0);
    return (currentValue / arr.length);
}

console.log(cel(arr1))


// second
function multiply(a) {
    return function (b) {
        return a * b;
    }
}

console.log(multiply(5)(5));


// third

function replaceFn(arr, str) {
    if (Array.isArray(arr)) {
        arr.forEach(item => {
            str = replaceFn(item, str);
        })
        return str;
    }
    return str.replaceAll(arr, '');
}


console.log(replaceFn(['l', 'd'], 'hello world'));


