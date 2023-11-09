let arr = [1,[2,[3,4,5]]]
function myFlat(arr, depth) {
  if (!Array.isArray(arr) || depth <= 0) {
    return arr
  }
  return arr.reduce((memo, cur) => memo.concat(Array.isArray(cur) ? myFlat(cur, depth - 1): cur) , [])
}

console.log(myFlat(arr, 1)); // [ 1, 2, [ 3, 4, 5 ] ]
console.log(myFlat(arr, 10)); // [ 1, 2, 3, 4, 5 ]