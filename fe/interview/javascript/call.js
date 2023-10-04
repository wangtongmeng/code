Function.prototype.myCall = function (context, ...args) {
  // 判断调用对象
  if (typeof this !== 'function') {
    console.error('type error')
  }
  context = context || window
  let result = null
  // 通过对象调用方法，fn中this指向调用对象context
  context.fn = this
  result = context.fn(...args)
  delete context.fn
  return result
}