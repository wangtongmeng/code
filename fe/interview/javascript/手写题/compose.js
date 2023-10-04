const add1 = (str) => "1" + str;
const add2 = (str) => "2" + str;
const add3 = (str) => "3" + str;
// function compose(...funcs) {
//   // 返回一个函数，接收具体值
//   return function (args) {
//     // [add3,add2,add1] 倒着执行，并将结果作为下个一函数的入参
//     for (let i = funcs.length - 1; i >= 0; i--) {
//       args = funcs[i](args);
//     }
//     return args;
//   };
// }

function compose(...funcs) {
  // reduce没有设默认值，所以a,b是前两个函数
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

/**
 *第一次 a=add3 b=add2 => (...args)=>add3(add2(...args))
 *第二次 a=(...args)=>add3(add2(...args)) b=add1 => (...args)=>add3(add2((add1(...args)))))
 */

let fn = compose(add3, add2, add1);
console.log(fn("lisi")); // 321lisi
