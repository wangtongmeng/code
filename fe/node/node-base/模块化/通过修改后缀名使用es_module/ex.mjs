// node 中是不支持使用es module的形式的，通过修改后缀名为mjs可以实现
var username = 'zhagnsan'

// 1. 通过export/import 导出导入
// export {
//   username
// }

// // 2. export 导出别名
// export {
//   username as name
// }

// // 3. import 别名
// export {
//   username
// }

// 4. 默认导出/导入
export default username