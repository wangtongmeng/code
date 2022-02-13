import React from './react';
import ReactDOM from './react-dom';

/**
  1.在React能管理的方法是更新是异步的，批量
  2.在React管理不到的地方更新就是同步的
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    //构建函数是唯一能直接给state直接赋值的地方
    this.state = { number: 0, age: 13 };
  }
  //event合成事件对象，并不是原生的事件对象
  handleClick = (event) => {
    console.log('handleButtonClick');
    //event.stopPropagation();
    //事件处理函数执行前
    //在handleClick方法中执行是批量的, 是异步的，会在方法执行结束之后再更新
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    setTimeout(() => {
      //在setTimeout里的更新是同步的
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
    });

  }
  handleDivClick = (event) => {
    console.log('handleDivClick');
  }
  render() {
    return (
      <div onClick={this.handleDivClick}>
        <p>number:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

let element = <Counter />;

ReactDOM.render(
  element,
  document.getElementById('root')
);