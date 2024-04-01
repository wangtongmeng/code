# wepback

参考 https://www.imooc.com/article/287156

【注意】webpack 功能非常强大，内容非常多，本节只讲一些最常见的应用

## 初始化

- `npm init -y`
- `npm i webpack webpack-cli -D`
- 新建 `src/index.js`，随便写点什么
- 新建 `webpack.config.js` 配置 `mode` `entry` `output`
- package.json 中增加 `"build": "webpack"`
- 运行 `npm run build`

## 启动服务

- `npm i html-webpack-plugin -D` ，并引用、配置插件
- 新建 `src/index.html`
- `npm i webpack-dev-server -D` ，并引用、配置
- package.json 中增减 `"dev": "webpack-dev-server"`
- 运行 `npm run dev`

## babel

ES6 编译为 ES5

- `npm i babel-loader @babel/core @babel/preset-env -D`
- 增加 babel-loader 配置
- 增加 `.babelrc` 文件
- 在 `src/index.js` 中增加一个箭头函数和 `class`，看打包结果

## 模块化

webpack4 默认支持 ES6 Module

```js
// 一个一个导出
export function fn() {
    console.log('fn')
}
export const name = 'b'
```

```js
// 一块导出
function fn() {
    console.log('fn')
}
const name = 'b'

export {  // 注意这里不能有 default ！！！
    fn,
    name
}
```

## 打包到生产环境

- 新建 `webpack.prod.js` ，注意 `mode: 'production'`
- 加上 `contentHash`
- 修改 package.json `"build": "webpack --config webpack.prod.js",`
- 运行 `npm run build` ，看打包出来的代码是被压缩过的
