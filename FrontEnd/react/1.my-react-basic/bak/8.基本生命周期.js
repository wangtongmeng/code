import React from './react';
import ReactDOM from './react-dom';
/**
 * 类组件的生命周期
 */
class Counter extends React.Component {
  //设置默认属性对象
  static defaultProps = {
    name: 'zhufeng'
  }
  constructor(props) {
    super(props);
    //设置默认状态对象
    this.state = { number: 0 };
    console.log(`Counter 1.constructor`);
  }
  componentWillMount() {
    console.log(`Counter 2.componentWillMount`);
  }
  componentDidMount() {
    console.log(`Counter 4.componentDidMount`);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Counter 5.shouldComponentUpdate`);
    //this.state其实都会更新
    //奇数不更新界面，偶数更新界面。不管要不要更新 
    return nextState.number % 2 === 0;
  }
  componentWillUpdate() {
    console.log(`Counter 6.componentWillUpdate`);
  }
  componentDidUpdate() {
    console.log(`Counter 7.componentDidUpdate`);
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  }
  render() {
    console.log(`Counter 3.render`);
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
