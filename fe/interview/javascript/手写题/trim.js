// 手写 trim 函数，保证浏览器兼容性
String.prototype.trim = function () {
  // 知识点：原型，this，正则
  this.replace(/^\s+/, "").replace(/\s+$/, "")
}