const arr = [1,2,5,6,2,3,4,1]
// 使用 Set
console.log(Array.from(new Set(arr))); // [ 1, 2, 5, 6, 3, 4 ]
// 利用 map
function uniqueArray(array) {
  let map = {}
  let res = []
  for (let i = 0; i < array.length; i++) {
    let n = array[i]
    if (!map.hasOwnProperty(n)) {
      map[n] = true
      res.push(n)
    }
  }
  return res
}
console.log(uniqueArray(arr)); // [ 1, 2, 5, 6, 3, 4 ]