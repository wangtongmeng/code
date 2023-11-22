(function () {
  'use strict';

  // 类：类的组成：构造函数、属性(实例属性、原型属性、静态属性)、方法(实例方法、原型方法、静态方法)、访问器(getter、setter)、静态相关的配置
  // 类的修饰符
  // public 公开属性，类的实例外部/类的内部/继承的子类都可以访问属性
  // protected(自己和儿子能访问，外部无法访问)
  // private (私有的，自己能访问)
  class Animal {
      constructor(name) {
          this.name = name;
          // this.name = name // 加了 public后 这里不用写了
      }
  }
  class Cat extends Animal {
      constructor(name, age) {
          super(name); // Animal.call(this)
          this.age = age;
          // this.age = age
      }
  }
  new Cat('tom', 12);

})();
//# sourceMappingURL=bundle.js.map
