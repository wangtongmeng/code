function create(obj) {
  // 将传入的对象作为原型
  function fn(){}
  fn.prototype = obj
  return new fn()
}