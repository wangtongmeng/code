Function.prototype.myApply = function (context, args) {
  function getContext(context) {
    context = context || window
    const type = typeof context
    if (['number', 'string', 'boolean', null].includes(type)) {
      context = new context.constructor(context)
    }
    return context
  }

  context = getContext(context)
  context_.fn = this
  const result = context._fn(...args)
  delete context._fn
  return result
}

function test(c,d) {
  return this.a+this.b+c+d
}
const obj = {a:1,b:2}
console.log(test.apply(obj, [3,4])); // 10