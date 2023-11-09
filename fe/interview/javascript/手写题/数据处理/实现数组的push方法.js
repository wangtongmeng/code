let arr = []
Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}

// console.log(arr.push(1)); // 1 
// console.log(arr.push(2,3)); //3 push返回数组的长度
console.log(arr.myPush(1));
console.log(arr.myPush(2,3));