let str = "0a1b2c3d4";
// /g或不带/g效果一样
const arr = str.split(/[a-z]/g); //  ['0', '1', '2', '3', '4']

console.log(arr);
