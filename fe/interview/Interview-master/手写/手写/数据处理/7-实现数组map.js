Array.prototype.myMap = function (fn) {
  if (typeof fn !== "function") throw new Error("参数应当是函数");

  const res = [];
  for (let i = 0; i < this.length; i++) {
    const newItem = fn(item);
    res.push(newItem);
  }
  return res;
};
