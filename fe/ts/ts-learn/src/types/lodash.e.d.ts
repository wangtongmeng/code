import _ = require("./lodash");

// 在第三方模块的基础上扩展属性，直接定义类型
declare module "./lodash" {
  function withIn(): void;
}
