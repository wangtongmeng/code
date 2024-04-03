// Function.prototype.myBind = function (target, ...args) {
//   return () => {
//     target = target || window;
//     target.fn = this;
//     target.fn(...args);
//     delete target.fn;
//   };
// };

Function.prototype.myBind = function (context, ...args) {
  const fn = this; // 原始函数
  return function (...innerArgs) {
    if (this instanceof fn) {
      // 如果绑定函数作为构造函数调用，则使用 new 绑定的 this
      return new fn(...args, ...innerArgs);
    } else {
      // 否则使用显式绑定的 this
      return fn.apply(context, [...args, ...innerArgs]);
    }
  };
};

// test ======================>

// 使用
function show(...args) {
  console.log(args);
  console.log(this.name);
}
const newContext = { name: "myCall" };
const newShow = show.myBind(newContext, "first", "second", "third");
newShow();
