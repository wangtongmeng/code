Array.prototype.myReduce = function (fn, initValue) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + " is not a function");
  }

  let result = initValue || this[0];
  for (let i = 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }
  return result;
};

const arr = [1, 2, 3, 4];
const res = arr.myReduce((prev, cur) => prev + cur, 0);
console.log(res);
