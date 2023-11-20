function instanceOf(obj, fn) {
  let prototype = fn.prototype
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === prototype) {
      return true
    } else {
      proto = Object.getPrototypeOf(proto)
    }
  }
}