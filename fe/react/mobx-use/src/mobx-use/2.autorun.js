import { observable, autorun } from "mobx";
let obj = { name: "1" };
let proxyObj = observable(obj);
autorun(() => {
  console.log(proxyObj.name);
});
proxyObj.name = "2";

/**
 * 1
 * 2
 */
