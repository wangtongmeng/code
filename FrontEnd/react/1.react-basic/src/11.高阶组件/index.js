/* 
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件
高阶组件的作用其实就是为了组件之间的代码复用

const NewComponent = higherOrderComponent(OldComponent)

cra支持装饰器
npm i react-app-rewired customize-cra @babel/plugin-proposal-decorators -D

修改package.json
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-app-rewired eject"
}

config-overrides.js
const {override,addBabelPlugin} = require('customize-cra');

module.exports = override(
  addBabelPlugin( [
    "@babel/plugin-proposal-decorators", { "legacy": true }
  ])
)

jsconfig.json
{
  "compilerOptions": {
     "experimentalDecorators": true
  }
}
*/




// import './1.属性代理'
import './2.反向继承'


