import React from './react';
import ReactDOM from './react-dom';
/**
 * 函数组件
 * 1.必须接收一个props对象，并返回一个React元素
 * 2.函数组件的名称必须是大写的开头 
 * 3.必须先定义再使用
 * 4.函数组件能且只能返回一个根节点 JSX 表达式必须具有一个父元素
 * 5.React元素不但可以是DOM标签字符串，也可以是函数
 */
function FunctionComponent(props) {
  return (
    <h1 className="title" style={{ color: 'red' }}>
      <span>{props.name}</span>
      <span>{props.children}</span>
    </h1>
  )
}
// let props = {name:'hello'}
//React元素可以是字符串表示原生组件
//也有可能是函数，表示函数组件
//let element = <FunctionComponent name="hello">world</FunctionComponent>
let element = React.createElement(FunctionComponent, { name: "hello" }, "world");
ReactDOM.render(
  element,
  document.getElementById('root')
);

/**
element React元素或者称为虚拟DOM
{
  $$typeof: Symbol(react.element)
  key: null 后面在DOM-DIFF的处理元素移动，提高DIFF性能
  ref: null 后面可以通过ref获取此虚拟DOM对应的真实DOM
  props: {className: 'title', style: {…}, children: 'hello'}
  type: "h1" 元素的类型 tagName
}
{
  $$typeof: Symbol(react.element)
  props: {className: 'title', style: {…}, children: 'hello'}
  type: "h1" 
}
 */