// 默认 rollup 打包时会查找当前目录下 rollup.config.js 这个文件
// 采用 es 模块来编写配置文件(在 package.json中增加 "type": "module")

import ts from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { fileURLToPath } from 'url'

// es module格式下不支持直接使用__dirname，需要手动获取
// 当前文件的绝对路径 file://xxxx/xx/xx
const __filename = fileURLToPath(import.meta.url) // 当前文件的绝对路径
const __dirname = path.dirname(__filename) // 当前文件所在的文件夹目录 绝对路径

export default {
  input: './src/index.ts', // 项目入口
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife', // (function(){})() 打包格式
    sourcemap: true, // 打包后调试源代码
  },
  plugins: [
    nodeResolve({ extensions: ['.js', '.ts'] }), // 第三方包入口 入口文件可以是js或ts
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    })
  ]
}