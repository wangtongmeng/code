Function.prototype.myCall = function (context, ...args) {
  function getContext(context) {
    context = context || window;
    let type = typeof context;
    if (["number", "string", "boolean", null].includes(type)) {
      context = new type.constructor(context);
    }
    return context;
  }

  context = getContext(context);
  context._fn = this;
  const result = context._fn(...args);
  delete context._fn;
  return result;
};

Function.prototype.myBind = function (context, ...bindArgs) {
  return (...args) => this.myCall(context, ...bindArgs, ...args);
};



function test() {
  return this.a + this.b;
}


let obj = { a: 1, b: 2 };
let fun = test.bind(obj)
console.log(fun()); // 3