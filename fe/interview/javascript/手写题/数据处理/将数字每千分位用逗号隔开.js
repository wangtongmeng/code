// 数字有小数
function format (n) {
  let num = n.toString() // 转成字符串
  let decimals = '' // 小数部分
  if (num.indexOf('.')) {
    [num, decimals] = num.split('.')
    if (decimals) {
      decimals = '.' + decimals
    }
  }
  let len = num.length // 整数部分
  if (len <= 3) {
    return num + decimals
  } else {
    let remain = len % 3
    if (remain) {
      // 不是3的倍数
      return num.slice(0, remain) + ',' + num.slice(remain).match(/\d{3}/g).join(',') + decimals
    } else {
      // 3的倍数
      return num.slice(remain).match(/\d{3}/g).join(',') + decimals
    }
  }
}

console.log(format(12345.213213)); // 12,345.213213

// 数字没小数
// function format (n) {
//   let num = n.toString()
//   let len = num.length
//   if (len <= 3) {
//     return num
//   } else {
//     let remain = len % 3
//     debugger
//     if (remain > 0) {
//       // 不是3的整数倍
//       return num.slice(0, remain) + ',' + num.slice(remain).match(/\d{3}/g).join(',')
//     } else {
//       // 3的倍数
//       return num.match(/\d{3}/g).join(',')
//     }
//   }
// }

// console.log(format(12312312)); // 12,312,312
