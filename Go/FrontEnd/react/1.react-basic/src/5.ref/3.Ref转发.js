/* 
你不能在函数组件上使用 ref 属性，因为他们没有实例
Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧
Ref 转发允许某些组件接收 ref，并将其向下传递给子组件
*/

import React from 'react'
import ReactDOM from 'react-dom'

const TextInput = React.forwardRef((props, ref) => {
    return <input ref={ref} />
})

class Form extends React.Component {
    input
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    getFocus = () => {
        console.log(this.input.current); // <input> 元素
        this.input.current.focus()
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

ReactDOM.render(<Form />, document.getElementById('root'))