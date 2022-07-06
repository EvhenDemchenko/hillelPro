// function parsing1(...args) {
//     if (args.length < 5) return console.log('Error');
//     const strValues = [];
//     let obj = {};
//     args.forEach((item, index, arr) => {
//         if (index < 3) {
//             item === undefined ?item = 'Error' : item;
//             strValues.push(item);
//         } else {
//             obj[index] = item;
//         }
//     })
//     console.log(strValues.join('-'));
//     console.log(obj);
// }

// parsing1(...[undefined, 2, 3, 4, 5, 'sd', 'asd']);

function parsing2(a='error',b,c, ...args) {
    if (args.length < 2) return console.log('Error');
    console.log(`${a}-${b}-${c}`);
    console.log({...args});
}
parsing2(...[undefined, 2, 3, 4, 5, 'sd', 'asd']);