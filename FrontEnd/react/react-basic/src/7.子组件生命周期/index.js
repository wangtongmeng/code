import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component { // 他会比较两个状态相等就不会刷新视图 PureComponent是浅比较
    static defaultProps = {
        name: 'lisi'
    }
    constructor(props) {
        super(props)
        this.state = { number: 0 }
        console.log('Counter 1.constructor');
    }
    componentWillMount() { // 取本地的数据 同步的方式：采用渲染之前获取数据，只渲染一次
        console.log('Counter 2.componentWillMount');
    }
    componentDidMount() {
        console.log('Counter 4.componentDidMount');
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }
    // react可以shouldComponentUpdate方法中优化 PureComponent 可以帮我们做这件事
    shouldComponentUpdate(nextProps, nextState) {  // 代表的是下一次的属性 和 下一次的状态
        console.log('Counter nextState.number', nextState.number);
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
        console.log('Counter 3.render');
        return (
            <div>
                <p>{this.state.number}</p>
                {this.state.number === 4 ? null : <ChildCounter count={this.state.number} />}
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }

}


class ChildCounter extends React.Component {
    componentWillMount() {
        console.log('ChildCounter 1.componentWillMount');
    }
    render() {
        console.log('ChildCounter 2.render');
        return (<div>
            {this.props.count}
        </div>)
    }
    componentDidMount() {
        console.log('ChildCounter 3.componentDidMount');
    }
    componentWillReceiveProps(newProps) { // 第一次不会执行，之后属性更新时才会执行
        console.log('ChildCounter 4.componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('ChildCounter nextProps.count', nextProps.count);
        console.log('ChildCounter 5.shouldComponentUpdate');
        return nextProps.count % 3 === 0 // 子组件判断接收的属性 是否满足更新条件 为true则更新
    }
    componentDidUpdate() {
        console.log('ChildCounter 6.componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('ChildCounter 7.componentWillUnmount');
    }
}


ReactDOM.render(<Counter />, document.getElementById('root'))



/*
初始化渲染
Counter 1.constructor
Counter 2.componentWillMount
Counter 3.render
ChildCounter 1.componentWillMount
ChildCounter 2.render
ChildCounter 3.componentDidMount
Counter 4.componentDidMount

点击第1次
Counter nextState.number 1
Counter 5.shouldComponentUpdate 1%2===0 false 不继续

点击第2次
Counter nextState.number 2
Counter 5.shouldComponentUpdate 2%2===0 true 继续
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 4.componentWillReceiveProps
ChildCounter nextProps.count 2 2%3===0 false 不继续
ChildCounter 5.shouldComponentUpdate
Counter 7.componentDidUpdate

点击第3次
Counter nextState.number 3
Counter 5.shouldComponentUpdate 3%2===0 false 不继续

点击第4次
Counter nextState.number 4
Counter 5.shouldComponentUpdate 4%2===0 继续
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 7.componentWillUnmount 子组件卸载
Counter 7.componentDidUpdate

点击第5次
Counter nextState.number 5
Counter 5.shouldComponentUpdate 5%2===0 false 不继续

点击第6次
Counter nextState.number 6 6%2===0 true 继续
Counter 5.shouldComponentUpdate
Counter 6.componentWillUpdate
Counter 3.render
ChildCounter 1.componentWillMount
ChildCounter 2.render
ChildCounter 3.componentDidMount
Counter 7.componentDidUpdate

*/
