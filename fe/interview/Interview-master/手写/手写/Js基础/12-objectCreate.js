// Object.create() 静态方法以一个现有对象作为原型，创建一个新对象。
// let a = Object.create(A) 即a.__proto__ = A
// 相当于a的父构造函数.prototype = A

function myCreate(Origin) {
  function Father() {}
  Father.prototype = A;

  return new Father();
}

// 1. var a = Object.create(A);
// 2. 即实现 a.__proto__ = A;
// 3. a.__proto__ = a的父构造函数的prototype
