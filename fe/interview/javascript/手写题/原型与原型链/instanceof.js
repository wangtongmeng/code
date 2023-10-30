function myInstanceOf(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype
  let prototype = right.prototype;

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while(true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto)
  }
}


console.log(myInstanceOf(function fn1(){}, Object)); // true
console.log(myInstanceOf(function fn1(){}, Array)); // false