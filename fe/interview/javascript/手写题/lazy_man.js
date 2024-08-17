class LazyMan {
  name;
  tasks = [];
  constructor(name) {
    this.name = name;

    // 等任务都加入队列后再执行第一个
    setTimeout(() => {
      this.next();
    });
  }
  next() {
    // 取出当前 tasks 的第一个任务
    const task = this.tasks.shift();
    if (task) task();
  }
  eat(food) {
    debugger;
    const task = () => {
      console.log(`${this.name} eat ${food}`);
      this.next(); // 立即执行下一个任务
    };
    this.tasks.push(task);
    return this; // 链式调用
  }
  sleep(seconds) {
    const task = () => {
      console.log(`${this.name} 开始睡觉`);
      setTimeout(() => {
        console.log(`${this.name} 已经睡完了 ${seconds}，开始执行下一个任务`);
        this.next(); // seconds 秒后执行下一个任务
      }, seconds * 1000);
    };
    this.tasks.push(task);
    return this; // 链式调用
  }
}

const me = new LazyMan("lisi");
me.eat("苹果")
  .eat("香蕉")
  .sleep(2)
  .eat("葡萄")
  .eat("西瓜")
  .sleep(2)
  .eat("橘子");
