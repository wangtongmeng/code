String.prototype.trim = function () {
  // 知识点：原型，this，正则
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};

let str = " sdfsf ";
console.log("1" + str.myTrim() + "2"); // 1sdfsf2
