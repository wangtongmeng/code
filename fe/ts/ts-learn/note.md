类型的分类：基础类型、高级类型、内置类型、自定义类型

vscode 插件：Error Lens

ts的特点，如何来学习？
- ts的目的是什么？从安全角度考虑使用（在赋值时是否会发生错误）error lens
- ts是用来检测类型的，只是提示作用，不是在运行时发生的（运行时和ts无关）
- 编译ts后，类型就消失了，不存在类型了，最终生产环境下，可以增添 .d.ts 来对 js 文件增加类型声明

## 模块
通过 `export {}` 来使ts文件是一个独立的模块
```
let name: string = 'hello' // 和 window.name重合，通过export {} 让ts识别是模块内的变量
export {}
```