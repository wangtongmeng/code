Function.prototype.myCall = function (context, ...args) {
 function getContext(context) {
  context = context || window
  let type = typeof context
  if (['number', 'string', 'boolean', null].includes(type)) {
    context = new type.constructor(context)
  }
  return context
 }

 context = getContext(context)
 context._fn = this
 const result = context._fn(...args)
 delete context._fn
 return result
}

function test() {
  return this.a + this.b
}

let obj = {a: 1, b: 2}
console.log(test.call(obj)); // 3