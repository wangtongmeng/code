class Scheduler {
  tasks = [];
  runCount = 0;
  constructor(limit) {
    this.maxCount = limit;
  }
  add(time, data) {
    const task = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, time);
      });
    };
    this.tasks.push(task);
    this.next(); // 加入后尝试执行
  }
  next() {
    if (this.runCount < this.maxCount) {
      const task = this.tasks.shift();
      if (!task) return;
      this.runCount++;
      task()
        .then((v) => {
          this.runCount--;
          console.log(`执行任务成功 ${v}`);
          this.next();
        })
        .catch((err) => {
          this.runCount--;
          console.log(`执行任务失败 ${err}`);
          this.next();
        });
    }
  }
}

// 测试
const scheduler = new Scheduler(2);
const addTask = (time, data) => {
  scheduler.add(time, data);
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// 输出结果 2 3 1 4
