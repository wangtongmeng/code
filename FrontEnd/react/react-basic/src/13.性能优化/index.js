/* 
如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染

*/
import React from 'react'
import ReactDOM from 'react-dom'
class ClassCounter extends React.Component {
    render(){
        console.log('ClassCounter render');
        return <div>ClassCounter:{this.props.count}</div>
    }
}
function FunctionCounter (props) {
    console.log('FunctionCounter render');
    return <div>FunctionCounter:{props.count}</div>
}
const MemoFunctionCounter = React.memo(FunctionCounter)
class App extends React.Component {
    state = {number:0}
    amountRef = React.createRef()
    handleClick = () => {
        let nextNumber = this.state.number + parseInt(this.amountRef.current.value)
        this.setState({number: nextNumber})
    }
    render(){
        return (
            <div>
                <ClassCounter count={this.state.number} />
                <MemoFunctionCounter count={this.state.number} />
                <input ref={this.amountRef} />
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))