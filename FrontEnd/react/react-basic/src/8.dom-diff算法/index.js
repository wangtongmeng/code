/* 
只对同级节点进行对比，如果DOM节点跨层级移动，则React不会复用
不同类型的元素会产出不同的结构 ，会销毁老结构，创建新结构
可以通过key标识移动的元素
*/


import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ['A', 'B', 'C', 'D', 'E', 'F']
        }
    }
    handleClick = () => {
        this.setState({
            list: ['A', 'C', 'E', 'B', 'G']
        })
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.state.list.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
                <button onClick={this.handleClick}>更新</button>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))