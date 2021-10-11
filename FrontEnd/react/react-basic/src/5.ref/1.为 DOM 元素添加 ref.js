/* 
可以使用 ref 去存储 DOM 节点的引用
当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性
*/
import React from 'react'
import ReactDOM from 'react-dom'
class Sum extends React.Component {
    a
    b
    result
    constructor(props) {
        super(props)
        this.a = React.createRef()
        this.b = React.createRef()
        this.result = React.createRef()
    }
    handleAdd = () => {
        let a = this.a.current.value
        let b = this.b.current.value
        this.result.current.value = a + b
    }
    render() {
        return (
            <>
                <input ref={this.a} />+<input ref={this.b} /><button onClick={this.handleAdd}>=</button><input ref={this.result} />
            </>
        )
    }
}
ReactDOM.render(
    <Sum />,
    document.getElementById('root')
)