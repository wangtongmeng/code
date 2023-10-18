// 手写深度比较，如 lodash isEqual

const obj1 = {a: 10, b: { x: 100, y: 200 }}
const obj2 = {a: 10, b: { x: 100, y: 200 }}

// 判断是否是 object
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
// 全相等
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
      // 值类型，不是对象或数组（注意，equal 时一般不会有函数，这里忽略）
      return obj1 === obj2
  }
  if (obj1 === obj2) {
      // 两个引用类型全相等（同一个地址）
      return true
  }
  // 两个都是引用类型，不全相等
  // 1. 先取出 obje2 obj2 的 keys，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
      // keys 个数不相等，则不是全等
      return false
  }
  // 2. 以 obj1 为基准，和 obj2 依次递归比较
  for (let key in obj1) {
      // 递归比较
      const res = isEqual(obj1[key], obj2[key])
      if (!res) {
          // 遇到一个不相等的，则直接返回 false
          return false
      }
  }
  // 3. 都相等，则返回 true
  return true
}

console.log(isEqual(obj1, obj2) === true); // true