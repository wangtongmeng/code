import { when, makeAutoObservable } from "mobx";

class MyResource {
  isVisible;
  constructor() {
    this.isVisible = true
    makeAutoObservable(this, { dispose: false });
    when(
      // Once...
      () => !this.isVisible,
      // ... then.
      () => this.dispose()
    );
  }

  close() {
    this.isVisible = false
  }

  dispose() {
    // 清理一些资源.
    console.log('清理资源')
  }
}

const source = new MyResource()
source.close();
// 一旦 isVisible 变成 false，dispose 方法将会被调用， 并对 MyResource 做一些清理操作。


// 如果你没有提供 effect 函数，when 将会返回一个 Promise。这样会跟 async / await 很好地结合在一起，让你可以等待可观察对象中的变化。