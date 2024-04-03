Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};

const arr = [1, 2, 3];
arr.myPush(4);
console.log(arr);
