// 柯里化（Currying）是一种将接受多个参数的函数转换为一系列接受单个参数的函数的技术。这种转换允许我们部分应用函数的参数，并将其返回为一个新的函数。

// 这个好懂一点;
// function curry(fn, args) {
//   var length = fn.length;
//   var args = args || [];
//   return function () {
//     newArgs = args.concat([...arguments]);
//     if (newArgs.length < length) {
//       return curry.call(this, fn, newArgs);
//     } else {
//       return fn.apply(this, newArgs);
//     }
//   };
// }

function curry(fn, ...args) {
  console.log(args);
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

// test ==========>
function multiFn(a, b, c) {
  console.log(a * b * c);
  return a * b * c;
}

var multi = curry(multiFn);
// multi(2)(3)(4);
multi(2, 3, 4, 5);
// multi(2)(3, 4);
// multi(2, 3)(4);
