import React from "react";
class Counter extends React.Component {
  state = { number: 0 };
  buttonClick = () => {
    // 第1题
    // this.setState({ number: this.state.number + 1 });
    // console.log(this.state.number);
    // this.setState({ number: this.state.number + 1 });
    // console.log(this.state.number);
    // setTimeout(() => {
    //   this.setState({ number: this.state.number + 1 });
    //   console.log(this.state.number);
    //   this.setState({ number: this.state.number + 1 });
    //   console.log(this.state.number);
    // }, 0);
    // 0 0 1 1
    // 第2题 如何拿到最新的值
    // this.setState({ number: this.state.number + 1 }, (x) => {
    //   console.log(this.state.number); // 1
    // });
    // 第3题
    // this.setState({ number: 1 }, () => {
    //   console.log(this.state.number); // 2
    // });
    // this.setState({ number: 2 }, () => {
    //   console.log(this.state.number); // 2
    // });
    // 说明回调是统一执行的
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.buttonClick}>+</button>
      </div>
    );
  }
}

export default Counter;
