// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6
// & 按位与
console.log(2 & 1, 0b10 & 0b01); // 0
// | 按位或
console.log(2 | 1, 0b10 | 0b01); // 3
// ^ 按位异或， 在 a,b 的位表示中，每一个对应的位，两个不相同则返回 1，相同则返回 0.
console.log(2 ^ 1); // 3



const STYLE = 1
const CLASS = 1 << 1
const CHILDREN = 1 << 2

// 授权 |
let vnodeType = STYLE | CLASS
// 判断 &
console.log('vonode是否包含style', Boolean(vnodeType & STYLE)); // 1 true
console.log('vonode是否包含class', Boolean(vnodeType & CLASS)); // 2 true 
console.log('vonode是否包含CHILDREN', !!(vnodeType & CHILDREN)); // 0 false
// 只要不是0，就是授权的

// 删除授权
vnodeType = vnodeType^CLASS

console.log('vonode是否包含style', Boolean(vnodeType & STYLE)); // true
console.log('vonode是否包含class', Boolean(vnodeType & CLASS)); // false 
console.log('vonode是否包含CHILDREN', !!(vnodeType & CHILDREN)); // false