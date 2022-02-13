import React from './react';
import ReactDOM from './react-dom';
class ClassCounter extends React.PureComponent {
  render() {
    console.log('ClassCounter render');
    return (
      <div>ClassCounter:{this.props.count}</div>
    )
  }
}
function FunctionCounter(props) {
  console.log('FunctionCounter render');
  return (
    <div>FunctionCounter:{props.count}</div>
  )
}
//新组件就有类似于PureComponent的功能了，函数没有状态，只需要比较属性就要可以了
const MemoFunctionCounter = React.memo(FunctionCounter);
console.log(MemoFunctionCounter);
class App extends React.Component {
  constructor() {
    super();
    this.state = { number: 0 };
    this.amountRef = React.createRef();
  }
  handleClick = (event) => {
    let number = this.state.number + parseInt(this.amountRef.current.value);
    this.setState({ number });
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <ClassCounter count={this.state.number} />
        <MemoFunctionCounter count={this.state.number} />
        <input ref={this.amountRef} />
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
