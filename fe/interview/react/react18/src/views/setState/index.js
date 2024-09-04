import React from "react";
class Counter extends React.Component {
  state = { number: 0 };
  buttonClick = () => {
    // 第一题 setState是异步的，并且结果合并了
    // this.setState({ number: this.state.number + 1 }, () => {
    //   console.log("回调", this.state.number); // 1
    // });
    // console.log(this.state.number); // 0
    // this.setState({ number: this.state.number + 1 }, () => {
    //   console.log("回调", this.state.number); // 1
    // });
    // console.log(this.state.number); // 0
    // 0 0 1 1

    // 第二题 通过函数的形式，让每次state相加都生效
    // this.setState(
    //   (state) => ({ number: state.number + 1 }),
    //   () => {
    //     console.log(this.state.number);
    //   }
    // );
    // console.log(this.state.number);
    // this.setState(
    //   (state) => ({ number: state.number + 1 }),
    //   () => {
    //     console.log(this.state.number);
    //   }
    // );
    // console.log(this.state.number);
    // 0 0 2 2

    // 第3题
    this.setState(
      (state) => ({ number: state.number + 1 }),
      () => {
        console.log(this.state.number);
      }
    );
    console.log("1", this.state.number);
    this.setState(
      (state) => ({ number: state.number + 1 }),
      () => {
        console.log(this.state.number);
      }
    );
    console.log("2", this.state.number);

    setTimeout(() => {
      this.setState(
        (state) => ({ number: state.number + 1 }),
        () => {
          console.log(this.state.number);
        }
      );
      console.log("3", this.state.number);

      this.setState(
        (state) => ({ number: state.number + 1 }),
        () => {
          console.log(this.state.number);
        }
      );
      console.log("4", this.state.number);
    });
    //  1 0
    //  2 0
    //  2
    //  2
    //  3 2
    //  4 2
    //  4
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
