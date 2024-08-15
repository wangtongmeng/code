class LazyMan {
  name;
  tasks = [];
  constructor(name) {
    this.name = name;

    setTimeout(() => {
      this.next(); // 同步任务都加入队列了，再执行第一个任务
    });
  }
  next() {
    const task = this.tasks.shift(); // 取出当前 tasks 的第一个任务
    if (task) task();
  }
  eat(food) {
    const task = () => {
      console.info(`${this.name} eat ${food}`);
      this.next(); // 立即执行下一个任务
    };
    this.tasks.push(task);

    return this; // 链式调用
  }
  sleep(seconds) {
    const task = () => {
      console.info(`${this.name} 开始睡觉`);
      setTimeout(() => {
        console.info(`${this.name} 已经睡完了 ${seconds}s，开始执行下一个任务`);
        this.next(); // xx 秒后再执行下一个任务
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
