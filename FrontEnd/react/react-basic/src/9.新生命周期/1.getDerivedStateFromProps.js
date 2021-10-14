/* 
static getDerivedStateFromProps(props, state) 这个生命周期的功能实际上就是将传入的props映射到state上面
*/

import React from 'react'
import ReactDOM from 'react-dom'
class Counter extends React.Component {
    static defaultProps = {
        name: 'lisi'
    }
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <ChildCounter number={this.state.number} />
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

class ChildCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('ChildCounter getDerivedStateFromProps nextProps, prevState', nextProps, prevState);
        const { number } = nextProps
        // 当传入的type发生变化的时候，更新state
        if (number % 2 === 0) {
            return { number: number * 2 }
        } else {
            return { number: number * 3 }
        }
    }
    render() {
        console.log('ChildCounter render', this.state);
        return <div>{this.state.number}</div>
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))


/* 
初渲染
ChildCounter getDerivedStateFromProps nextProps, prevState {number: 0} {number: 0}
ChildCounter render {number: 0}

点击按钮
ChildCounter getDerivedStateFromProps nextProps, prevState {number: 1} {number: 0} props更新
ChildCounter render {number: 3}

*/