// 原始对象
function Component() {
  this.operation = function () {
    // 原始操作的实现
  };
}

// 装饰器函数
function Decorator(component) {
  this.component = component;

  this.operation = function () {
    // 在原始操作之前或之后执行附加操作
    // ...

    // 调用原始对象的操作
    this.component.operation();

    // 在原始操作之前或之后执行附加操作
    // ...
  };
}

// 使用方式
const component = new Component();
const decoratedComponent = new Decorator(component);
decoratedComponent.operation();
