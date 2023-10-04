// 手写判断类型函数
function getType(value) {
  const result = Object.prototype.toString.call(value)
  console.log(result.slice(8, -1).toLowerCase());
}

getType('str') // string
getType(true) // boolean
getType(1) // number
getType(Symbol()) // symbol
getType(undefined) // undefined
getType(null) // null