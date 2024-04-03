// 代理模式（Proxy Pattern）是一种结构设计模式，用于在访问对象时引入中间层（代理），以控制对目标对象的访问。
// 代理模式可以提供额外的功能、控制对象的访问权限，或者延迟对象的创建和加载。

// 目标对象
class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

// 代理对象
class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
    } else {
      console.log("ProxySubject: Access denied.");
    }
  }

  checkAccess() {
    // 检查访问权限的逻辑
    return true;
  }
}

// 使用方式
const realSubject = new RealSubject();
const proxySubject = new ProxySubject(realSubject);

proxySubject.request();
