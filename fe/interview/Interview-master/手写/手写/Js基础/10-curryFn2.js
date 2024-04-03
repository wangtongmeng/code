// 参数不固定版本

function add(...args) {
  //求和
  return args.reduce((a, b) => a + b, 0);
}

function currying(fn) {
  let args = [];
  return function curryFn(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];

      return curryFn;
    } else {
      // 没有参数时说明直接执行
      let val = fn.apply(this, args);
      args = [];
      return val;
    }
  };
}

let addCurry = currying(add);
console.log(addCurry(1)(2)(3)(4, 5)()); //15
console.log(addCurry(1)(2)(3, 4, 5)()); //15
console.log(addCurry(1)(2, 3, 4, 5)()); //15

function curry(fn) {
  return 
}
