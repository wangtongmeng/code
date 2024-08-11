// 使用第三方包，别人提供了类型文件时，可以直接安装
import $ from "jquery";
// 默认可以指定导入的模块的声明文件的路径
// 0.先查找自己是否定义过，没有向上查找 node_modules
// 1.默认找当前 node_modules 下的同名模块，看是否有此文件夹，有的话，找 package.json > types
// 2.如果没有 types 默认找这个模块下的 index.d.ts
// 3. 查找 node_modules 下的 @types 是否有同名模块，按照上述方式继续查找

// tsconfig中 paths 和 types 的区别
//   paths 指引用模块时，去哪里找
//   types 指哪些类型文件要包含进来
import _ from "lodash";
_.copy();

_.withIn();
// 三斜线指令可以通过 types 来引入其他的声明文件(第三方)
// 自己的用 paths 来引入

export {};
