Object.create = function(obj) {
  // 将传入的对象作为原型
  function Fn(){}
  Fn.prototype = obj
  return new Fn()
}
