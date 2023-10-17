// 继承

// 父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat sth`);
  }
}
// 子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi(){
    console.log(`姓名：${this.name} 学号：${this.number}`);
  }
}

const stu1 = new Student('zhangsan', 18)
console.log(stu1.name, stu1.sayHi(), stu1.eat());
// 姓名：zhangsan 学号：18
// zhangsan eat sth
// zhangsan