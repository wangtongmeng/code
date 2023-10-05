// 实现Object.Assign

function assign(target, ...sources) {
  if (target == null) {
    return
  }
  let ret = Object(target)
  sources.forEach(obj => {
    if (typeof obj === 'object' && obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key]
        }
      }
    }
  })
  return ret
}


console.log(assign(1, {a:1,b:2})); // [Number: 1] { a: 1, b: 2 }
console.log(assign({}, {a:1,b:2})); // { a: 1, b: 2 }
console.log(assign({}, {a:1,b:2}, {c:3})); // { a: 1, b: 2, c: 3 }
