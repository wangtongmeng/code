import { observable, autorun } from "mobx";
let obj = { name: "1" };
let proxyObj = observable(obj);
autorun(() => {
  console.log(proxyObj.name); // 立即执行一次
});
proxyObj.name = "2"; // 响应属性值变化触发函数调用

/**
 * 1
 * 2
 */
