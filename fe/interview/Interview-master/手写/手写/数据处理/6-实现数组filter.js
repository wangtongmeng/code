Array.prototype.myFilter = function (fn) {
  if (typeof fn !== "function") throw new Error("fn 必须是function");

  const res = [];
  this.forEach((item) => {
    if (fn(item)) {
      res.push(item);
    }
  });

  return res;
};

const arr = [1, 2, 3, 4, 5];
const newArr = arr.myFilter((item) => item % 2 === 0);
console.log(newArr);
