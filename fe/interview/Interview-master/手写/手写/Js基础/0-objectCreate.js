// Object.create() 静态方法以一个现有对象作为原型，创建一个新对象。
//const me = Object.create(person);
// me.__proto__ === person; // true
// __proto__等于其构造函数的prototype

function myCreate(origin) {
  function F() {}
  F.prototype = origin;
  return new F();
}

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.__proto__ === person; // true

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
