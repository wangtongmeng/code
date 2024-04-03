// apply和call的区别是，apply第二个参数必须是数组

Function.prototype.myApply = function (target, args) {
  if (args && !Array.isArray(args)) throw "只接受数组参数";
  target = target || window;

  target.fn = this;

  let res = target.fn(...args);

  delete target.fn;
  return res;
};

// test ==============>
function show(args) {
  console.log(args);
  console.log(this.name);
}
const newContext = { name: "myCall" };
show.myApply(newContext, ["first", "second", "third"]);
