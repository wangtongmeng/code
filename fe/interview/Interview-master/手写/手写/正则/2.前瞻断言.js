// 前瞻断言 ?= 和 ?! 两种相反的情况

let str = "a123b1c1d1";
const newStr = str.replace(/[a-z](?=\d{3})/g, "￥");
console.log(newStr);
