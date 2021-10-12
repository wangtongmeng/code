// import React from 'react'
// import ReactDOM from 'react-dom'
// class Counter extends 



import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
    static defaultProps = {
        name: 'lisi'
    }
    constructor(props) {
        super(props)
        this.state = { number: 0 }
        console.log('Counter 1.constructor');
    }
    componentWillUnmount() {
        console.log('Counter 2.componentWillUnmount');
    }
    componentDidMount() {
        console.log('Counter 4.componentDidMount');
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }
    // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
    shouldComponentUpdate(nextProps, nextState) { // 代表的是下一次的属性 和 下一次的状态
        console.log('Counter 5.shouldComponentUpdate');
        return nextState.number % 2 === 0
    } //不要随便用setState 可能会死循环
    componentWillUpdate() {
        console.log('Counter 6.componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Counter 7.componentDidUpdate');
    }
    render() {
        console.log("Counter 3.render");
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))


/* 
初次渲染
Counter 1.constructor
Counter 3.render
Counter 4.componentDidMount
第一次点击button
Counter 5.shouldComponentUpdate
第二次点击button
Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
Counter 7.componentDidUpdate
*/