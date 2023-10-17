// 实现深拷贝

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
      city: 'beijing'
  },
  arr: ['a', 'b',  {d:1}]
}

function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

console.log(deepClone(obj1));