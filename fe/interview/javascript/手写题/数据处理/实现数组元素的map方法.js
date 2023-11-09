let arr = [1,2,3]
Array.prototype.myMap = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须是一个函数')
  }
  let res = []
  for (let i = 0, len = this.length; i < len; i++) {
    res.push(fn(this[i]))
  }
  return res
}

console.log(arr.myMap(n => n*n)); // [ 1, 4, 9 ]
