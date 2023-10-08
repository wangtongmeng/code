// function myNew(fn, ...args) {
//   if (typeof fn !== 'function') {
//     console.log('type error');
//     return;
//   }
//   // 创建一个空对象，对象的原型为构造函数的 prototype对象
//   const obj = Object.create(fn.prototype)
//   // 将 this 指向新建对象，并执行函数，给新对象赋值
//   const result = fn.apply(obj, args)
//   // 如果构造函数返回的是引用类型则直接返回，否则返回新对象
//   return (typeof result === 'object' && typeof result  !== 'null') ? result : obj
// }

function myNew(fn, ...args) {
  const _this = Object.create(fn.prototype)
  const result = fn.call(_this, ...args)
  if ((result !== null && typeof result === 'object') || typeof result === 'function') {
    return result
  }
  return _this
}

function fn1(a,b) {
  this.a=a
  this.b=b
}
const obj = myNew(fn1, 1, 2)



console.log(obj.__proto__ === fn1.prototype); // true