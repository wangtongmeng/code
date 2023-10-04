// 实现柯理化函数
function curry(fn, ...args) {
  return args.length < fn.length ? (...innerArgs) => curry(fn, ...args, ...innerArgs) : fn(...args)
}

//函数的length属性代表函数形参的个数
function addFn(a,b,c,d,e) {
  return a+b+c+d+e
}
const add = curry(addFn)
console.log(add(1, 2, 3, 4, 5));//15
console.log(add(1)(2)(3)(4)(5));//15
console.log(add(1, 2)(3, 4, 5));//15