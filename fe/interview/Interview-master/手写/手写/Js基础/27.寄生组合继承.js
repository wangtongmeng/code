function Father(...arr) {
  this.some = "父类属性";
  this.params = arr;
}
Father.prototype.someFn = function () {
  console.log(1);
};
Father.prototype.someValue = "2";

function Son(...arr) {
  Father.call(this, ...arr);
  this.name = "son";
}

// 想让Son.prototype__proto__=Father.prototype;
function inheritPro(son, father) {
  // 原型式继承
  var fatherPrototype = Object.create(father.prototype);
  // 设置Son.prototype的原型是Father.prototype
  son.prototype = fatherPrototype;
  // 修正constructor 指向
  // constructor的作用：返回创建实例对象的Object构造函数的引用。
  // 在这里保持constructor指向的一致性
  son.prototype.constructor = son;
}
inheritPro(Son, Father);
var sonInstance = new Son();




// ===========
// 原型链知识
sonInstance.__proto__ === Son.prototype;
Son.prototype.__proto__ === Father.Prototype;
Son.prototype.constructor === Son;
sonInstance.constructor = Son;

// Object.create
let a = Object.create(A) 即a.__proto__ = A
