import { when, makeAutoObservable } from "mobx";

class MyResource {
  isVisible;
  constructor() {
    this.isVisible = true
    makeAutoObservable(this, { dispose: false });
  }

  close() {
    this.isVisible = false
  }

  dispose() {
    // 清理一些资源.
    console.log('清理资源')
  }
}

const source = new MyResource();

async function test() {
  const p = when(() => !source.isVisible) // 如果没有effect函数 when返回值是Promise 可以调用cancel()取消
  console.log('p', p)
  await p
  console.log('await')
};
test();

setTimeout(() => {
  source.close();
  console.log('close')
}, 1000)


// 一秒之后
// close
// await