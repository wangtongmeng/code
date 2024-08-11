/// <reference path="./lodash.e.d.ts" />
// 三斜线指令 可以用引用其他的声明文件

declare namespace _ {
  function copy(): void;
}

export as namespace _; // 将这个命名空间变成全局的不需要导入即可使用 例如 _.copy()
export = _; // 为了用户可以导入 例如 import _ from 'lodash'
