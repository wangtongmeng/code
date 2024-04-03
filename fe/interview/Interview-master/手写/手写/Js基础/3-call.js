// function test() {}, test.call(); 那么call方法里的this就是test。
// 1.把调用call的函数拿到，也就是this, 存到目标对象上
// 2.执行一下目标对象上的这个函数，删除目标对象上的这个值，返回结果

Function.prototype.myCall = function (target, ...args) {
  // 将函数本身作为属性添加到上下文对象中
  target = target || window;
  target.fn = this;

  // 调用函数并传递参数
  let res = target.fn(...args);
  delete target.fn; // 删除临时添加的函数属性
  return res;
};

// 使用
function show(...args) {
  console.log(args);
  console.log(this.name);
}
const newContext = { name: "myCall" };
show.myCall(newContext, "first", "second", "third");
