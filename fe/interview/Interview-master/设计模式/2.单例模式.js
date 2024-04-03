// 单例模式的定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 应用：线程池、全局缓存，浏览器中的window对象等

class Singleton {
  constructor() {
    if (typeof Singleton.instance === "object") {
      // 这个保证了只有一个实例，后面再new也会返回已存在的instance
      return Singleton.instance;
    }
    // 单例实例化的逻辑
    Singleton.instance = this;
    return this;
  }

  // 公共方法
  method1() {
    // 方法实现
  }
  // ...
}

// 使用方式
const singleton = new Singleton();
