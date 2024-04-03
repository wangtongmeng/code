# webpack4 demo

升级 webpack5 以及周边插件后，代码需要做出的调整：

- package.json 的 dev-server 命令改了 `"dev": "webpack serve --config build/webpack.dev.js",`
- 升级新版本 `const { merge } = require('webpack-merge')`
- 升级新版本  `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`
- `module.rules` 中 `loader: ['xxx-loader']` 换成 `use: ['xxx-loader']`
- `filename: 'bundle.[contenthash:8].js'` 其中 `h` 小写，不能大写

也可以直接下载讲师的 webpack5-demo 源码，把配置文件删掉，自己重写练习。

多入口，entry output plugin 都要改

处理 jsx vue
- https://www.babeljs.cn/docs/babel-preset-react
- https://www.npmjs.com/package/vue-loader