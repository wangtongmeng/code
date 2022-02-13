import React from './react';
import ReactDOM from './react-dom';
/**
 * 当你想改造一个第三方的组件库，又不能去改它的源代码
 */
class Button extends React.Component {
  state = { name: '按钮' }
  componentWillMount() {
    console.log('Button componentWillMount');
  }
  componentDidMount() {
    console.log('Button componentDidMount');
  }
  render() {
    console.log('Button render');
    return <button name={this.state.name} title={this.props.title} >按钮</button>
  }
}

const enhancer = OldComponent => {
  return class extends OldComponent {
    state = { number: 0 }
    componentWillMount() {
      console.log('enhancer componentWillMount');
      super.componentWillMount();
    }
    componentDidMount() {
      console.log('enhancer componentDidMount');
      super.componentDidMount();
    }
    handleClick = () => {
      this.setState({ number: this.state.number + 1 })
    }
    render() {
      console.log('enhancer render');
      let renderElement = super.render();
      let newProps = {
        ...renderElement.props,
        ...this.state,
        onClick: this.handleClick
      }
      return React.cloneElement(renderElement, newProps, this.state.number, this.state.number);
    }
  }
}
const EnhancedButton = enhancer(Button);
ReactDOM.render(
  <EnhancedButton title="标题" />,
  document.getElementById('root')
);
