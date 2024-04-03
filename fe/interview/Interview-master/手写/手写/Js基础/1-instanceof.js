// 题目解释
// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// a instaceof A，A是不是a的父构造函数或祖先构造函数
// A.prototye是否在a的原型链上

// 相关联系, 那个三角形图
// auto.__proto__ === Car.prototype;
// Car.prototype.constructor === Car;

function myInstanceof(instance, origin) {
  while (instance) {
    if (instance.__proto__ === origin.prototype) return true;

    instance = instance.__proto__;
  }
  return false;
}

// test==========>

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
console.log(auto instanceof Object);

console.log(myInstanceof(auto, Car));
console.log(myInstanceof(auto, Object));
