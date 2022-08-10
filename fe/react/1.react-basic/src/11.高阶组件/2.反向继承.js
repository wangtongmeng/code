/* 
基于反向继承：拦截生命周期、state、渲染过程
*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Button extends Component {
    state = { name: 'lisi' }
    componentWillMount() {
        console.log('Button componentWillMount');
    }
    componentDidMount() {
        console.log('Button componentDidMount');
    }
    render() {
        console.log('Button render');
        return <button name={this.state.name} title={this.props.title} />
    }
}

const wrapper = OldComponent => {
    return class NewComponent extends OldComponent {
        state = { number: 0 }
        componentWillMount() {
            console.log('WrapperButton componentWillMount');
            super.componentWillMount()
        }
        componentDidMount() {
            console.log('WrapperButton componentDidMount');
            super.componentDidMount()
        }
        handleClick = () => {
            this.setState({ number: this.state.number + 1 })
        }
        render() {
            console.log('WrapperButton render');
            let renderElement = super.render()
            let newProps = {
                ...renderElement.props,
                ...this.state,
                onClick: this.handleClick
            }
            return React.cloneElement(
                renderElement,
                newProps,
                this.state.number
            )
        }
    }
}
let WrapperButton = wrapper(Button)
ReactDOM.render(<WrapperButton title="标题" />, document.getElementById('root'))



/* 
WrapperButton componentWillMount
Button componentWillMount
WrapperButton render
Button render
WrapperButton componentDidMount
Button componentDidMount
点击button
WrapperButton render
Button render
*/