function myInstanceOf(left, right) {
  if (left === null) return false; // null undefined
  const type = typeof left;
  if (type !== "object" && type !== "function") {
    return false; // 值类型
  }
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceOf(function fn1() {}, Object)); // true
console.log(myInstanceOf(function fn1() {}, Array)); // false
console.log(myInstanceOf("abc", String)); // false
