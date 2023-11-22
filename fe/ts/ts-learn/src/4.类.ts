// 类：类的组成：构造函数、属性(实例属性、原型属性、静态属性)、方法(实例方法、原型方法、静态方法)、访问器(getter、setter)、静态相关的配置

class Circle {
  // 给类声明属性
  public x: number;
  public y: number;
  public fn: () => void;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.fn = () => {};
  }
}
new Circle(100, 100);
// 类的修饰符
// public 公开属性，类的实例外部/类的内部/继承的子类都可以访问属性
// protected(自己和儿子能访问，外部无法访问)
// private (私有的，自己能访问)
// readonly 标识仅读属性，意味着如果初始化后，不能修改

class Animal {
  // constructor(public readonly name: string) { // 等价于声明了属性的类型, 给属性添加了public
  constructor(public name: string) {
    // 等价于声明了属性的类型, 给属性添加了public
    // this.name = name // 加了 public后 这里不用写了
    // this.name = 'name' // 添加 readonly 初始化期间可以修改
  }
  // 原型方法，每一个实例共享的方法，父类提供的方法，子类是可以进行方法重写的
  changeName(value: string) {
      this.name = value
  }
}
// super 在构造函数中，指向的是父类，在原型的方法中调用指向的是父类的原型
class Cat extends Animal {
  constructor(name: string, public age: number) {
    super(name); // Animal.call(this)
    // this.age = age
  }
  // 子类在重写父类方法时，要兼容
  changeName(value: string) {
    super.changeName(value)
  }
}
const tom = new Cat("tom", 12);
tom.changeName('jerry')
export {};
