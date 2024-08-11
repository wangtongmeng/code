// target 指编译后的语法
// module 指编译后的模块规范

/**
 * 模块规范
 * esModule es6 规范 import export
 * umd 模块 统一规范 支持 commonjs 和 amd
 * commonjs node 使用 require module.exports
 * amd requirejs来使用 define([],function(){})
 * iife 立即执行函数 var name = (function(){})()
 */

// 1. es6 模块，需要转换成不同的模块方式 commonjs规范，amd规范
// umd: 支持直接转化
// import a from "./module/a";
// console.log(a);

// 2.如何使用 commonjs 需要安装  pnpm i --save-dev @types/node
// commonjs 规范可以转换成 amd
// require("./module/a");
// console.log(a);
// 把当前模块打包成commonjs规范
// tsconfig.js 设置 "module": "CommonJS",
// npx tsc src/16.外部模块.ts

// 3. ts 为了能做到 commonjs 和 amd 的互转，自己发明了一种写法(export = / import =)
// tsconfig.ts 设置 "module": "CommonJS", 或者 "module": "AMD", 都是可以的
// 支持关联文件一起编译打包
// 打包成 commonjs
//    tsconfig.ts "module": "CommonJS",
//    npx tsc src/16.外部模块.ts
// 打包成 amd
//    tsconfig.ts "module": "CommonJS",   "files": ["./src/16.外部模块.ts"]
//    npx tsc
// import a = require("./module/a");
// console.log(a);

// 4.我们基本上用不到 export = 和 import =，我们可以直接采用 es6module，既能支持commonjs又能支持amd
// import a from "./module/a";

// 5. 最终编写的代码，我们需要将转换成js来使用，需要给打包后的结果添加类型
// .d.ts
// 5.1 打包后生产js，可以开启配置中自动生成类型文件（前提是项目是ts编写的） tsconfig.ts "declaration": true,
// 5.2 我们使用一个js包，没有 ts 的类型，需要自己编写，也可以安装 npm i --save-dev @types/jquery
//       pnpm i jquery
// import query from "jquery";
// 5.3 通过 cdn外链了一个js库，也需要声明文件
// 5.4 扩展全局属性时，也需要写声明文件
// String.prototype.my = function () {}
// 5.5 特殊文件的处理也需要声明文件 jpg

// declare 用于声明类型(全局声明)
//  一般所有的声明文件 不会单独放在业务代码中，一般都抽离到 .d.ts 中
//  新建文件env.d.ts
//  declare const a: number;
//  设置 tsconfig.ts {compilerOptions: {"types": ["./src/env.d.ts"]} } 也可以配置，默认会查找
console.log(a);

// 1. 通过 cdn 的方式引入的全局变量，可以自己写类型支持
$(".ele").height(30).width(30);
$.ajax("/url", {});
$.fn.extend({});
import mitt, { Type, Listener } from "mitt";
const fn: Listener = function () {};
mitt.on("data", fn);
mitt.off("data", function () {});
mitt.emit("data", function () {});

// pnpm i vue
// 从模块导入一个值，这个值我希望有类型
import comp from "a.vue";
console.log(comp); // DefineComponent

import jpg from "a.jpg"; // string
import css from "a.css"; // string

// 1. 写到d.ts声明文件中。2.通过declare global 来写(不推荐)
// declare global {
//   interface String {
//     my(prefix: string): this;
//   }
// }

String.prototype.my = function (prefix: string) {
  return prefix + this;
};

window.store;

export {};
