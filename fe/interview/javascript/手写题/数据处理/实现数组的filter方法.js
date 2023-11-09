let arr = [1,2,3]
Array.prototype.myFilter = function(fn) {
  if (typeof fn !== 'function') {
    throw Error('参数必须是一个函数')
  }
  let res = []
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i])
  }
  return res
}

console.log(arr.myFilter(n => n > 1)); // [ 2, 3 ]
