/* 
当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性
*/

import React from 'react'
import ReactDOM from 'react-dom'
class Form extends React.Component {
    input
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    getFocus = () => {
        this.input.current.getFocus()
    }
    render() {
        return (
            <>
                <TextInput ref={this.input} />
                <button onClick={this.getFocus}>获取焦点</button>
            </>
        )
    }
}

class TextInput extends React.Component {
    input
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    getFocus = () => {
        this.input.current.focus()
    }
    render() {
        return <input ref={this.input} />
    }
}
ReactDOM.render(<Form />, document.getElementById('root'))