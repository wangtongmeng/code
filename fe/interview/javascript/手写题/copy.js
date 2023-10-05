// 深浅拷贝

// 浅拷贝
function shadowCopy(obj) {
  // 如果不是引用类型，则直接返回
  if (typeof obj === 'object' && obj !== 'null') {
    return obj
  }
  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

console.log(shadowCopy({a:1,b:2})); // { a: 1, b: 2 }
console.log(shadowCopy([1,2])); // [ 1, 2 ]
console.log(shadowCopy(1)); // {}


// 深拷贝
// 1.JSON.stringify()
// 2.lodash的_.cloneDeep()

// 只考虑引用类型是对象或者数组的情况
function deepCopy(obj) {
  // 如果不是引用类型，则直接返回
  if (typeof obj === 'object' && obj !== null) {
    return obj
  }

  const newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' && obj[key] !== null ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

console.log(deepCopy({a:1,b:2})); // { a: 1, b: 2 }
console.log(deepCopy([1,2])); // [ 1, 2 ]
console.log(deepCopy({a:[1,2],b:2})); // { a: [ 1, 2 ], b: 2 }
console.log(deepCopy(1)); // {}