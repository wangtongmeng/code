/* 
React v16增加了对Portal的直接支持
它可以把JSX渲染到一个单独的DOM节点中
*/
import React from 'react'
import ReactDOM from 'react-dom'
class Dialog extends React.Component {
    constructor(props){
        super(props)
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
    }
    render(){
        return ReactDOM.createPortal(
            <div className="dialog">
                {this.props.children}
            </div>,
            this.node
        )
    }
    componentWillUnmount(){
        window.document.body.removeChild(this.node)
    }
}
class App extends React.Component {
    render(){
        return (
            <div>
                <Dialog>模态窗</Dialog>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))