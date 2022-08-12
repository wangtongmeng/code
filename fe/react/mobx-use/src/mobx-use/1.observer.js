import { observable, reaction } from "mobx";
let obj = { name: 1 };
let proxyObj = observable(obj);
console.log(proxyObj);
