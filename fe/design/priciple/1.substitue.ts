class Person {
  constructor() {
  }
  buy() {

  }
}

class Man extends Person {
   gender: string;
   name: string;
  constructor(gender: string, name: string) {
    super();
    this.gender = gender;
    this.name = name;
  }
  buy() {
    console.log('买ipad');
    
  }
}

class Women extends Person {
  gender: string;
  name: string;
  constructor(gender: string, name: string) {
    super();
    this.gender = gender;
    this.name = name;
  }
  buy() {
    console.log('买包');
    
  }
}

let p = new Person();
let man = new Man('男', 'zhansan');
let women = new Women('女', 'lisi');
p.buy();
man.buy();
women.buy();


let zhansan = {
  // marrry(p: Women) {
  marrry(p: Person) {
    console.log(`张三和${p.name}`);
    
  }
}

// zhansan.marrry(new Women('女', '范冰冰'))
zhansan.marrry(new Man('男', '里斯'))
