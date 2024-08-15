// const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
//  })

//  const scheduler = new Scheduler()
//  const addTask = (time, order) => {
//   scheduler.add(() =>timeout(time))
//   .then(() =>console.log(order))
//  }
//  // 限制同一时刻只能执行2个task
//  addTask(2000, '1')
//  addTask(6000, '2')
//  addTask(3000, '3')
//  addTask(8000, '4')
//  //实现一个 scheduler.add方法，模拟一个异步串行队列，最大并发数是2
//  //2秒后打印1
//  //5秒打印3
//  //6秒打印2
//  //13秒打印4

class Scheduler {
  constructor() {
    this.queue = []; // 任务队列
    this.activeCount = 0; // 当前活跃的任务数
    this.maxConcurrency = 2; // 最大并发数
  }

  // 添加任务到调度器
  add(promiseCreator) {
    return new Promise((resolve) => {
      // 封装任务
      const task = () => {
        // 执行任务，并在完成后减少活跃任务数并处理下一个任务
        this.activeCount++;
        return promiseCreator().finally(() => {
          this.activeCount--;
          this.next();
        });
      };

      // 将任务加入队列
      this.queue.push(task);
      // 尝试执行队列中的任务
      this.next();
      resolve();
    });
  }

  // 执行队列中的下一个任务
  next() {
    if (this.activeCount < this.maxConcurrency && this.queue.length) {
      const task = this.queue.shift();
      task();
    }
  }
}

// 使用 Scheduler
const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(2000, "1");
addTask(6000, "2");
addTask(3000, "3");
addTask(8000, "4");
