// 1、创建一个空对象 obj;
// 2、将空对象的隐式原型（proto）指向构造函数的prototype。
// 3、使用 call 改变 this 的指向, 指向空对象，为实例添加方法和属性
// 4、如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。

function myNew(ctor, ...args) {
  const obj = {};
  obj.__proto__ = ctor.prototype;
  // 上面这两步可以用一步完成，const obj = Object.create(ctor.prototype);

  const res = ctor.apply(obj, args);
  return typeof res === "object" ? res : obj;
}

// test ========>

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const bmw = myNew(Car, "bmw", "m4", "2023");
console.log(bmw);
console.log(bmw instanceof Car);
