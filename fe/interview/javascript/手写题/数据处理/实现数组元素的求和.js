// var arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = arr.reduce((memo, cur) => memo + cur)
// console.log(sum);

let arr = [1,2,3,[[4,5],6],7,8,9]

arr = arr.toString().split(',').reduce((memo, cur) => Number(memo) + Number(cur))
console.log(arr);
