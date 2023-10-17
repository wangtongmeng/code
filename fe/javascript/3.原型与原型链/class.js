// 类
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log(`姓名：${this.name}，学号${this.age}`);
  }
}

// 创建实例
const stu1 = new Student('zhangsan', 18)
console.log(stu1.name, stu1.sayHi());