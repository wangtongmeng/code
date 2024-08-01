function myInstanceOf(left, right) {
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
