// 取消autorun监听
import { observable, autorun } from "mobx";
const counter = observable({ count: 0 });

// 初始化一个 autorun 并且打印 0.
const disposer = autorun(() => {
  console.log(counter.count);
});

// 打印: 1
counter.count++;

// 停止 autorun.
disposer();

// 不会打印消息.
counter.count++;

// 一旦不再需要这些方法中的副作用时，请务必调用它们所返回的 disposer 函数。 否则可能导致内存泄漏。
