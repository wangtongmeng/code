// 函数调用堆栈
// vscode中 按 f5调试
const func1 = () => {
  func2();
};
const func2 = () => {
  func3();
};
const func3 = () => {};

func1();
