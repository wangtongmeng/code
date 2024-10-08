class EventBus {
  /**
   * {
   *    'key1': [
   *        { fn: fn1, isOnce: false },
   *        { fn: fn2, isOnce: false },
   *        { fn: fn3, isOnce: true },
   *    ]
   *    'key2': [] // 有序
   *    'key3': []
   * }
   */
  constructor() {
    this.events = {};
  }
  on(type, fn, isOnce = false) {
    const events = this.events;
    if (events[type] == null) {
      events[type] = [];
    }
    events[type].push({ fn, isOnce });
  }
  once(type, fn) {
    this.on(type, fn, true);
  }
  off(type, fn) {
    if (!fn) {
      // 解绑所有 type 的函数
      this.events[type] = [];
    } else {
      // 解绑单个 fn
      const fnList = this.events[type];
      if (fnList) {
        this.events[type] = fnList.filter((item) => item.fn !== fn);
      }
    }
  }
  emit(type, ...args) {
    const fnList = this.events[type];
    if (fnList == null) return;
    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item;
      fn(...args);
      // once 执行一次就要被过滤掉
      if (!isOnce) return true;
      return false;
    });
  }
}

const e = new EventBus();

function fn1(a, b) {
  console.log("fn1", a, b);
}
function fn2(a, b) {
  console.log("fn2", a, b);
}
function fn3(a, b) {
  console.log("fn3", a, b);
}

e.on("key1", fn1);
e.on("key1", fn2);
e.once("key1", fn3);
e.on("xxxxxx", fn3);

e.emit("key1", 10, 20); // 触发 fn1 fn2 fn3

e.off("key1", fn1);

e.emit("key1", 100, 200); // 触发 fn2
